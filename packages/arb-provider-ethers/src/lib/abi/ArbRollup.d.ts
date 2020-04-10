/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from 'ethers'
import { Listener, Provider } from 'ethers/providers'
import { Arrayish, BigNumber, BigNumberish, Interface } from 'ethers/utils'
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription,
} from '.'

interface ArbRollupInterface extends Interface {
  functions: {
    VERSION: TypedFunctionDescription<{ encode([]: []): string }>

    challengeFactory: TypedFunctionDescription<{ encode([]: []): string }>

    getStakeRequired: TypedFunctionDescription<{ encode([]: []): string }>

    globalInbox: TypedFunctionDescription<{ encode([]: []): string }>

    isStaked: TypedFunctionDescription<{
      encode([_stakerAddress]: [string]): string
    }>

    isValidLeaf: TypedFunctionDescription<{
      encode([leaf]: [Arrayish]): string
    }>

    latestConfirmed: TypedFunctionDescription<{ encode([]: []): string }>

    pruneLeaves: TypedFunctionDescription<{
      encode([
        fromNodes,
        leafProofs,
        leafProofLengths,
        latestConfProofs,
        latestConfirmedProofLengths,
      ]: [
        Arrayish[],
        Arrayish[],
        BigNumberish[],
        Arrayish[],
        BigNumberish[]
      ]): string
    }>

    resolveChallenge: TypedFunctionDescription<{
      encode([winner, loser]: [string, string, BigNumberish]): string
    }>

    startChallenge: TypedFunctionDescription<{
      encode([
        asserterAddress,
        challengerAddress,
        prevNode,
        deadlineTicks,
        stakerNodeTypes,
        vmProtoHashes,
        asserterProof,
        challengerProof,
        asserterNodeHash,
        challengerDataHash,
        challengerPeriodTicks,
      ]: [
        string,
        string,
        Arrayish,
        BigNumberish,
        BigNumberish[],
        Arrayish[],
        Arrayish[],
        Arrayish[],
        Arrayish,
        Arrayish,
        BigNumberish
      ]): string
    }>

    supportedContracts: TypedFunctionDescription<{
      encode([]: [string]): string
    }>

    vmParams: TypedFunctionDescription<{ encode([]: []): string }>

    init: TypedFunctionDescription<{
      encode([
        _vmState,
        _gracePeriodTicks,
        _arbGasSpeedLimitPerTick,
        _maxExecutionSteps,
        _maxTimeBoundsWidth,
        _stakeRequirement,
        _owner,
        _challengeFactoryAddress,
        _globalInboxAddress,
      ]: [
        Arrayish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        string,
        string
      ]): string
    }>

    forwardContractMessage: TypedFunctionDescription<{
      encode([_sender, _data]: [string, Arrayish]): string
    }>

    spawnCallProxy: TypedFunctionDescription<{
      encode([_arbContract]: [string]): string
    }>

    placeStake: TypedFunctionDescription<{
      encode([proof1, proof2]: [Arrayish[], Arrayish[]]): string
    }>

    moveStake: TypedFunctionDescription<{
      encode([proof1, proof2]: [Arrayish[], Arrayish[]]): string
    }>

    recoverStakeConfirmed: TypedFunctionDescription<{
      encode([proof]: [Arrayish[]]): string
    }>

    recoverStakeOld: TypedFunctionDescription<{
      encode([stakerAddress, proof]: [string, Arrayish[]]): string
    }>

    recoverStakeMooted: TypedFunctionDescription<{
      encode([stakerAddress, node, latestConfirmedProof, stakerProof]: [
        string,
        Arrayish,
        Arrayish[],
        Arrayish[]
      ]): string
    }>

    recoverStakePassedDeadline: TypedFunctionDescription<{
      encode([
        stakerAddress,
        deadlineTicks,
        disputableNodeHashVal,
        childType,
        vmProtoStateHash,
        proof,
      ]: [
        string,
        BigNumberish,
        Arrayish,
        BigNumberish,
        Arrayish,
        Arrayish[]
      ]): string
    }>

    makeAssertion: TypedFunctionDescription<{
      encode([
        _fields,
        _beforeInboxValueSize,
        _beforeInboxCount,
        _prevDeadlineTicks,
        _prevChildType,
        _numSteps,
        _timeBoundsBlocks,
        _importedMessageCount,
        _didInboxInsn,
        _numArbGas,
        _stakerProof,
      ]: [
        Arrayish[],
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish[],
        BigNumberish,
        boolean,
        BigNumberish,
        Arrayish[]
      ]): string
    }>

    ownerShutdown: TypedFunctionDescription<{ encode([]: []): string }>

    confirm: TypedFunctionDescription<{
      encode([
        initalProtoStateHash,
        branches,
        deadlineTicks,
        challengeNodeData,
        logsAcc,
        vmProtoStateHashes,
        messagesLengths,
        messages,
        stakerAddresses,
        stakerProofs,
        stakerProofOffsets,
      ]: [
        Arrayish,
        BigNumberish[],
        BigNumberish[],
        Arrayish[],
        Arrayish[],
        Arrayish[],
        BigNumberish[],
        Arrayish,
        string[],
        Arrayish[],
        BigNumberish[]
      ]): string
    }>
  }

