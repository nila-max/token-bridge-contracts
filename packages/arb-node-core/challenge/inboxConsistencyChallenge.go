package challenge

import (
	"context"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/offchainlabs/arbitrum/packages/arb-node-core/core"
	"github.com/offchainlabs/arbitrum/packages/arb-node-core/ethbridge"
	"math/big"
)

type InboxConsistencyImpl struct {
	inboxMaxCount *big.Int
}

func (i *InboxConsistencyImpl) inboxOffset(offset *big.Int) *big.Int {
	return new(big.Int).Sub(i.inboxMaxCount, offset)
}

func (i *InboxConsistencyImpl) GetCuts(lookup core.ValidatorLookup, offsets []*big.Int) ([]core.Cut, error) {
	return getCutsSimple(i, lookup, offsets)
}

func (i *InboxConsistencyImpl) FindFirstDivergence(lookup core.ValidatorLookup, offsets []*big.Int, cuts []core.Cut) (int, error) {
	return findFirstDivergenceSimple(i, lookup, offsets, cuts)
}

func (i *InboxConsistencyImpl) GetCut(lookup core.ValidatorLookup, offset *big.Int) (core.Cut, error) {
	inboxOffset := i.inboxOffset(offset)
	inboxAcc, err := lookup.GetInboxAcc(inboxOffset)
	if err != nil {
		return nil, err
	}
	return core.NewSimpleCut(inboxAcc), nil
}

func (i *InboxConsistencyImpl) Bisect(
	ctx context.Context,
	challenge *ethbridge.Challenge,
	prevBisection *core.Bisection,
	segmentToChallenge int,
	subCuts []core.Cut,
) (*types.Transaction, error) {
	return challenge.BisectInboxConsistency(
		ctx,
		prevBisection,
		segmentToChallenge,
		subCuts,
	)
}

func (i *InboxConsistencyImpl) OneStepProof(
	ctx context.Context,
	challenge *ethbridge.Challenge,
	lookup core.ValidatorLookup,
	prevBisection *core.Bisection,
	segmentToChallenge int,
	challengedSegment *core.ChallengeSegment,
) (*types.Transaction, error) {
	inboxOffset := i.inboxOffset(challengedSegment.Start)
	beforeInboxAcc, err := lookup.GetInboxAcc(inboxOffset)
	if err != nil {
		return nil, err
	}
	msgs, err := lookup.GetMessages(new(big.Int).Sub(inboxOffset, big.NewInt(2)), big.NewInt(1))
	if err != nil {
		return nil, err
	}
	return challenge.OneStepProveInboxConsistency(
		ctx,
		prevBisection,
		segmentToChallenge,
		beforeInboxAcc,
		msgs[0].CommitmentHash(),
	)
}
