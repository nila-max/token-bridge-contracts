/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  L2CustomGatewayTester,
  L2CustomGatewayTesterInterface,
} from '../L2CustomGatewayTester'

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
        indexed: true,
        internalType: 'address',
        name: 'l1Address',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'l2Address',
        type: 'address',
      },
    ],
    name: 'TokenSet',
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
        name: '_id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: '_data',
        type: 'bytes',
      },
    ],
    name: 'TxToL1',
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
    inputs: [],
    name: 'exitNum',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
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
    inputs: [
      {
        internalType: 'address',
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'l1ToL2Token',
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
        name: 'res',
        type: 'bytes',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'l1Address',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: 'l2Address',
        type: 'address[]',
      },
    ],
    name: 'registerTokenFromL1',
    outputs: [],
    stateMutability: 'nonpayable',
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
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506117f9806100206000396000f3fe6080604052600436106100b15760003560e01c80637b3a3c8b1161006f5780637b3a3c8b146103425780638a2dc014146103d0578063a0c76a9614610403578063a7e28d48146104dc578063d2ce7d651461050f578063d4f5532f146105a9578063f887ea4014610674576100b1565b8062aa3a9b146100b6578063015234ab1461018f5780630f09eb51146101b65780632db09c1c146101cb5780632e567b36146101fc578063485cc95514610307575b600080fd5b3480156100c257600080fd5b5061018d600480360360a08110156100d957600080fd5b6001600160a01b0382358116926020810135926040820135831692606083013516919081019060a081016080820135600160201b81111561011957600080fd5b82018360208201111561012b57600080fd5b803590602001918460018302840111600160201b8311171561014c57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610689945050505050565b005b34801561019b57600080fd5b506101a4610883565b60408051918252519081900360200190f35b3480156101c257600080fd5b506101a4610889565b3480156101d757600080fd5b506101e061088f565b604080516001600160a01b039092168252519081900360200190f35b610292600480360360a081101561021257600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561025457600080fd5b82018360208201111561026657600080fd5b803590602001918460018302840111600160201b8311171561028757600080fd5b50909250905061089e565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102cc5781810151838201526020016102b4565b50505050905090810190601f1680156102f95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561031357600080fd5b5061018d6004803603604081101561032a57600080fd5b506001600160a01b0381358116916020013516610d47565b6102926004803603608081101561035857600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561039257600080fd5b8201836020820111156103a457600080fd5b803590602001918460018302840111600160201b831117156103c557600080fd5b509092509050610d55565b3480156103dc57600080fd5b506101e0600480360360208110156103f357600080fd5b50356001600160a01b0316610d67565b34801561040f57600080fd5b50610292600480360360a081101561042657600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561046857600080fd5b82018360208201111561047a57600080fd5b803590602001918460018302840111600160201b8311171561049b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d82945050505050565b3480156104e857600080fd5b506101e0600480360360208110156104ff57600080fd5b50356001600160a01b0316610e7a565b610292600480360360c081101561052557600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561056b57600080fd5b82018360208201111561057d57600080fd5b803590602001918460018302840111600160201b8311171561059e57600080fd5b509092509050610e98565b3480156105b557600080fd5b5061018d600480360360408110156105cc57600080fd5b810190602081018135600160201b8111156105e657600080fd5b8201836020820111156105f857600080fd5b803590602001918460208302840111600160201b8311171561061957600080fd5b919390929091602081019035600160201b81111561063657600080fd5b82018360208201111561064857600080fd5b803590602001918460208302840111600160201b8311171561066957600080fd5b509092509050611065565b34801561068057600080fd5b506101e06111cf565b3330146106dd576040805162461bcd60e51b815260206004820152601f60248201527f4d696e742063616e206f6e6c792062652063616c6c65642062792073656c6600604482015290519081900360640190fd5b6106ef826001600160a01b03166111de565b610740576040805162461bcd60e51b815260206004820152601e60248201527f44657374696e6174696f6e206d757374206265206120636f6e74726163740000604482015290519081900360640190fd5b61074b8583866111e4565b6000610755610889565b5a039050805a116107975760405162461bcd60e51b815260040180806020018281038252602b815260200180611799602b913960400191505060405180910390fd5b826001600160a01b031663a4c0ed36828688866040518563ffffffff1660e01b815260040180846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156108145781810151838201526020016107fc565b50505050905090810190601f1680156108415780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600088803b15801561086257600080fd5b5087f1158015610876573d6000803e3d6000fd5b5050505050505050505050565b60025481565b61c35090565b6000546001600160a01b031681565b6000546060906001600160a01b031633146108fb576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b6060806109088585611261565b9150915060006109178a610e7a565b905061092b816001600160a01b03166111de565b61096457600061093f8b838c8c8c8961138b565b905080156109625760405180602001604052806000815250945050505050610d3d565b505b60408051600481526024810182526020810180516001600160e01b031663c2eeeebd60e01b178152915181516000936060936001600160a01b038716939092909182918083835b602083106109ca5780518252601f1990920191602091820191016109ab565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d8060008114610a2a576040519150601f19603f3d011682016040523d82523d6000602084013e610a2f565b606091505b50915091506000821580610a44575060208251105b15610a5157506001610a80565b6000610a5e83600c6113c1565b90508d6001600160a01b0316816001600160a01b031614610a7e57600191505b505b8015610acd57610aa28d308e8d60405180602001604052806000815250610d82565b9550610aaf308b88611421565b50604051806020016040528060008152509650505050505050610d3d565b50508251159050610cc7576000306001600160a01b031662aa3a9b838a8d8d886040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001846001600160a01b03166001600160a01b03168152602001836001600160a01b03166001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610b87578181015183820152602001610b6f565b50505050905090810190601f168015610bb45780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b158015610bd757600080fd5b505af1925050508015610be8575060015b610bfc57610bf7828b8a6111e4565b610c00565b5060015b886001600160a01b03168a6001600160a01b03167f11ff8525c5d96036231ee652c108808dee4c40728a6117830a75029298bb7de6838b87604051808415151515815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610c85578181015183820152602001610c6d565b50505050905090810190601f168015610cb25780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a350610cd2565b610cd28189896111e4565b876001600160a01b0316896001600160a01b03168b6001600160a01b03167fc7f2e9c55c40a50fbc217dfc70cd39a222940dfa62145aa0ca49eb9535d4fcb28a6040518082815260200191505060405180910390a46040518060200160405280600081525093505050505b9695505050505050565b610d51828261144d565b5050565b6060610d3d8686866000808888610e98565b6003602052600090815260409020546001600160a01b031681565b6060632e567b3660e01b86868686610d9c6002548861149f565b6040516001600160a01b0380871660248301908152868216604484015290851660648301526084820184905260a060a48301908152835160c484015283519192909160e490910190602085019080838360005b83811015610e07578181015183820152602001610def565b50505050905090810190601f168015610e345780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a16999099179098525095965050505050505095945050505050565b6001600160a01b039081166000908152600360205260409020541690565b60603415610ed8576040805162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b604482015290519081900360640190fd5b60006060610ee533611532565b15610efe57610ef48585611546565b9092509050610f3b565b33915084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b60025460009081610f4b8d610e7a565b9050610f5f816001600160a01b03166111de565b610fa5576040805162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b604482015290519081900360640190fd5b610fb081868d611584565b610fbd8d868e8e88610d82565b9550610fca858c88611421565b925050818b6001600160a01b0316856001600160a01b03167f3073a74ecb728d10be779fe19a74a1428e20468f5b4d167bf9c73d9067847d738f858f60405180846001600160a01b03166001600160a01b03168152602001838152602001828152602001935050505060405180910390a4506040805160208082019390935281518082039093018352810190529a9950505050505050505050565b6000546001600160a01b031633146110bf576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b60005b838110156111c8578282828181106110d657fe5b905060200201356001600160a01b0316600360008787858181106110f657fe5b905060200201356001600160a01b03166001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555082828281811061115657fe5b905060200201356001600160a01b03166001600160a01b031685858381811061117b57fe5b905060200201356001600160a01b03166001600160a01b03167f0dd664a155dd89526bb019e22b00291bb7ca9d07ba3ec4a1a76b410da9797ceb60405160405180910390a36001016110c2565b5050505050565b6001546001600160a01b031681565b3b151590565b826001600160a01b0316638c2a993e83836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561124457600080fd5b505af1158015611258573d6000803e3d6000fd5b50505050505050565b6060808383604081101561127457600080fd5b810190602081018135600160201b81111561128e57600080fd5b8201836020820111156112a057600080fd5b803590602001918460018302840111600160201b831117156112c157600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561131357600080fd5b82018360208201111561132557600080fd5b803590602001918460018302840111600160201b8311171561134657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b60006113b330846113ae8a308a8960405180602001604052806000815250610d82565b611421565b506001979650505050505050565b60008160140183511015611411576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b500160200151600160601b900490565b6002805460010190556000805461144590829086906001600160a01b0316856115e4565b949350505050565b61145782826115fb565b6001600160a01b038116610d51576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b606082826040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156114e95781810151838201526020016114d1565b50505050905090810190601f1680156115165780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152919052979650505050505050565b6001546001600160a01b0390811691161490565b600060608383604081101561155a57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561131357600080fd5b826001600160a01b03166374f4f54783836040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561124457600080fd5b60006115f2858585856116c7565b95945050505050565b6001600160a01b03821661164c576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b031615611699576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b6000806060846001600160a01b031687856040518082805190602001908083835b602083106117075780518252601f1990920191602091820191016116e8565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611769576040519150601f19603f3d011682016040523d82523d6000602084013e61176e565b606091505b5091509150816000811461178157611789565b815160208301fd5b5061053997965050505050505056fe4d696e7420616e642063616c6c20676173206c6566742063616c63756c6174696f6e20756e6465666c6f77a26469706673582212207cc796fdd63f4d6699605c531c4b81aff2c2d0023b5ddc98dd531be986fb1ea064736f6c634300060b0033'

export class L2CustomGatewayTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L2CustomGatewayTester> {
    return super.deploy(overrides || {}) as Promise<L2CustomGatewayTester>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2CustomGatewayTester {
    return super.attach(address) as L2CustomGatewayTester
  }
  connect(signer: Signer): L2CustomGatewayTester__factory {
    return super.connect(signer) as L2CustomGatewayTester__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L2CustomGatewayTesterInterface {
    return new utils.Interface(_abi) as L2CustomGatewayTesterInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2CustomGatewayTester {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as L2CustomGatewayTester
  }
}