  events: {
    ConfirmedAssertion: TypedEventDescription<{
      encodeTopics([logsAccHash]: [null]): string[]
    }>

    RollupAsserted: TypedEventDescription<{
      encodeTopics([
        fields,
        importedMessagesValueSize,
        inboxCount,
        importedMessageCount,
        timeBoundsBlocks,
        numArbGas,
        numSteps,
        didInboxInsn,
      ]: [null, null, null, null, null, null, null, null]): string[]
    }>

    RollupChallengeCompleted: TypedEventDescription<{
      encodeTopics([challengeContract, winner, loser]: [
        null,
        null,
        null
      ]): string[]
    }>

    RollupChallengeStarted: TypedEventDescription<{
      encodeTopics([asserter, challenger, challengeType, challengeContract]: [
        null,
        null,
        null,
        null
      ]): string[]
    }>

    RollupConfirmed: TypedEventDescription<{
      encodeTopics([nodeHash]: [null]): string[]
    }>

    RollupCreated: TypedEventDescription<{
      encodeTopics([initVMHash]: [null]): string[]
    }>

    RollupPruned: TypedEventDescription<{
      encodeTopics([leaf]: [null]): string[]
    }>

    RollupStakeCreated: TypedEventDescription<{
      encodeTopics([staker, nodeHash]: [null, null]): string[]
    }>

    RollupStakeMoved: TypedEventDescription<{
      encodeTopics([staker, toNodeHash]: [null, null]): string[]
    }>

    RollupStakeRefunded: TypedEventDescription<{
      encodeTopics([staker]: [null]): string[]
    }>
  }
}

