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
  PayableOverrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import { TypedEventFilter, TypedEvent, TypedListener } from './commons'

interface L2WethGatewayTesterInterface extends ethers.utils.Interface {
  functions: {
    'calculateL2TokenAddress(address)': FunctionFragment
    'counterpartGateway()': FunctionFragment
    'exitNum()': FunctionFragment
    'finalizeInboundTransfer(address,address,address,uint256,bytes)': FunctionFragment
    'gasReserveIfCallRevert()': FunctionFragment
    'getOutboundCalldata(address,address,address,uint256,bytes)': FunctionFragment
    'inboundEscrowAndCall(address,uint256,address,address,bytes)': FunctionFragment
    'initialize(address,address,address,address)': FunctionFragment
    'l1Weth()': FunctionFragment
    'l2Weth()': FunctionFragment
    'outboundTransfer(address,address,uint256,bytes)': FunctionFragment
    'router()': FunctionFragment
    'setL2WethAddress(address)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'calculateL2TokenAddress',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'counterpartGateway',
    values?: undefined
  ): string
  encodeFunctionData(functionFragment: 'exitNum', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'finalizeInboundTransfer',
    values: [string, string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'gasReserveIfCallRevert',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'getOutboundCalldata',
    values: [string, string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'inboundEscrowAndCall',
    values: [string, BigNumberish, string, string, BytesLike]
  ): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, string, string, string]
  ): string
  encodeFunctionData(functionFragment: 'l1Weth', values?: undefined): string
  encodeFunctionData(functionFragment: 'l2Weth', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'outboundTransfer',
    values: [string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'router', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'setL2WethAddress',
    values: [string]
  ): string

  decodeFunctionResult(
    functionFragment: 'calculateL2TokenAddress',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'counterpartGateway',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'exitNum', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'finalizeInboundTransfer',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'gasReserveIfCallRevert',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getOutboundCalldata',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'inboundEscrowAndCall',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'l1Weth', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'l2Weth', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'outboundTransfer',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'router', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'setL2WethAddress',
    data: BytesLike
  ): Result

  events: {
    'DepositFinalized(address,address,address,uint256)': EventFragment
    'DepositInitiated(address,address,address,uint256,uint256)': EventFragment
    'TransferAndCallTriggered(bool,address,address,uint256,bytes)': EventFragment
    'TxToL1(address,address,uint256,bytes)': EventFragment
    'WithdrawalFinalized(address,address,address,uint256,uint256)': EventFragment
    'WithdrawalInitiated(address,address,address,uint256,uint256,uint256)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'DepositFinalized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'DepositInitiated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TransferAndCallTriggered'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TxToL1'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'WithdrawalFinalized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'WithdrawalInitiated'): EventFragment
}

export class L2WethGatewayTester extends BaseContract {
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

  interface: L2WethGatewayTesterInterface

  functions: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    counterpartGateway(overrides?: CallOverrides): Promise<[string]>

    exitNum(overrides?: CallOverrides): Promise<[BigNumber]>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    gasReserveIfCallRevert(overrides?: CallOverrides): Promise<[BigNumber]>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { outboundCalldata: string }>

    inboundEscrowAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    initialize(
      _l1Counterpart: string,
      _router: string,
      _l1Weth: string,
      _l2Weth: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    l1Weth(overrides?: CallOverrides): Promise<[string]>

    l2Weth(overrides?: CallOverrides): Promise<[string]>

    'outboundTransfer(address,address,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    router(overrides?: CallOverrides): Promise<[string]>

    setL2WethAddress(
      _l2Weth: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  calculateL2TokenAddress(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>

  counterpartGateway(overrides?: CallOverrides): Promise<string>

  exitNum(overrides?: CallOverrides): Promise<BigNumber>

  finalizeInboundTransfer(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  gasReserveIfCallRevert(overrides?: CallOverrides): Promise<BigNumber>

  getOutboundCalldata(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  inboundEscrowAndCall(
    _l2Address: string,
    _amount: BigNumberish,
    _from: string,
    _to: string,
    _data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  initialize(
    _l1Counterpart: string,
    _router: string,
    _l1Weth: string,
    _l2Weth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  l1Weth(overrides?: CallOverrides): Promise<string>

  l2Weth(overrides?: CallOverrides): Promise<string>

  'outboundTransfer(address,address,uint256,bytes)'(
    _l1Token: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
    _l1Token: string,
    _to: string,
    _amount: BigNumberish,
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  router(overrides?: CallOverrides): Promise<string>

  setL2WethAddress(
    _l2Weth: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>

    counterpartGateway(overrides?: CallOverrides): Promise<string>

    exitNum(overrides?: CallOverrides): Promise<BigNumber>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    gasReserveIfCallRevert(overrides?: CallOverrides): Promise<BigNumber>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    inboundEscrowAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>

    initialize(
      _l1Counterpart: string,
      _router: string,
      _l1Weth: string,
      _l2Weth: string,
      overrides?: CallOverrides
    ): Promise<void>

    l1Weth(overrides?: CallOverrides): Promise<string>

    l2Weth(overrides?: CallOverrides): Promise<string>

    'outboundTransfer(address,address,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    router(overrides?: CallOverrides): Promise<string>

    setL2WethAddress(_l2Weth: string, overrides?: CallOverrides): Promise<void>
  }

  filters: {
    DepositFinalized(
      l1Token?: string | null,
      _from?: string | null,
      _to?: string | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber],
      { l1Token: string; _from: string; _to: string; _amount: BigNumber }
    >

    DepositInitiated(
      l1Token?: null,
      _from?: string | null,
      _to?: string | null,
      _sequenceNumber?: BigNumberish | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        l1Token: string
        _from: string
        _to: string
        _sequenceNumber: BigNumber
        _amount: BigNumber
      }
    >

    TransferAndCallTriggered(
      success?: null,
      _from?: string | null,
      _to?: string | null,
      _amount?: null,
      callHookData?: null
    ): TypedEventFilter<
      [boolean, string, string, BigNumber, string],
      {
        success: boolean
        _from: string
        _to: string
        _amount: BigNumber
        callHookData: string
      }
    >

    TxToL1(
      _from?: string | null,
      _to?: string | null,
      _id?: BigNumberish | null,
      _data?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      { _from: string; _to: string; _id: BigNumber; _data: string }
    >

    WithdrawalFinalized(
      l1Token?: null,
      _from?: string | null,
      _to?: string | null,
      _exitNum?: BigNumberish | null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber],
      {
        l1Token: string
        _from: string
        _to: string
        _exitNum: BigNumber
        _amount: BigNumber
      }
    >

    WithdrawalInitiated(
      l1Token?: null,
      _from?: string | null,
      _to?: string | null,
      _l2ToL1Id?: BigNumberish | null,
      _exitNum?: null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        l1Token: string
        _from: string
        _to: string
        _l2ToL1Id: BigNumber
        _exitNum: BigNumber
        _amount: BigNumber
      }
    >
  }

  estimateGas: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    counterpartGateway(overrides?: CallOverrides): Promise<BigNumber>

    exitNum(overrides?: CallOverrides): Promise<BigNumber>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    gasReserveIfCallRevert(overrides?: CallOverrides): Promise<BigNumber>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    inboundEscrowAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    initialize(
      _l1Counterpart: string,
      _router: string,
      _l1Weth: string,
      _l2Weth: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    l1Weth(overrides?: CallOverrides): Promise<BigNumber>

    l2Weth(overrides?: CallOverrides): Promise<BigNumber>

    'outboundTransfer(address,address,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    router(overrides?: CallOverrides): Promise<BigNumber>

    setL2WethAddress(
      _l2Weth: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    counterpartGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>

    exitNum(overrides?: CallOverrides): Promise<PopulatedTransaction>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    gasReserveIfCallRevert(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    inboundEscrowAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    initialize(
      _l1Counterpart: string,
      _router: string,
      _l1Weth: string,
      _l2Weth: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    l1Weth(overrides?: CallOverrides): Promise<PopulatedTransaction>

    l2Weth(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'outboundTransfer(address,address,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>

    setL2WethAddress(
      _l2Weth: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
