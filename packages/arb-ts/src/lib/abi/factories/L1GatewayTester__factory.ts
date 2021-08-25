/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  L1GatewayTester,
  L1GatewayTesterInterface,
} from '../L1GatewayTester'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'DepositFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_sequenceNumber',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'DepositInitiated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'callHookData',
        type: 'bytes',
      },
    ],
    name: 'TransferAndCallTriggered',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_seqNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL2',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newSource',
        type: 'address',
      },
    ],
    name: 'WhitelistSourceUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'newData',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'madeExternalCall',
        type: 'bool',
      },
    ],
    name: 'WithdrawRedirected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawalFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'l1Token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: '_l2ToL1Id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawalInitiated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'l1ERC20',
        type: 'address',
      },
    ],
    name: 'calculateL2TokenAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'cloneableProxyHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'counterpartGateway',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
    ],
    name: 'encodeWithdrawal',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'gasReserveIfCallRevert',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_initialData',
        type: 'bytes',
      },
    ],
    name: 'getExternalCall',
    outputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'getOutboundCalldata',
    outputs: [
      {
        internalType: 'bytes',
        name: 'outboundCalldata',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Address',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'inboundEscrowAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inbox',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l2Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_inbox',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '_cloneableProxyHash',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: '_l2BeaconProxyFactory',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'l2BeaconProxyFactory',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_l1Token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_gasPriceBid',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'outboundTransfer',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'redirectedExits',
    outputs: [
      {
        internalType: 'bool',
        name: 'isExit',
        type: 'bool',
      },
      {
        internalType: 'address',
        name: '_newTo',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'router',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: '_shouldUseInbox',
        type: 'bool',
      },
    ],
    name: 'setInboxUse',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_exitNum',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_initialDestination',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_newDestination',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '_newData',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'transferExitAndCall',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newSource',
        type: 'address',
      },
    ],
    name: 'updateWhitelistSource',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'whitelist',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b5061292a806100206000396000f3fe6080604052600436106101035760003560e01c806397881f8d116100a0578063bd5f3e7d11610064578063bd5f3e7d14610640578063d2ce7d651461072b578063f68a9082146107c5578063f887ea401461091c578063fb0e722b1461093157610103565b806397881f8d14610406578063a01893bf1461041b578063a0c76a961461046e578063a7e28d4814610547578063bcf2e6eb1461057a57610103565b8062aa3a9b14610108578063020a6058146101e15780630f09eb511461022c5780632db09c1c146102415780632e567b361461027257806347466f981461037d57806369ec2bed146103b057806370fc045f146103dc57806393e59dc1146103f1575b600080fd5b34801561011457600080fd5b506101df600480360360a081101561012b57600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b81111561016b57600080fd5b82018360208201111561017d57600080fd5b803590602001918460018302840111600160201b8311171561019e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610946945050505050565b005b3480156101ed57600080fd5b5061021a6004803603604081101561020457600080fd5b50803590602001356001600160a01b0316610b40565b60408051918252519081900360200190f35b34801561023857600080fd5b5061021a610b75565b34801561024d57600080fd5b50610256610b7c565b604080516001600160a01b039092168252519081900360200190f35b610308600480360360a081101561028857600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156102ca57600080fd5b8201836020820111156102dc57600080fd5b803590602001918460018302840111600160201b831117156102fd57600080fd5b509092509050610b90565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561034257818101518382015260200161032a565b50505050905090810190601f16801561036f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561038957600080fd5b506101df600480360360208110156103a057600080fd5b50356001600160a01b0316610f13565b3480156103bc57600080fd5b506101df600480360360208110156103d357600080fd5b50351515610fb6565b3480156103e857600080fd5b50610256610fc9565b3480156103fd57600080fd5b50610256610fd8565b34801561041257600080fd5b5061021a610fe7565b34801561042757600080fd5b506101df600480360360a081101561043e57600080fd5b506001600160a01b0381358116916020810135821691604082013581169160608101359160809091013516610fed565b34801561047a57600080fd5b50610308600480360360a081101561049157600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156104d357600080fd5b8201836020820111156104e557600080fd5b803590602001918460018302840111600160201b8311171561050657600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506110bc945050505050565b34801561055357600080fd5b506102566004803603602081101561056a57600080fd5b50356001600160a01b0316611336565b34801561058657600080fd5b506105a46004803603602081101561059d57600080fd5b5035611369565b6040518084151515158152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156106035781810151838201526020016105eb565b50505050905090810190601f1680156106305780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b34801561064c57600080fd5b506101df600480360360a081101561066357600080fd5b8135916001600160a01b03602082013581169260408301359091169190810190608081016060820135600160201b81111561069d57600080fd5b8201836020820111156106af57600080fd5b803590602001918460018302840111600160201b831117156106d057600080fd5b919390929091602081019035600160201b8111156106ed57600080fd5b8201836020820111156106ff57600080fd5b803590602001918460018302840111600160201b8311171561072057600080fd5b509092509050611420565b610308600480360360c081101561074157600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561078757600080fd5b82018360208201111561079957600080fd5b803590602001918460018302840111600160201b831117156107ba57600080fd5b5090925090506116f9565b3480156107d157600080fd5b5061088b600480360360608110156107e857600080fd5b8135916001600160a01b0360208201351691810190606081016040820135600160201b81111561081757600080fd5b82018360208201111561082957600080fd5b803590602001918460018302840111600160201b8311171561084a57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506117e2945050505050565b60405180836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156108e05781810151838201526020016108c8565b50505050905090810190601f16801561090d5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561092857600080fd5b506102566118cd565b34801561093d57600080fd5b506102566118dc565b33301461099a576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b6109ac826001600160a01b03166118eb565b6109fd576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b610a088583866118f1565b6000610a12610b75565b5a039050805a11610a545760405162461bcd60e51b815260040180806020018281038252602b8152602001806128a0602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610ad1578181015183820152602001610ab9565b50505050905090810190601f168015610afe5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b158015610b1f57600080fd5b5087f1158015610b33573d6000803e3d6000fd5b5050505050505050505050565b604080516020808201949094526001600160a01b03929092168282015280518083038201815260609092019052805191012090565b6175305b90565b60005461010090046001600160a01b031681565b6002546060906001600160a01b03166000610baa82611910565b9050336001600160a01b03821614610bfb576040805162461bcd60e51b815260206004820152600f60248201526e4e4f545f46524f4d5f42524944474560881b604482015290519081900360640190fd5b6000610c068361192a565b6000549091506001600160a01b038083166101009092041614610c6b576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60006060610c798888611946565b91509150610c88828b836117e2565b8051919b50915015610e83576000306001600160a01b031662aa3a9b8e8c8f8f876040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610d43578181015183820152602001610d2b565b50505050905090810190601f168015610d705780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b158015610d9357600080fd5b505af1925050508015610da4575060015b610db857610db38d8d8c6118f1565b610dbc565b5060015b8a6001600160a01b03168c6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838d86604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610e41578181015183820152602001610e29565b50505050905090810190601f168015610e6e5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a350610e8e565b610e8e8c8b8b6118f1565b818a6001600160a01b03168c6001600160a01b03167f891afe029c75c4f8c5855fc3480598bc5a53739344f6ae575bdb7ea2a79f56b38f8d60405180836001600160a01b03166001600160a01b031681526020018281526020019250505060405180910390a450506040805160208101909152600081529a9950505050505050505050565b6006546001600160a01b03163314610f62576040805162461bcd60e51b815260206004820152600d60248201526c1393d517d19493d357d31254d5609a1b604482015290519081900360640190fd5b600680546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f37389c47920d5cc3229678a0205d0455002c07541a4139ebdce91ac2274657779181900360200190a150565b6000805460ff1916911515919091179055565b6005546001600160a01b031681565b6006546001600160a01b031681565b60045481565b610ff88585856119f3565b8161103e576040805162461bcd60e51b81526020600482015260116024820152700929cac82989288bea0a49eb0b29082a69607b1b604482015290519081900360640190fd5b6001600160a01b03811661108a576040805162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa122a0a1a7a760911b604482015290519081900360640190fd5b600491909155600580546001600160a01b039092166001600160a01b0319928316179055600680549091169055505050565b6060806110d0876306fdde0360e01b6119fe565b6110e1886395d89b4160e01b6119fe565b6110f28963313ce56760e01b6119fe565b60405160200180806020018060200180602001848103845287818151815260200191508051906020019080838360005b8381101561113a578181015183820152602001611122565b50505050905090810190601f1680156111675780820380516001836020036101000a031916815260200191505b50848103835286518152865160209182019188019080838360005b8381101561119a578181015183820152602001611182565b50505050905090810190601f1680156111c75780820380516001836020036101000a031916815260200191505b50848103825285518152855160209182019187019080838360005b838110156111fa5781810151838201526020016111e2565b50505050905090810190601f1680156112275780820380516001836020036101000a031916815260200191505b5096505050505050506040516020818303038152906040529050632e567b3660e01b878787876112578689611ada565b6040516001600160a01b0380871660248301908152868216604484015290851660648301526084820184905260a060a48301908152835160c484015283519192909160e490910190602085019080838360005b838110156112c25781810151838201526020016112aa565b50505050905090810190601f1680156112ef5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a1699909917909852509597505050505050505095945050505050565b60008061134283611bcc565b600454600554919250611360918391906001600160a01b0316611c29565b9150505b919050565b600360209081526000918252604091829020805460018083018054865160026101009483161585026000190190921691909104601f810187900487028201870190975286815260ff841696929093046001600160a01b0316949091908301828280156114165780601f106113eb57610100808354040283529160200191611416565b820191906000526020600020905b8154815290600101906020018083116113f957829003601f168201915b5050505050905083565b600061143c8888604051806020016040528060008152506117e2565b509050336001600160a01b03821614611492576040805162461bcd60e51b81526020600482015260136024820152722727aa2fa2ac2822a1aa22a22fa9a2a72222a960691b604482015290519081900360640190fd5b6114d488888888888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611c8692505050565b811561163c576114ec866001600160a01b03166118eb565b61152f576040805162461bcd60e51b815260206004820152600f60248201526e1513d7d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b6000866001600160a01b031663592e2070838b87876040518563ffffffff1660e01b815260040180856001600160a01b03166001600160a01b03168152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f82011690508083019250505095505050505050602060405180830381600087803b1580156115c557600080fd5b505af11580156115d9573d6000803e3d6000fd5b505050506040513d60208110156115ef57600080fd5b505190508061163a576040805162461bcd60e51b81526020600482015260126024820152711514905394d1915497d213d3d2d7d190525360721b604482015290519081900360640190fd5b505b87866001600160a01b0316826001600160a01b03167f56735ccb9dc7d2222ce4177fc3aea44c33882e2a2c73e0fb1c6b93c9c13a04d48888888860008b8b905011604051808060200180602001841515151581526020018381038352888882818152602001925080828437600083820152601f01601f191690910184810383528681526020019050868680828437600083820152604051601f909101601f1916909201829003995090975050505050505050a45050505050505050565b6006546060906001600160a01b0316156117c7576006546040805163babcc53960e01b815233600482015290516001600160a01b039092169163babcc53991602480820192602092909190829003018186803b15801561175857600080fd5b505afa15801561176c573d6000803e3d6000fd5b505050506040513d602081101561178257600080fd5b50516117c7576040805162461bcd60e51b815260206004820152600f60248201526e1393d517d5d2125511531254d51151608a1b604482015290519081900360640190fd5b6117d688888888888888611d17565b98975050505050505050565b6000606060006117f28686610b40565b600081815260036020526040902080549192509060ff16156118bc5780546001808301805460408051602060026101009685161587026000190190941693909304601f8101849004840282018401909252818152939094046001600160a01b03169391929183918301828280156118aa5780601f1061187f576101008083540402835291602001916118aa565b820191906000526020600020905b81548152906001019060200180831161188d57829003601f168201915b505050505090509350935050506118c5565b85859350935050505b935093915050565b6001546001600160a01b031681565b6002546001600160a01b031681565b3b151590565b61190b6001600160a01b038416838363ffffffff611fba16565b505050565b6000805460ff1615611923575080611364565b5033611364565b6000805460ff16156119235761193f8261200c565b9050611364565b600060608383604081101561195a57600080fd5b81359190810190604081016020820135600160201b81111561197b57600080fd5b82018360208201111561198d57600080fd5b803590602001918460018302840111600160201b831117156119ae57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b61190b838383612137565b60408051600481526024810182526020810180516001600160e01b03166001600160e01b031985161781529151815160609360009385936001600160a01b03891693919290918291908083835b60208310611a6a5780518252601f199092019160209182019101611a4b565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114611aca576040519150601f19603f3d011682016040523d82523d6000602084013e611acf565b606091505b509695505050505050565b60608282604051602001808060200180602001838103835285818151815260200191508051906020019080838360005b83811015611b22578181015183820152602001611b0a565b50505050905090810190601f168015611b4f5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611b82578181015183820152602001611b6a565b50505050905090810190601f168015611baf5780820380516001836020036101000a031916815260200191505b5060408051601f1981840301815291905298975050505050505050565b600054604080516001600160a01b03938416602080830191909152825180830382018152828401845280519082012061010090940490941660608201526080808201939093528151808203909301835260a0019052805191012090565b604080516001600160f81b03196020808301919091526bffffffffffffffffffffffff19606085901b16602183015260358201869052605580830186905283518084039091018152607590920190925280519101205b9392505050565b6000611c928585610b40565b6040805160608101825260018082526001600160a01b0387811660208085019182528486018981526000888152600383529690962085518154935160ff1990941690151517610100600160a81b0319166101009390941692909202929092178155935180519596509294611d0d9392850192909101906127e1565b5050505050505050565b606060008060606000611d29336121f4565b15611d4257611d388787612208565b9094509150611d7f565b33935086868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509294505050505b818060200190516040811015611d9457600080fd5b815160208301805160405192949293830192919084600160201b821115611dba57600080fd5b908301906020820185811115611dcf57600080fd5b8251600160201b811182820188101715611de857600080fd5b82525081516020918201929091019080838360005b83811015611e15578181015183820152602001611dfd565b50505050905090810190601f168015611e425780820380516001836020036101000a031916815260200191505b5060405250919450919250611e629150506001600160a01b038d166118eb565b611ea5576040805162461bcd60e51b815260206004820152600f60248201526e130c57d393d517d0d3d395149050d5608a1b604482015290519081900360640190fd5b6000611eb08d611336565b90506001600160a01b038116611eff576040805162461bcd60e51b815260206004820152600f60248201526e1393d7d30c97d513d2d15397d4d155608a1b604482015290519081900360640190fd5b611f0a8d868d612246565b611f178d868e8e876110bc565b9550611f27858c8c8c868b612261565b93505050818a6001600160a01b0316846001600160a01b03167fb8910b9960c443aac3240b98585384e3a6f109fbf6969e264c3f183d69aba7e18e8d60405180836001600160a01b03166001600160a01b031681526020018281526020019250505060405180910390a4506040805160208082019390935281518082039093018352810190529998505050505050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261190b9084906122c2565b60008061201883612373565b6001600160a01b031663ab5d89436040518163ffffffff1660e01b815260040160206040518083038186803b15801561205057600080fd5b505afa158015612064573d6000803e3d6000fd5b505050506040513d602081101561207a57600080fd5b505160408051634032458160e11b815290519192506000916001600160a01b038416916380648b02916004808301926020929190829003018186803b1580156120c257600080fd5b505afa1580156120d6573d6000803e3d6000fd5b505050506040513d60208110156120ec57600080fd5b505190506001600160a01b038116611360576040805162461bcd60e51b81526020600482015260096024820152682727afa9a2a72222a960b91b604482015290519081900360640190fd5b6121418383612384565b6001600160a01b038216612189576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b6001600160a01b0381166121d0576040805162461bcd60e51b81526020600482015260096024820152680848288be929c849eb60bb1b604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b03929092169190911790555050565b6001546001600160a01b0390811691161490565b600060608383604081101561221c57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561197b57600080fd5b61190b6001600160a01b03841683308463ffffffff61245f16565b60006122b7600260009054906101000a90046001600160a01b0316600060019054906101000a90046001600160a01b03168934600060405180606001604052808a81526020018c81526020018b815250886124bf565b979650505050505050565b6060612317826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166124de9092919063ffffffff16565b80519091501561190b5780806020019051602081101561233657600080fd5b505161190b5760405162461bcd60e51b815260040180806020018281038252602a8152602001806128cb602a913960400191505060405180910390fd5b600061237e82611910565b92915050565b6001600160a01b0382166123d5576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b60005461010090046001600160a01b031615612427576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b60008054610100600160a81b0319166101006001600160a01b0394851602179055600180546001600160a01b03191691909216179055565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526124b99085906122c2565b50505050565b60006117d68888888888886000015189602001518a604001518a6124f5565b60606124ed8484600085612516565b949350505050565b60006125088a8a8a8a8a8a8a8a8a612667565b9a9950505050505050505050565b6060824710156125575760405162461bcd60e51b815260040180806020018281038252602681526020018061287a6026913960400191505060405180910390fd5b612560856118eb565b6125b1576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106125f05780518252601f1990920191602091820191016125d1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612652576040519150601f19603f3d011682016040523d82523d6000602084013e612657565b606091505b50915091506122b782828661273d565b60008060608a6001600160a01b031688856040518082805190602001908083835b602083106126a75780518252601f199092019160209182019101612688565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612709576040519150601f19603f3d011682016040523d82523d6000602084013e61270e565b606091505b5091509150816000811461272157612729565b815160208301fd5b506105399c9b505050505050505050505050565b6060831561274c575081611c7f565b82511561275c5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156127a657818101518382015260200161278e565b50505050905090810190601f1680156127d35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061282257805160ff191683800117855561284f565b8280016001018555821561284f579182015b8281111561284f578251825591602001919060010190612834565b5061285b92915061285f565b5090565b610b7991905b8082111561285b576000815560010161286556fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212206640e8d3dd69d799b8c7af1465fad126cd089a8bb7560214e6f71a9629b0a49764736f6c634300060b0033'

export class L1GatewayTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L1GatewayTester> {
    return super.deploy(overrides || {}) as Promise<L1GatewayTester>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1GatewayTester {
    return super.attach(address) as L1GatewayTester
  }
  connect(signer: Signer): L1GatewayTester__factory {
    return super.connect(signer) as L1GatewayTester__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L1GatewayTesterInterface {
    return new utils.Interface(_abi) as L1GatewayTesterInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1GatewayTester {
    return new Contract(address, _abi, signerOrProvider) as L1GatewayTester
  }
}