export class ArbRollup extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ArbRollup
  attach(addressOrName: string): ArbRollup
  deployed(): Promise<ArbRollup>

  on(event: EventFilter | string, listener: Listener): ArbRollup
  once(event: EventFilter | string, listener: Listener): ArbRollup
  addListener(eventName: EventFilter | string, listener: Listener): ArbRollup
  removeAllListeners(eventName: EventFilter | string): ArbRollup
  removeListener(eventName: any, listener: Listener): ArbRollup

  interface: ArbRollupInterface

  functions: {
    VERSION(): Promise<string>

    challengeFactory(): Promise<string>

    getStakeRequired(): Promise<BigNumber>

    globalInbox(): Promise<string>

    isStaked(_stakerAddress: string): Promise<boolean>

    isValidLeaf(leaf: Arrayish): Promise<boolean>

    latestConfirmed(): Promise<string>

    pruneLeaves(
      fromNodes: Arrayish[],
      leafProofs: Arrayish[],
      leafProofLengths: BigNumberish[],
      latestConfProofs: Arrayish[],
      latestConfirmedProofLengths: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    resolveChallenge(
      winner: string,
      loser: string,
      arg2: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    startChallenge(
      asserterAddress: string,
      challengerAddress: string,
      prevNode: Arrayish,
      deadlineTicks: BigNumberish,
      stakerNodeTypes: BigNumberish[],
      vmProtoHashes: Arrayish[],
      asserterProof: Arrayish[],
      challengerProof: Arrayish[],
      asserterNodeHash: Arrayish,
      challengerDataHash: Arrayish,
      challengerPeriodTicks: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    supportedContracts(arg0: string): Promise<string>

    vmParams(): Promise<{
      gracePeriodTicks: BigNumber
      arbGasSpeedLimitPerTick: BigNumber
      maxExecutionSteps: BigNumber
      maxTimeBoundsWidth: BigNumber
      0: BigNumber
      1: BigNumber
      2: BigNumber
      3: BigNumber
    }>

    init(
      _vmState: Arrayish,
      _gracePeriodTicks: BigNumberish,
      _arbGasSpeedLimitPerTick: BigNumberish,
      _maxExecutionSteps: BigNumberish,
      _maxTimeBoundsWidth: BigNumberish,
      _stakeRequirement: BigNumberish,
      _owner: string,
      _challengeFactoryAddress: string,
      _globalInboxAddress: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    forwardContractMessage(
      _sender: string,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    spawnCallProxy(
      _arbContract: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    placeStake(
      proof1: Arrayish[],
      proof2: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    moveStake(
      proof1: Arrayish[],
      proof2: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    recoverStakeConfirmed(
      proof: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    recoverStakeOld(
      stakerAddress: string,
      proof: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    recoverStakeMooted(
      stakerAddress: string,
      node: Arrayish,
      latestConfirmedProof: Arrayish[],
      stakerProof: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    recoverStakePassedDeadline(
      stakerAddress: string,
      deadlineTicks: BigNumberish,
      disputableNodeHashVal: Arrayish,
      childType: BigNumberish,
      vmProtoStateHash: Arrayish,
      proof: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    makeAssertion(
      _fields: Arrayish[],
      _beforeInboxValueSize: BigNumberish,
      _beforeInboxCount: BigNumberish,
      _prevDeadlineTicks: BigNumberish,
      _prevChildType: BigNumberish,
      _numSteps: BigNumberish,
      _timeBoundsBlocks: BigNumberish[],
      _importedMessageCount: BigNumberish,
      _didInboxInsn: boolean,
      _numArbGas: BigNumberish,
      _stakerProof: Arrayish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    ownerShutdown(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    confirm(
      initalProtoStateHash: Arrayish,
      branches: BigNumberish[],
      deadlineTicks: BigNumberish[],
      challengeNodeData: Arrayish[],
      logsAcc: Arrayish[],
      vmProtoStateHashes: Arrayish[],
      messagesLengths: BigNumberish[],
      messages: Arrayish,
      stakerAddresses: string[],
      stakerProofs: Arrayish[],
      stakerProofOffsets: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>
  }

  VERSION(): Promise<string>

  challengeFactory(): Promise<string>

  getStakeRequired(): Promise<BigNumber>

  globalInbox(): Promise<string>

  isStaked(_stakerAddress: string): Promise<boolean>

  isValidLeaf(leaf: Arrayish): Promise<boolean>

  latestConfirmed(): Promise<string>

  pruneLeaves(
    fromNodes: Arrayish[],
    leafProofs: Arrayish[],
    leafProofLengths: BigNumberish[],
    latestConfProofs: Arrayish[],
    latestConfirmedProofLengths: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  resolveChallenge(
    winner: string,
    loser: string,
    arg2: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  startChallenge(
    asserterAddress: string,
    challengerAddress: string,
    prevNode: Arrayish,
    deadlineTicks: BigNumberish,
    stakerNodeTypes: BigNumberish[],
    vmProtoHashes: Arrayish[],
    asserterProof: Arrayish[],
    challengerProof: Arrayish[],
    asserterNodeHash: Arrayish,
    challengerDataHash: Arrayish,
    challengerPeriodTicks: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  supportedContracts(arg0: string): Promise<string>

  vmParams(): Promise<{
    gracePeriodTicks: BigNumber
    arbGasSpeedLimitPerTick: BigNumber
    maxExecutionSteps: BigNumber
    maxTimeBoundsWidth: BigNumber
    0: BigNumber
    1: BigNumber
    2: BigNumber
    3: BigNumber
  }>

  init(
    _vmState: Arrayish,
    _gracePeriodTicks: BigNumberish,
    _arbGasSpeedLimitPerTick: BigNumberish,
    _maxExecutionSteps: BigNumberish,
    _maxTimeBoundsWidth: BigNumberish,
    _stakeRequirement: BigNumberish,
    _owner: string,
    _challengeFactoryAddress: string,
    _globalInboxAddress: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  forwardContractMessage(
    _sender: string,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  spawnCallProxy(
    _arbContract: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  placeStake(
    proof1: Arrayish[],
    proof2: Arrayish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  moveStake(
    proof1: Arrayish[],
    proof2: Arrayish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  recoverStakeConfirmed(
    proof: Arrayish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  recoverStakeOld(
    stakerAddress: string,
    proof: Arrayish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  recoverStakeMooted(
    stakerAddress: string,
    node: Arrayish,
    latestConfirmedProof: Arrayish[],
    stakerProof: Arrayish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  recoverStakePassedDeadline(
    stakerAddress: string,
    deadlineTicks: BigNumberish,
    disputableNodeHashVal: Arrayish,
    childType: BigNumberish,
    vmProtoStateHash: Arrayish,
    proof: Arrayish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  makeAssertion(
    _fields: Arrayish[],
    _beforeInboxValueSize: BigNumberish,
    _beforeInboxCount: BigNumberish,
    _prevDeadlineTicks: BigNumberish,
    _prevChildType: BigNumberish,
    _numSteps: BigNumberish,
    _timeBoundsBlocks: BigNumberish[],
    _importedMessageCount: BigNumberish,
    _didInboxInsn: boolean,
    _numArbGas: BigNumberish,
    _stakerProof: Arrayish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  ownerShutdown(overrides?: TransactionOverrides): Promise<ContractTransaction>

  confirm(
    initalProtoStateHash: Arrayish,
    branches: BigNumberish[],
    deadlineTicks: BigNumberish[],
    challengeNodeData: Arrayish[],
    logsAcc: Arrayish[],
    vmProtoStateHashes: Arrayish[],
    messagesLengths: BigNumberish[],
    messages: Arrayish,
    stakerAddresses: string[],
    stakerProofs: Arrayish[],
    stakerProofOffsets: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  filters: {
    ConfirmedAssertion(logsAccHash: null): EventFilter

    RollupAsserted(
      fields: null,
      importedMessagesValueSize: null,
      inboxCount: null,
      importedMessageCount: null,
      timeBoundsBlocks: null,
      numArbGas: null,
      numSteps: null,
      didInboxInsn: null
    ): EventFilter

    RollupChallengeCompleted(
      challengeContract: null,
      winner: null,
      loser: null
    ): EventFilter

    RollupChallengeStarted(
      asserter: null,
      challenger: null,
      challengeType: null,
      challengeContract: null
    ): EventFilter

    RollupConfirmed(nodeHash: null): EventFilter

    RollupCreated(initVMHash: null): EventFilter

    RollupPruned(leaf: null): EventFilter

    RollupStakeCreated(staker: null, nodeHash: null): EventFilter

    RollupStakeMoved(staker: null, toNodeHash: null): EventFilter

    RollupStakeRefunded(staker: null): EventFilter
  }

  estimate: {
    VERSION(): Promise<BigNumber>

    challengeFactory(): Promise<BigNumber>

    getStakeRequired(): Promise<BigNumber>

    globalInbox(): Promise<BigNumber>

    isStaked(_stakerAddress: string): Promise<BigNumber>

    isValidLeaf(leaf: Arrayish): Promise<BigNumber>

    latestConfirmed(): Promise<BigNumber>

    pruneLeaves(
      fromNodes: Arrayish[],
      leafProofs: Arrayish[],
      leafProofLengths: BigNumberish[],
      latestConfProofs: Arrayish[],
      latestConfirmedProofLengths: BigNumberish[]
    ): Promise<BigNumber>

    resolveChallenge(
      winner: string,
      loser: string,
      arg2: BigNumberish
    ): Promise<BigNumber>

    startChallenge(
      asserterAddress: string,
      challengerAddress: string,
      prevNode: Arrayish,
      deadlineTicks: BigNumberish,
      stakerNodeTypes: BigNumberish[],
      vmProtoHashes: Arrayish[],
      asserterProof: Arrayish[],
      challengerProof: Arrayish[],
      asserterNodeHash: Arrayish,
      challengerDataHash: Arrayish,
      challengerPeriodTicks: BigNumberish
    ): Promise<BigNumber>

    supportedContracts(arg0: string): Promise<BigNumber>

    vmParams(): Promise<BigNumber>

    init(
      _vmState: Arrayish,
      _gracePeriodTicks: BigNumberish,
      _arbGasSpeedLimitPerTick: BigNumberish,
      _maxExecutionSteps: BigNumberish,
      _maxTimeBoundsWidth: BigNumberish,
      _stakeRequirement: BigNumberish,
      _owner: string,
      _challengeFactoryAddress: string,
      _globalInboxAddress: string
    ): Promise<BigNumber>

    forwardContractMessage(_sender: string, _data: Arrayish): Promise<BigNumber>

    spawnCallProxy(_arbContract: string): Promise<BigNumber>

    placeStake(proof1: Arrayish[], proof2: Arrayish[]): Promise<BigNumber>

    moveStake(proof1: Arrayish[], proof2: Arrayish[]): Promise<BigNumber>

    recoverStakeConfirmed(proof: Arrayish[]): Promise<BigNumber>

    recoverStakeOld(
      stakerAddress: string,
      proof: Arrayish[]
    ): Promise<BigNumber>

    recoverStakeMooted(
      stakerAddress: string,
      node: Arrayish,
      latestConfirmedProof: Arrayish[],
      stakerProof: Arrayish[]
    ): Promise<BigNumber>

    recoverStakePassedDeadline(
      stakerAddress: string,
      deadlineTicks: BigNumberish,
      disputableNodeHashVal: Arrayish,
      childType: BigNumberish,
      vmProtoStateHash: Arrayish,
      proof: Arrayish[]
    ): Promise<BigNumber>

    makeAssertion(
      _fields: Arrayish[],
      _beforeInboxValueSize: BigNumberish,
      _beforeInboxCount: BigNumberish,
      _prevDeadlineTicks: BigNumberish,
      _prevChildType: BigNumberish,
      _numSteps: BigNumberish,
      _timeBoundsBlocks: BigNumberish[],
      _importedMessageCount: BigNumberish,
      _didInboxInsn: boolean,
      _numArbGas: BigNumberish,
      _stakerProof: Arrayish[]
    ): Promise<BigNumber>

    ownerShutdown(): Promise<BigNumber>

    confirm(
      initalProtoStateHash: Arrayish,
      branches: BigNumberish[],
      deadlineTicks: BigNumberish[],
      challengeNodeData: Arrayish[],
      logsAcc: Arrayish[],
      vmProtoStateHashes: Arrayish[],
      messagesLengths: BigNumberish[],
      messages: Arrayish,
      stakerAddresses: string[],
      stakerProofs: Arrayish[],
      stakerProofOffsets: BigNumberish[]
    ): Promise<BigNumber>
  }
}
