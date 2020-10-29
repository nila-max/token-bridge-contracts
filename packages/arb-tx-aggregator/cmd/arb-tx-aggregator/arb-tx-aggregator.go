/*
 * Copyright 2020, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package main

import (
	"context"
	"flag"
	"github.com/offchainlabs/arbitrum/packages/arb-evm/message"
	"github.com/offchainlabs/arbitrum/packages/arb-tx-aggregator/rpc"
	"github.com/offchainlabs/arbitrum/packages/arb-validator-core/ethutils"
	"log"
	"os"
	"path/filepath"
	"time"

	utils2 "github.com/offchainlabs/arbitrum/packages/arb-tx-aggregator/utils"
	"github.com/offchainlabs/arbitrum/packages/arb-util/common"
	"github.com/offchainlabs/arbitrum/packages/arb-validator-core/arbbridge"
	"github.com/offchainlabs/arbitrum/packages/arb-validator-core/ethbridge"
	"github.com/offchainlabs/arbitrum/packages/arb-validator-core/utils"
	//_ "net/http/pprof"
)

func main() {
	// Enable line numbers in logging
	log.SetFlags(log.LstdFlags | log.Lshortfile)

	fs := flag.NewFlagSet("", flag.ContinueOnError)
	walletArgs := utils.AddWalletFlags(fs)
	rpcVars := utils2.AddRPCFlags(fs)
	keepPendingState := fs.Bool("pending", false, "enable pending state tracking")

	maxBatchTime := fs.Int64(
		"maxBatchTime",
		10,
		"maxBatchTime=NumSeconds",
	)

	forwardTxURL := fs.String("forward-url", "", "url of another aggregator to send transactions through")
	var batcherMode rpc.BatcherMode
	if *forwardTxURL != "" {
		batcherMode = rpc.ForwarderBatcherMode{NodeURL: *forwardTxURL}
	} else if *keepPendingState {
		batcherMode = rpc.StatefulBatcherMode{}
	} else {
		batcherMode = rpc.StatelessBatcherMode{}
	}

	//go http.ListenAndServe("localhost:6060", nil)

	err := fs.Parse(os.Args[1:])
	if err != nil {
		log.Fatal(err)
	}

	if fs.NArg() != 3 {
		log.Fatalf(
			"usage: arb-tx-aggregator [--maxBatchTime=NumSeconds] %v %v",
			utils.WalletArgsString,
			utils.RollupArgsString,
		)
	}

	rollupArgs := utils.ParseRollupCommand(fs, 0)

	auth, err := utils.GetKeystore(rollupArgs.ValidatorFolder, walletArgs, fs)
	if err != nil {
		log.Fatal(err)
	}

	ethclint, err := ethutils.NewRPCEthClient(rollupArgs.EthURL)
	if err != nil {
		log.Fatal(err)
	}

	if err := arbbridge.WaitForBalance(
		context.Background(),
		ethbridge.NewEthClient(ethclint),
		common.Address{},
		common.NewAddressFromEth(auth.From),
	); err != nil {
		log.Fatal(err)
	}

	contractFile := filepath.Join(rollupArgs.ValidatorFolder, "contract.mexe")
	dbPath := filepath.Join(rollupArgs.ValidatorFolder, "checkpoint_db")

	log.Println("Launching aggregator for chain", rollupArgs.Address, "with chain id", message.ChainAddressToID(rollupArgs.Address))

	if err := rpc.LaunchAggregator(
		context.Background(),
		ethclint,
		auth,
		rollupArgs.Address,
		contractFile,
		dbPath,
		"1235",
		"8547",
		"8548",
		rpcVars,
		time.Duration(*maxBatchTime)*time.Second,
		batcherMode,
	); err != nil {
		log.Fatal(err)
	}
}
