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
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface RollupCreatorInterface extends ethers.utils.Interface {
  functions: {
    'bridgeCreator()': FunctionFragment
    'challengeFactory()': FunctionFragment
    'createRollup(bytes32,uint256,uint256,uint256,uint256,address,address,address,uint256,uint256,bytes)': FunctionFragment
    'nodeFactory()': FunctionFragment
    'owner()': FunctionFragment
    'renounceOwnership()': FunctionFragment
    'rollupAdminFacet()': FunctionFragment
    'rollupTemplate()': FunctionFragment
    'rollupUserFacet()': FunctionFragment
    'setTemplates(address,address,address,address,address,address)': FunctionFragment
    'transferOwnership(address)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'bridgeCreator',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'challengeFactory',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'createRollup',
    values: [
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(
    functionFragment: 'nodeFactory',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'rollupAdminFacet',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'rollupTemplate',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'rollupUserFacet',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'setTemplates',
    values: [string, string, string, string, string, string]
  ): string
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string]
  ): string

  decodeFunctionResult(
    functionFragment: 'bridgeCreator',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'challengeFactory',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'createRollup',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'nodeFactory', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'rollupAdminFacet',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'rollupTemplate',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'rollupUserFacet',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'setTemplates',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike
  ): Result

  events: {
    'OwnershipTransferred(address,address)': EventFragment
    'RollupCreated(address,address,address)': EventFragment
    'TemplatesUpdated()': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'RollupCreated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TemplatesUpdated'): EventFragment
}

export class RollupCreator extends BaseContract {
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

  interface: RollupCreatorInterface

  functions: {
    bridgeCreator(overrides?: CallOverrides): Promise<[string]>

    challengeFactory(overrides?: CallOverrides): Promise<[string]>

    createRollup(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _rollupOwner: string,
      _sequencer: string,
      _sequencerDelayBlocks: BigNumberish,
      _sequencerDelaySeconds: BigNumberish,
      _extraConfig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    nodeFactory(overrides?: CallOverrides): Promise<[string]>

    owner(overrides?: CallOverrides): Promise<[string]>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    rollupAdminFacet(overrides?: CallOverrides): Promise<[string]>

    rollupTemplate(overrides?: CallOverrides): Promise<[string]>

    rollupUserFacet(overrides?: CallOverrides): Promise<[string]>

    setTemplates(
      _bridgeCreator: string,
      _rollupTemplate: string,
      _challengeFactory: string,
      _nodeFactory: string,
      _rollupAdminFacet: string,
      _rollupUserFacet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  bridgeCreator(overrides?: CallOverrides): Promise<string>

  challengeFactory(overrides?: CallOverrides): Promise<string>

  createRollup(
    _machineHash: BytesLike,
    _confirmPeriodBlocks: BigNumberish,
    _extraChallengeTimeBlocks: BigNumberish,
    _arbGasSpeedLimitPerBlock: BigNumberish,
    _baseStake: BigNumberish,
    _stakeToken: string,
    _rollupOwner: string,
    _sequencer: string,
    _sequencerDelayBlocks: BigNumberish,
    _sequencerDelaySeconds: BigNumberish,
    _extraConfig: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  nodeFactory(overrides?: CallOverrides): Promise<string>

  owner(overrides?: CallOverrides): Promise<string>

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  rollupAdminFacet(overrides?: CallOverrides): Promise<string>

  rollupTemplate(overrides?: CallOverrides): Promise<string>

  rollupUserFacet(overrides?: CallOverrides): Promise<string>

  setTemplates(
    _bridgeCreator: string,
    _rollupTemplate: string,
    _challengeFactory: string,
    _nodeFactory: string,
    _rollupAdminFacet: string,
    _rollupUserFacet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    bridgeCreator(overrides?: CallOverrides): Promise<string>

    challengeFactory(overrides?: CallOverrides): Promise<string>

    createRollup(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _rollupOwner: string,
      _sequencer: string,
      _sequencerDelayBlocks: BigNumberish,
      _sequencerDelaySeconds: BigNumberish,
      _extraConfig: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    nodeFactory(overrides?: CallOverrides): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    renounceOwnership(overrides?: CallOverrides): Promise<void>

    rollupAdminFacet(overrides?: CallOverrides): Promise<string>

    rollupTemplate(overrides?: CallOverrides): Promise<string>

    rollupUserFacet(overrides?: CallOverrides): Promise<string>

    setTemplates(
      _bridgeCreator: string,
      _rollupTemplate: string,
      _challengeFactory: string,
      _nodeFactory: string,
      _rollupAdminFacet: string,
      _rollupUserFacet: string,
      overrides?: CallOverrides
    ): Promise<void>

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >

    RollupCreated(
      rollupAddress?: string | null,
      inboxAddress?: null,
      adminProxy?: null
    ): TypedEventFilter<
      [string, string, string],
      { rollupAddress: string; inboxAddress: string; adminProxy: string }
    >

    TemplatesUpdated(): TypedEventFilter<[], {}>
  }

  estimateGas: {
    bridgeCreator(overrides?: CallOverrides): Promise<BigNumber>

    challengeFactory(overrides?: CallOverrides): Promise<BigNumber>

    createRollup(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _rollupOwner: string,
      _sequencer: string,
      _sequencerDelayBlocks: BigNumberish,
      _sequencerDelaySeconds: BigNumberish,
      _extraConfig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    nodeFactory(overrides?: CallOverrides): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    rollupAdminFacet(overrides?: CallOverrides): Promise<BigNumber>

    rollupTemplate(overrides?: CallOverrides): Promise<BigNumber>

    rollupUserFacet(overrides?: CallOverrides): Promise<BigNumber>

    setTemplates(
      _bridgeCreator: string,
      _rollupTemplate: string,
      _challengeFactory: string,
      _nodeFactory: string,
      _rollupAdminFacet: string,
      _rollupUserFacet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    bridgeCreator(overrides?: CallOverrides): Promise<PopulatedTransaction>

    challengeFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>

    createRollup(
      _machineHash: BytesLike,
      _confirmPeriodBlocks: BigNumberish,
      _extraChallengeTimeBlocks: BigNumberish,
      _arbGasSpeedLimitPerBlock: BigNumberish,
      _baseStake: BigNumberish,
      _stakeToken: string,
      _rollupOwner: string,
      _sequencer: string,
      _sequencerDelayBlocks: BigNumberish,
      _sequencerDelaySeconds: BigNumberish,
      _extraConfig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    nodeFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    rollupAdminFacet(overrides?: CallOverrides): Promise<PopulatedTransaction>

    rollupTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>

    rollupUserFacet(overrides?: CallOverrides): Promise<PopulatedTransaction>

    setTemplates(
      _bridgeCreator: string,
      _rollupTemplate: string,
      _challengeFactory: string,
      _nodeFactory: string,
      _rollupAdminFacet: string,
      _rollupUserFacet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
