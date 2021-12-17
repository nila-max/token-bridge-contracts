/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  L1GatewayRouterTester,
  L1GatewayRouterTesterInterface,
} from '../L1GatewayRouterTester'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'newDefaultGateway',
        type: 'address',
      },
    ],
    name: 'DefaultGatewayUpdated',
    type: 'event',
  },
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
        name: 'gateway',
        type: 'address',
      },
    ],
    name: 'GatewaySet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_userFrom',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_userTo',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'gateway',
        type: 'address',
      },
    ],
    name: 'TransferRouted',
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
    name: 'defaultGateway',
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
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'finalizeInboundTransfer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
    ],
    name: 'getGateway',
    outputs: [
      {
        internalType: 'address',
        name: 'gateway',
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
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
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
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_defaultGateway',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_whitelist',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_counterpartGateway',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_inbox',
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
    name: 'l1TokenToGateway',
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
        name: '_token',
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
    inputs: [],
    name: 'owner',
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
    name: 'postUpgradeInit',
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
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newL1DefaultGateway',
        type: 'address',
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
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'setDefaultGateway',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_gateway',
        type: 'address',
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
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_creditBackAddress',
        type: 'address',
      },
    ],
    name: 'setGateway',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_gateway',
        type: 'address',
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
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'setGateway',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_token',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: '_gateway',
        type: 'address[]',
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
        internalType: 'uint256',
        name: '_maxSubmissionCost',
        type: 'uint256',
      },
    ],
    name: 'setGateways',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
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
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'setOwner',
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
  '0x608060405234801561001057600080fd5b50611dfb806100206000396000f3fe60806040526004361061012a5760003560e01c80638da5cb5b116100ab578063bda009fe1161006f578063bda009fe1461066e578063d2ce7d65146106a1578063dd6145691461073b578063ed08fdc614610773578063f887ea40146107a6578063fb0e722b146107bb5761012a565b80638da5cb5b146104ae57806393e59dc1146104c357806395fcea78146104d8578063a0c76a96146104ed578063a7e28d481461063b5761012a565b80632e567b36116100f25780632e567b361461025357806347466f98146102e95780635625a9521461031c578063658b53f41461035457806369ec2bed146104825761012a565b8063032958021461012f57806313af4035146101605780631459457a146101955780632d67b72d146101ea5780632db09c1c1461023e575b600080fd5b34801561013b57600080fd5b506101446107d0565b604080516001600160a01b039092168252519081900360200190f35b34801561016c57600080fd5b506101936004803603602081101561018357600080fd5b50356001600160a01b03166107df565b005b3480156101a157600080fd5b50610193600480360360a08110156101b857600080fd5b506001600160a01b03813581169160208101358216916040820135811691606081013582169160809091013516610898565b61022c600480360360a081101561020057600080fd5b506001600160a01b038135811691602081013591604082013591606081013591608090910135166108e6565b60408051918252519081900360200190f35b34801561024a57600080fd5b50610144610b2a565b610193600480360360a081101561026957600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b8111156102ab57600080fd5b8201836020820111156102bd57600080fd5b803590602001918460018302840111600160201b831117156102de57600080fd5b509092509050610b39565b3480156102f557600080fd5b506101936004803603602081101561030c57600080fd5b50356001600160a01b0316610b7d565b61022c6004803603608081101561033257600080fd5b506001600160a01b038135169060208101359060408101359060600135610c20565b61022c600480360360a081101561036a57600080fd5b810190602081018135600160201b81111561038457600080fd5b82018360208201111561039657600080fd5b803590602001918460208302840111600160201b831117156103b757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561040657600080fd5b82018360208201111561041857600080fd5b803590602001918460208302840111600160201b8311171561043957600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505082359350505060208101359060400135610dbd565b34801561048e57600080fd5b50610193600480360360208110156104a557600080fd5b50351515610e24565b3480156104ba57600080fd5b50610144610e42565b3480156104cf57600080fd5b50610144610e51565b3480156104e457600080fd5b50610193610e60565b3480156104f957600080fd5b506105c6600480360360a081101561051057600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561055257600080fd5b82018360208201111561056457600080fd5b803590602001918460018302840111600160201b8311171561058557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610ebd945050505050565b6040805160208082528351818301528351919283929083019185019080838360005b838110156106005781810151838201526020016105e8565b50505050905090810190601f16801561062d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561064757600080fd5b506101446004803603602081101561065e57600080fd5b50356001600160a01b03166110bf565b34801561067a57600080fd5b506101446004803603602081101561069157600080fd5b50356001600160a01b0316611170565b6105c6600480360360c08110156106b757600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b8111156106fd57600080fd5b82018360208201111561070f57600080fd5b803590602001918460018302840111600160201b8311171561073057600080fd5b5090925090506111d2565b61022c6004803603608081101561075157600080fd5b506001600160a01b0381351690602081013590604081013590606001356113f6565b34801561077f57600080fd5b506101446004803603602081101561079657600080fd5b50356001600160a01b031661140e565b3480156107b257600080fd5b50610144611429565b3480156107c757600080fd5b50610144611438565b6004546001600160a01b031681565b6005546001600160a01b0316331461082b576040805162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b604482015290519081900360640190fd5b6001600160a01b038116610876576040805162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa7aba722a960991b604482015290519081900360640190fd5b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6108a482600086611447565b600580546001600160a01b03199081166001600160a01b0397881617909155600080548216948716949094179093556006805490931694169390931790555050565b600061a4b160ff16336001600160a01b0316638e5f5ad16040518163ffffffff1660e01b815260040160206040518083038186803b15801561092757600080fd5b505afa15801561093b573d6000803e3d6000fd5b505050506040513d602081101561095157600080fd5b505160ff161461099a576040805162461bcd60e51b815260206004820152600f60248201526e1393d517d0549097d1539050931151608a1b604482015290519081900360640190fd5b6109ac866001600160a01b03166114be565b6109ef576040805162461bcd60e51b815260206004820152600f60248201526e1393d517d513d7d0d3d395149050d5608a1b604482015290519081900360640190fd5b336000908152600360205260409020546001600160a01b03168015610a7457866001600160a01b0316816001600160a01b031614610a74576040805162461bcd60e51b815260206004820152601b60248201527f4e4f5f5550444154455f544f5f444946464552454e545f414444520000000000604482015290519081900360640190fd5b604080516001808252818301909252606091602080830190803683370190505090503381600081518110610aa457fe5b6001600160a01b0392909216602092830291909101909101526040805160018082528183019092526060918160200160208202803683370190505090508881600081518110610aef57fe5b60200260200101906001600160a01b031690816001600160a01b031681525050610b1d82828a8a8a8a6114c4565b9998505050505050505050565b6001546001600160a01b031681565b6040805162461bcd60e51b815260206004820152601460248201527327a7262cafa7aaaa2127aaa7222fa927aaaa22a960611b604482015290519081900360640190fd5b6000546001600160a01b03163314610bcc576040805162461bcd60e51b815260206004820152600d60248201526c1393d517d19493d357d31254d5609a1b604482015290519081900360640190fd5b600080546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f37389c47920d5cc3229678a0205d0455002c07541a4139ebdce91ac2274657779181900360200190a150565b6005546000906001600160a01b03163314610c6f576040805162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b604482015290519081900360640190fd5b600480546001600160a01b0387166001600160a01b0319909116811790915560408051918252517f3a8f8eb961383a94d41d193e16a3af73eaddfd5764a4c640257323a1603ac3319181900360200190a160006001600160a01b03861615610d3957856001600160a01b0316632db09c1c6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d0a57600080fd5b505afa158015610d1e573d6000803e3d6000fd5b505050506040513d6020811015610d3457600080fd5b505190505b604080516001600160a01b038084166024808401919091528351808403909101815260449092018352602082810180516001600160e01b031663f7c9362f60e01b17905260065460015485516060810187528981529283018b90529482018990529293610db2938316921690339034906000908761190d565b979650505050505050565b6005546000906001600160a01b03163314610e0c576040805162461bcd60e51b815260206004820152600a60248201526927a7262cafa7aba722a960b11b604482015290519081900360640190fd5b610e1a8686868686336114c4565b9695505050505050565b60008054911515600160a01b0260ff60a01b19909216919091179055565b6005546001600160a01b031681565b6000546001600160a01b031681565b6000610e6a61192c565b9050336001600160a01b03821614610eba576040805162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015290519081900360640190fd5b50565b60606000610eca87611170565b9050806001600160a01b031663a0c76a9688888888886040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610f7a578181015183820152602001610f62565b50505050905090810190601f168015610fa75780820380516001836020036101000a031916815260200191505b50965050505050505060006040518083038186803b158015610fc857600080fd5b505afa158015610fdc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561100557600080fd5b8101908080516040519392919084600160201b82111561102457600080fd5b90830190602082018581111561103957600080fd5b8251600160201b81118282018810171561105257600080fd5b82525081516020918201929091019080838360005b8381101561107f578181015183820152602001611067565b50505050905090810190601f1680156110ac5780820380516001836020036101000a031916815260200191505b5060405250505091505095945050505050565b6000806110cb83611170565b90506001600160a01b0381166110e557600091505061116b565b806001600160a01b031663a7e28d48846040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b15801561113b57600080fd5b505afa15801561114f573d6000803e3d6000fd5b505050506040513d602081101561116557600080fd5b50519150505b919050565b6001600160a01b03808216600090815260036020526040902054168061119e57506004546001600160a01b03165b6001600160a01b038116600114806111c557506111c3816001600160a01b03166114be565b155b1561116b5750600061116b565b6000546060906001600160a01b0316156112a0576000546040805163babcc53960e01b815233600482015290516001600160a01b039092169163babcc53991602480820192602092909190829003018186803b15801561123157600080fd5b505afa158015611245573d6000803e3d6000fd5b505050506040513d602081101561125b57600080fd5b50516112a0576040805162461bcd60e51b815260206004820152600f60248201526e1393d517d5d2125511531254d51151608a1b604482015290519081900360640190fd5b6000838360408110156112b257600080fd5b81359190810190604081016020820135600160201b8111156112d357600080fd5b8201836020820111156112e557600080fd5b803590602001918460018302840111600160201b8311171561130657600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509697505050508989028501935050508215159050611393576040805162461bcd60e51b81526020600482015260126024820152711393d7d4d550935254d4d253d397d0d3d4d560721b604482015290519081900360640190fd5b8034146113d9576040805162461bcd60e51b815260206004820152600f60248201526e57524f4e475f4554485f56414c554560881b604482015290519081900360640190fd5b6113e88a8a8a8a8a8a8a611951565b9a9950505050505050505050565b600061140585858585336108e6565b95945050505050565b6003602052600090815260409020546001600160a01b031681565b6002546001600160a01b031681565b6006546001600160a01b031681565b6001600160a01b03821615611490576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b61149a8383611ba6565b600480546001600160a01b0319166001600160a01b03929092169190911790555050565b3b151590565b6000855187511461150b576040805162461bcd60e51b815260206004820152600c60248201526b0aea49e9c8ebe988a9c8ea8960a31b604482015290519081900360640190fd5b60005b87518110156117d85786818151811061152357fe5b6020026020010151600360008a848151811061153b57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555086818151811061159357fe5b60200260200101516001600160a01b03168882815181106115b057fe5b60200260200101516001600160a01b03167f812ca95fe4492a9e2d1f2723c2c40c03a60a27b059581ae20ac4e4d73bfba35460405160405180910390a360006001600160a01b031687828151811061160457fe5b60200260200101516001600160a01b0316146117d05760006001600160a01b031687828151811061163157fe5b60200260200101516001600160a01b031663a7e28d488a848151811061165357fe5b60200260200101516040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156116a157600080fd5b505afa1580156116b5573d6000803e3d6000fd5b505050506040513d60208110156116cb57600080fd5b50516001600160a01b03161415611729576040805162461bcd60e51b815260206004820152601c60248201527f544f4b454e5f4e4f545f48414e444c45445f42595f4741544557415900000000604482015290519081900360640190fd5b86818151811061173557fe5b60200260200101516001600160a01b0316632db09c1c6040518163ffffffff1660e01b815260040160206040518083038186803b15801561177557600080fd5b505afa158015611789573d6000803e3d6000fd5b505050506040513d602081101561179f57600080fd5b505187518890839081106117af57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250505b60010161150e565b506060634201f98560e01b8888604051602401808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561182c578181015183820152602001611814565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561186b578181015183820152602001611853565b50505050905001945050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050611901600660009054906101000a90046001600160a01b0316600160009054906101000a90046001600160a01b03168534600060405180606001604052808b81526020018d81526020018c8152508761190d565b98975050505050505050565b60006119018888888888886000015189602001518a604001518a611c72565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b6060600061195e89611170565b9050606061196d338686611c85565b604080516001600160a01b0385811682529151929350818c169233928e16917f85291dff2161a93c2f12c819d31889c96c63042116f5bc5a205aa701c2c429f5919081900360200190a4816001600160a01b031663d2ce7d65348c8c8c8c8c886040518863ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b0316815260200185815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611a5b578181015183820152602001611a43565b50505050905090810190601f168015611a885780820380516001836020036101000a031916815260200191505b509750505050505050506000604051808303818588803b158015611aab57600080fd5b505af1158015611abf573d6000803e3d6000fd5b50505050506040513d6000823e601f3d908101601f191682016040526020811015611ae957600080fd5b8101908080516040519392919084600160201b821115611b0857600080fd5b908301906020820185811115611b1d57600080fd5b8251600160201b811182820188101715611b3657600080fd5b82525081516020918201929091019080838360005b83811015611b63578181015183820152602001611b4b565b50505050905090810190601f168015611b905780820380516001836020036101000a031916815260200191505b5060405250505092505050979650505050505050565b6001600160a01b038216611bf7576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6001546001600160a01b031615611c44576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055565b60006113e88a8a8a8a8a8a8a8a8a611cef565b606083838360405160200180846001600160a01b03166001600160a01b0316815260200180602001828103825284848281815260200192508082843760008184015260408051601f19601f9093018316909401848103909201845252509998505050505050505050565b60008060608a6001600160a01b031688856040518082805190602001908083835b60208310611d2f5780518252601f199092019160209182019101611d10565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611d91576040519150601f19603f3d011682016040523d82523d6000602084013e611d96565b606091505b50915091508160008114611da957611db1565b815160208301fd5b506105399c9b50505050505050505050505056fea2646970667358221220ede1126c9910164427584f4a940ae6abb74a963bde1beceda853a5e3320aba9264736f6c634300060b0033'

export class L1GatewayRouterTester__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L1GatewayRouterTester> {
    return super.deploy(overrides || {}) as Promise<L1GatewayRouterTester>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L1GatewayRouterTester {
    return super.attach(address) as L1GatewayRouterTester
  }
  connect(signer: Signer): L1GatewayRouterTester__factory {
    return super.connect(signer) as L1GatewayRouterTester__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L1GatewayRouterTesterInterface {
    return new utils.Interface(_abi) as L1GatewayRouterTesterInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1GatewayRouterTester {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as L1GatewayRouterTester
  }
}
