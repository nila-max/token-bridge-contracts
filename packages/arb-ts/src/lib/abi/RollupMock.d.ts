/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import type { TypedEventFilter, TypedEvent, TypedListener } from './common'

interface RollupMockInterface extends ethers.utils.Interface {
  functions: {
    'sequencerInboxMaxDelayBlocks()': FunctionFragment
    'sequencerInboxMaxDelaySeconds()': FunctionFragment
    'setMock(uint256,uint256)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'sequencerInboxMaxDelayBlocks',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'sequencerInboxMaxDelaySeconds',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'setMock',
    values: [BigNumberish, BigNumberish]
  ): string

  decodeFunctionResult(
    functionFragment: 'sequencerInboxMaxDelayBlocks',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'sequencerInboxMaxDelaySeconds',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'setMock', data: BytesLike): Result

  events: {}
}

export class RollupMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: RollupMockInterface

  functions: {
    sequencerInboxMaxDelayBlocks(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    sequencerInboxMaxDelaySeconds(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    setMock(
      _sequencerInboxMaxDelayBlocks: BigNumberish,
      _sequencerInboxMaxDelaySeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  sequencerInboxMaxDelayBlocks(overrides?: CallOverrides): Promise<BigNumber>

  sequencerInboxMaxDelaySeconds(overrides?: CallOverrides): Promise<BigNumber>

  setMock(
    _sequencerInboxMaxDelayBlocks: BigNumberish,
    _sequencerInboxMaxDelaySeconds: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    sequencerInboxMaxDelayBlocks(overrides?: CallOverrides): Promise<BigNumber>

    sequencerInboxMaxDelaySeconds(overrides?: CallOverrides): Promise<BigNumber>

    setMock(
      _sequencerInboxMaxDelayBlocks: BigNumberish,
      _sequencerInboxMaxDelaySeconds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {}

  estimateGas: {
    sequencerInboxMaxDelayBlocks(overrides?: CallOverrides): Promise<BigNumber>

    sequencerInboxMaxDelaySeconds(overrides?: CallOverrides): Promise<BigNumber>

    setMock(
      _sequencerInboxMaxDelayBlocks: BigNumberish,
      _sequencerInboxMaxDelaySeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    sequencerInboxMaxDelayBlocks(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    sequencerInboxMaxDelaySeconds(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    setMock(
      _sequencerInboxMaxDelayBlocks: BigNumberish,
      _sequencerInboxMaxDelaySeconds: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
