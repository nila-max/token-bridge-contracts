/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { L2WethGateway, L2WethGatewayInterface } from '../L2WethGateway'

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
        name: '_l1Counterpart',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_router',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l1Weth',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_l2Weth',
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
    name: 'l1Weth',
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
    name: 'l2Weth',
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
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
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
    stateMutability: 'payable',
    type: 'receive',
  },
]

const _bytecode =
  '0x608060405234801561001057600080fd5b506116ef806100206000396000f3fe6080604052600436106100ab5760003560e01c806395fcea781161006457806395fcea78146102d4578063a0c76a96146102e9578063a7e28d48146103c2578063d2ce7d65146103f5578063f887ea401461048f578063f8c8765e146104a4576100b2565b8063015234ab146100b7578063146bf4b1146100de578063247b27681461010f5780632db09c1c146101245780632e567b36146101395780637b3a3c8b146101d1576100b2565b366100b257005b600080fd5b3480156100c357600080fd5b506100cc6104ef565b60408051918252519081900360200190f35b3480156100ea57600080fd5b506100f36104f5565b604080516001600160a01b039092168252519081900360200190f35b34801561011b57600080fd5b506100f3610504565b34801561013057600080fd5b506100f3610513565b6101cf600480360360a081101561014f57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561019157600080fd5b8201836020820111156101a357600080fd5b803590602001918460018302840111600160201b831117156101c457600080fd5b509092509050610522565b005b61025f600480360360808110156101e757600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561022157600080fd5b82018360208201111561023357600080fd5b803590602001918460018302840111600160201b8311171561025457600080fd5b5090925090506107cc565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610299578181015183820152602001610281565b50505050905090810190601f1680156102c65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102e057600080fd5b506101cf6107e8565b3480156102f557600080fd5b5061025f600480360360a081101561030c57600080fd5b6001600160a01b03823581169260208101358216926040820135909216916060820135919081019060a081016080820135600160201b81111561034e57600080fd5b82018360208201111561036057600080fd5b803590602001918460018302840111600160201b8311171561038157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610845945050505050565b3480156103ce57600080fd5b506100f3600480360360208110156103e557600080fd5b50356001600160a01b031661093d565b61025f600480360360c081101561040b57600080fd5b6001600160a01b0382358116926020810135909116916040820135916060810135916080820135919081019060c0810160a0820135600160201b81111561045157600080fd5b82018360208201111561046357600080fd5b803590602001918460018302840111600160201b8311171561048457600080fd5b509092509050610970565b34801561049b57600080fd5b506100f3610bca565b3480156104b057600080fd5b506101cf600480360360808110156104c757600080fd5b506001600160a01b038135811691602081013582169160408201358116916060013516610bd9565b60025481565b6003546001600160a01b031681565b6004546001600160a01b031681565b6000546001600160a01b031681565b6000546001600160a01b031633148061055657506000546001600160a01b031661054b33610cab565b6001600160a01b0316145b6105a2576040805162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015290519081900360640190fd5b6060806105af8484610cba565b9150915080516000146105cd57506040805160208101909152600081525b60006105d88961093d565b90506105ec816001600160a01b0316610de4565b6106135760006106008a838b8b8b89610dea565b9050801561061157505050506107c4565b505b60408051600481526024810182526020810180516001600160e01b031663c2eeeebd60e01b178152915181516000936060936001600160a01b038716939092909182918083835b602083106106795780518252601f19909201916020918201910161065a565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855afa9150503d80600081146106d9576040519150601f19603f3d011682016040523d82523d6000602084013e6106de565b606091505b509150915060008215806106f3575060208251105b156107005750600161072f565b600061070d83600c610e16565b90508c6001600160a01b0316816001600160a01b03161461072d57600191505b505b801561075d576107518c308d8c60405180602001604052806000815250610e76565b505050505050506107c4565b50505061076b818888610ef6565b866001600160a01b0316886001600160a01b03168a6001600160a01b03167fc7f2e9c55c40a50fbc217dfc70cd39a222940dfa62145aa0ca49eb9535d4fcb2896040518082815260200191505060405180910390a45050505b505050505050565b60606107de8686866000808888610970565b9695505050505050565b60006107f2610f65565b9050336001600160a01b03821614610842576040805162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015290519081900360640190fd5b50565b6060632e567b3660e01b8686868661085f60025488610f8a565b6040516001600160a01b0380871660248301908152868216604484015290851660648301526084820184905260a060a48301908152835160c484015283519192909160e490910190602085019080838360005b838110156108ca5781810151838201526020016108b2565b50505050905090810190601f1680156108f75780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909a16999099179098525095965050505050505095945050505050565b6003546000906001600160a01b0383811691161461095d5750600061096b565b506004546001600160a01b03165b919050565b606034156109b0576040805162461bcd60e51b81526020600482015260086024820152674e4f5f56414c554560c01b604482015290519081900360640190fd5b600060606109bd3361101d565b156109d6576109cc8585611031565b9092509050610a13565b33915084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b805115610a5d576040805162461bcd60e51b8152602060048201526013602482015272115615149057d110551057d11254d050931151606a1b604482015290519081900360640190fd5b600080610a698c61093d565b9050610a7d816001600160a01b0316610de4565b610ac3576040805162461bcd60e51b81526020600482015260126024820152711513d2d15397d393d517d111541313d6515160721b604482015290519081900360640190fd5b8b6001600160a01b0316816001600160a01b031663c2eeeebd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b0657600080fd5b505afa158015610b1a573d6000803e3d6000fd5b505050506040513d6020811015610b3057600080fd5b50516001600160a01b031614610b85576040805162461bcd60e51b81526020600482015260156024820152742727aa2fa2ac2822a1aa22a22fa618afaa27a5a2a760591b604482015290519081900360640190fd5b610b9081858c61106f565b9950610b9f8c858d8d87610e76565b6040805160208082019390935281518082039093018352810190529c9b505050505050505050505050565b6001546001600160a01b031681565b610be384846110e4565b6001600160a01b038216610c2f576040805162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9862ae8aa8960931b604482015290519081900360640190fd5b6001600160a01b038116610c7b576040805162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9864ae8aa8960931b604482015290519081900360640190fd5b600380546001600160a01b039384166001600160a01b031991821617909155600480549290931691161790555050565b61111061111160901b01190190565b60608083836040811015610ccd57600080fd5b810190602081018135600160201b811115610ce757600080fd5b820183602082011115610cf957600080fd5b803590602001918460018302840111600160201b83111715610d1a57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b811115610d6c57600080fd5b820183602082011115610d7e57600080fd5b803590602001918460018302840111600160201b83111715610d9f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250969b929a509198505050505050505050565b3b151590565b6000610e088730878660405180602001604052806000815250610e76565b506001979650505050505050565b60008160140183511015610e66576040805162461bcd60e51b815260206004820152601260248201527152656164206f7574206f6620626f756e647360701b604482015290519081900360640190fd5b500160200151600160601b900490565b60025460009081610e948786610e8f8b838b848b610845565b61113a565b604080516001600160a01b038b811682526020820186905281830189905291519293508392828a16928b16917f3073a74ecb728d10be779fe19a74a1428e20468f5b4d167bf9c73d9067847d73919081900360600190a4979650505050505050565b826001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015610f3157600080fd5b505af1158015610f45573d6000803e3d6000fd5b50610f60935050506001600160a01b0385169050838361115d565b505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b606082826040516020018083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610fd4578181015183820152602001610fbc565b50505050905090810190601f1680156110015780820380516001836020036101000a031916815260200191505b5060408051601f19818403018152919052979650505050505050565b6001546001600160a01b0390811691161490565b600060608383604081101561104557600080fd5b6001600160a01b038235169190810190604081016020820135600160201b811115610d6c57600080fd5b604080516374f4f54760e01b81526001600160a01b0384811660048301526024820184905291516000928616916374f4f547916044808301928692919082900301818387803b1580156110c157600080fd5b505af11580156110d5573d6000803e3d6000fd5b505050508190505b9392505050565b6110ee82826111af565b6001600160a01b038116611136576040805162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015290519081900360640190fd5b5050565b6000805461115590849086906001600160a01b03168561127b565b949350505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610f60908490611414565b6001600160a01b038216611200576040805162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015290519081900360640190fd5b6000546001600160a01b03161561124d576040805162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015290519081900360640190fd5b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b604080516349460b4d60e11b81526001600160a01b0384166004820190815260248201928352835160448301528351600093849360649363928c169a938b938a938a93929088019060208501908083838d5b838110156112e55781810151838201526020016112cd565b50505050905090810190601f1680156113125780820380516001836020036101000a031916815260200191505b5093505050506020604051808303818588803b15801561133157600080fd5b505af1158015611345573d6000803e3d6000fd5b50505050506040513d602081101561135c57600080fd5b5051604080516020808252865182820152865193945084936001600160a01b03808a1694908b16937f2b986d32a0536b7e19baa48ab949fec7b903b7fad7730820b20632d100cc3a68938a93919283929083019185019080838360005b838110156113d15781810151838201526020016113b9565b50505050905090810190601f1680156113fe5780820380516001836020036101000a031916815260200191505b509250505060405180910390a495945050505050565b6060611469826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114c59092919063ffffffff16565b805190915015610f605780806020019051602081101561148857600080fd5b5051610f605760405162461bcd60e51b815260040180806020018281038252602a815260200180611690602a913960400191505060405180910390fd5b60606111558484600085856114d985610de4565b61152a576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106115695780518252601f19909201916020918201910161154a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146115cb576040519150601f19603f3d011682016040523d82523d6000602084013e6115d0565b606091505b50915091506115e08282866115eb565b979650505050505050565b606083156115fa5750816110dd565b82511561160a5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561165457818101518382015260200161163c565b50505050905090810190601f1680156116815780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212200fb2fe7b7ba551594a27f11aef0f3198056bd7fcbcd4a4d7168fc6a2e0decbc864736f6c634300060b0033'

export class L2WethGateway__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<L2WethGateway> {
    return super.deploy(overrides || {}) as Promise<L2WethGateway>
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  attach(address: string): L2WethGateway {
    return super.attach(address) as L2WethGateway
  }
  connect(signer: Signer): L2WethGateway__factory {
    return super.connect(signer) as L2WethGateway__factory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): L2WethGatewayInterface {
    return new utils.Interface(_abi) as L2WethGatewayInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L2WethGateway {
    return new Contract(address, _abi, signerOrProvider) as L2WethGateway
  }
}
