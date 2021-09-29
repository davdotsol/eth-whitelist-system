(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"contractName":"Whitelist","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_address","type":"address"}],"name":"Whitelisted","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"whitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAddresses","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true}],"metadata":"{\\"compiler\\":{\\"version\\":\\"0.6.11+commit.5ef660b1\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"address\\",\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"Whitelisted\\",\\"type\\":\\"event\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"_whitelist\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"addresses\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"getAddresses\\",\\"outputs\\":[{\\"internalType\\":\\"address[]\\",\\"name\\":\\"\\",\\"type\\":\\"address[]\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_address\\",\\"type\\":\\"address\\"}],\\"name\\":\\"whitelist\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"kind\\":\\"dev\\",\\"methods\\":{},\\"version\\":1},\\"userdoc\\":{\\"kind\\":\\"user\\",\\"methods\\":{},\\"version\\":1}},\\"settings\\":{\\"compilationTarget\\":{\\"/home/davaux/projects/ethereum/eth-whitelist-system/contracts/Whitelist.sol\\":\\"Whitelist\\"},\\"evmVersion\\":\\"byzantium\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\"},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"/home/davaux/projects/ethereum/eth-whitelist-system/contracts/Whitelist.sol\\":{\\"keccak256\\":\\"0x4bec7c1e2bec90375ee6b95dca6ba7b706f1e95f54b5c7a5862bb73472b075dc\\",\\"license\\":\\"MIT\\",\\"urls\\":[\\"bzz-raw://7ae6089e842d85054c62cf5f500e374631ee4e2e2c352e8fc434d6638a0249da\\",\\"dweb:/ipfs/QmQh5MbEsfrgkEPKPb4b1i3thpXHvfPt8ryLGexQva2vo2\\"]}},\\"version\\":1}","bytecode":"0x608060405234801561001057600080fd5b506104e2806100206000396000f3fe608060405234801561001057600080fd5b5060043610610069576000357c0100000000000000000000000000000000000000000000000000000000900480639b19251a1461006e578063a39fac12146100b2578063cfdb63ac14610111578063edf26d9b1461016d575b600080fd5b6100b06004803603602081101561008457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101db565b005b6100ba61039d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100fd5780820151818401526020810190506100e2565b505050509050019250505060405180910390f35b6101536004803603602081101561012757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061042b565b604051808215151515815260200191505060405180910390f35b6101996004803603602081101561018357600080fd5b810190808035906020019092919050505061044b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561027d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806104886025913960400191505060405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507faab7954e9d246b167ef88aeddad35209ca2489d95a8aeb59e288d9b19fae5a5481604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6060600180548060200260200160405190810160405280929190818152602001828054801561042157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116103d7575b5050505050905090565b60006020528060005260406000206000915054906101000a900460ff1681565b6001818154811061045857fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe54686973206164647265737320697320616c72656164792077686974656c69737465642021a26469706673582212205142ebbfd3a10c580e5d46adc103a6dd3d89d1a1338dd252dcfbdcb8170055b664736f6c634300060b0033","deployedBytecode":"0x608060405234801561001057600080fd5b5060043610610069576000357c0100000000000000000000000000000000000000000000000000000000900480639b19251a1461006e578063a39fac12146100b2578063cfdb63ac14610111578063edf26d9b1461016d575b600080fd5b6100b06004803603602081101561008457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101db565b005b6100ba61039d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156100fd5780820151818401526020810190506100e2565b505050509050019250505060405180910390f35b6101536004803603602081101561012757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061042b565b604051808215151515815260200191505060405180910390f35b6101996004803603602081101561018357600080fd5b810190808035906020019092919050505061044b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561027d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806104886025913960400191505060405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507faab7954e9d246b167ef88aeddad35209ca2489d95a8aeb59e288d9b19fae5a5481604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6060600180548060200260200160405190810160405280929190818152602001828054801561042157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116103d7575b5050505050905090565b60006020528060005260406000206000915054906101000a900460ff1681565b6001818154811061045857fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fe54686973206164647265737320697320616c72656164792077686974656c69737465642021a26469706673582212205142ebbfd3a10c580e5d46adc103a6dd3d89d1a1338dd252dcfbdcb8170055b664736f6c634300060b0033","sourceMap":"57:487:1:-:0;;;;;;;;;;;;;;;;;;;","deployedSourceMap":"57:487:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;203:239;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;448:94;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;82:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;129:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;203:239;266:10;:20;277:8;266:20;;;;;;;;;;;;;;;;;;;;;;;;;265:21;257:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;361:4;338:10;:20;349:8;338:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;375:9;390:8;375:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;414:21;426:8;414:21;;;;;;;;;;;;;;;;;;;;;;203:239;:::o;448:94::-;492:16;526:9;519:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;448:94;:::o;82:41::-;;;;;;;;;;;;;;;;;;;;;;:::o;129:26::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o","source":"// SPDX-License-Identifier: MIT\\npragma solidity 0.6.11;\\n\\ncontract Whitelist {\\n    mapping(address=> bool) public _whitelist;\\n    address[] public addresses;\\n    event Whitelisted(address _address);\\n\\n    function whitelist(address _address) public {\\n        require(!_whitelist[_address], \\"This address is already whitelisted !\\");\\n        _whitelist[_address] = true;\\n        addresses.push(_address);\\n        emit Whitelisted(_address);\\n    }\\n\\n    function getAddresses() public view returns(address[] memory){\\n        return addresses;\\n    }\\n}","sourcePath":"/home/davaux/projects/ethereum/eth-whitelist-system/contracts/Whitelist.sol","ast":{"absolutePath":"/home/davaux/projects/ethereum/eth-whitelist-system/contracts/Whitelist.sol","exportedSymbols":{"Whitelist":[89]},"id":90,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":38,"literals":["solidity","0.6",".11"],"nodeType":"PragmaDirective","src":"32:23:1"},{"abstract":false,"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":89,"linearizedBaseContracts":[89],"name":"Whitelist","nodeType":"ContractDefinition","nodes":[{"constant":false,"functionSelector":"cfdb63ac","id":42,"mutability":"mutable","name":"_whitelist","nodeType":"VariableDeclaration","overrides":null,"scope":89,"src":"82:41:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"typeName":{"id":41,"keyType":{"id":39,"name":"address","nodeType":"ElementaryTypeName","src":"90:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"82:23:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"valueType":{"id":40,"name":"bool","nodeType":"ElementaryTypeName","src":"100:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}},"value":null,"visibility":"public"},{"constant":false,"functionSelector":"edf26d9b","id":45,"mutability":"mutable","name":"addresses","nodeType":"VariableDeclaration","overrides":null,"scope":89,"src":"129:26:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":43,"name":"address","nodeType":"ElementaryTypeName","src":"129:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":44,"length":null,"nodeType":"ArrayTypeName","src":"129:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":49,"name":"Whitelisted","nodeType":"EventDefinition","parameters":{"id":48,"nodeType":"ParameterList","parameters":[{"constant":false,"id":47,"indexed":false,"mutability":"mutable","name":"_address","nodeType":"VariableDeclaration","overrides":null,"scope":49,"src":"179:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":46,"name":"address","nodeType":"ElementaryTypeName","src":"179:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"178:18:1"},"src":"161:36:1"},{"body":{"id":78,"nodeType":"Block","src":"247:195:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":58,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"265:21:1","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":55,"name":"_whitelist","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":42,"src":"266:10:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":57,"indexExpression":{"argumentTypes":null,"id":56,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"277:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"266:20:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"54686973206164647265737320697320616c72656164792077686974656c69737465642021","id":59,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"288:39:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_5c1ceab27dd6ed07f05dac916dcd1b6bd794a03c45049dce86e59097d8a43cc9","typeString":"literal_string \\"This address is already whitelisted !\\""},"value":"This address is already whitelisted !"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_5c1ceab27dd6ed07f05dac916dcd1b6bd794a03c45049dce86e59097d8a43cc9","typeString":"literal_string \\"This address is already whitelisted !\\""}],"id":54,"name":"require","nodeType":"Identifier","overloadedDeclarations":[-18,-18],"referencedDeclaration":-18,"src":"257:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":60,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"257:71:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":61,"nodeType":"ExpressionStatement","src":"257:71:1"},{"expression":{"argumentTypes":null,"id":66,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":62,"name":"_whitelist","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":42,"src":"338:10:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":64,"indexExpression":{"argumentTypes":null,"id":63,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"349:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"338:20:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":65,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"361:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"338:27:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":67,"nodeType":"ExpressionStatement","src":"338:27:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":71,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"390:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":68,"name":"addresses","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":45,"src":"375:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"375:14:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":72,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"375:24:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":73,"nodeType":"ExpressionStatement","src":"375:24:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":75,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"426:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":74,"name":"Whitelisted","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":49,"src":"414:11:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":76,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"414:21:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":77,"nodeType":"EmitStatement","src":"409:26:1"}]},"documentation":null,"functionSelector":"9b19251a","id":79,"implemented":true,"kind":"function","modifiers":[],"name":"whitelist","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":52,"nodeType":"ParameterList","parameters":[{"constant":false,"id":51,"mutability":"mutable","name":"_address","nodeType":"VariableDeclaration","overrides":null,"scope":79,"src":"222:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":50,"name":"address","nodeType":"ElementaryTypeName","src":"222:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"221:18:1"},"returnParameters":{"id":53,"nodeType":"ParameterList","parameters":[],"src":"247:0:1"},"scope":89,"src":"203:239:1","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":87,"nodeType":"Block","src":"509:33:1","statements":[{"expression":{"argumentTypes":null,"id":85,"name":"addresses","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":45,"src":"526:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"functionReturnParameters":84,"id":86,"nodeType":"Return","src":"519:16:1"}]},"documentation":null,"functionSelector":"a39fac12","id":88,"implemented":true,"kind":"function","modifiers":[],"name":"getAddresses","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":80,"nodeType":"ParameterList","parameters":[],"src":"469:2:1"},"returnParameters":{"id":84,"nodeType":"ParameterList","parameters":[{"constant":false,"id":83,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":88,"src":"492:16:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_memory_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":81,"name":"address","nodeType":"ElementaryTypeName","src":"492:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":82,"length":null,"nodeType":"ArrayTypeName","src":"492:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"}],"src":"491:18:1"},"scope":89,"src":"448:94:1","stateMutability":"view","virtual":false,"visibility":"public"}],"scope":90,"src":"57:487:1"}],"src":"32:512:1"},"legacyAST":{"absolutePath":"/home/davaux/projects/ethereum/eth-whitelist-system/contracts/Whitelist.sol","exportedSymbols":{"Whitelist":[89]},"id":90,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":38,"literals":["solidity","0.6",".11"],"nodeType":"PragmaDirective","src":"32:23:1"},{"abstract":false,"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":89,"linearizedBaseContracts":[89],"name":"Whitelist","nodeType":"ContractDefinition","nodes":[{"constant":false,"functionSelector":"cfdb63ac","id":42,"mutability":"mutable","name":"_whitelist","nodeType":"VariableDeclaration","overrides":null,"scope":89,"src":"82:41:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"typeName":{"id":41,"keyType":{"id":39,"name":"address","nodeType":"ElementaryTypeName","src":"90:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"82:23:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"},"valueType":{"id":40,"name":"bool","nodeType":"ElementaryTypeName","src":"100:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}}},"value":null,"visibility":"public"},{"constant":false,"functionSelector":"edf26d9b","id":45,"mutability":"mutable","name":"addresses","nodeType":"VariableDeclaration","overrides":null,"scope":89,"src":"129:26:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[]"},"typeName":{"baseType":{"id":43,"name":"address","nodeType":"ElementaryTypeName","src":"129:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":44,"length":null,"nodeType":"ArrayTypeName","src":"129:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"public"},{"anonymous":false,"documentation":null,"id":49,"name":"Whitelisted","nodeType":"EventDefinition","parameters":{"id":48,"nodeType":"ParameterList","parameters":[{"constant":false,"id":47,"indexed":false,"mutability":"mutable","name":"_address","nodeType":"VariableDeclaration","overrides":null,"scope":49,"src":"179:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":46,"name":"address","nodeType":"ElementaryTypeName","src":"179:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"178:18:1"},"src":"161:36:1"},{"body":{"id":78,"nodeType":"Block","src":"247:195:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":58,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"nodeType":"UnaryOperation","operator":"!","prefix":true,"src":"265:21:1","subExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":55,"name":"_whitelist","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":42,"src":"266:10:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":57,"indexExpression":{"argumentTypes":null,"id":56,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"277:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"266:20:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},{"argumentTypes":null,"hexValue":"54686973206164647265737320697320616c72656164792077686974656c69737465642021","id":59,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"288:39:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_5c1ceab27dd6ed07f05dac916dcd1b6bd794a03c45049dce86e59097d8a43cc9","typeString":"literal_string \\"This address is already whitelisted !\\""},"value":"This address is already whitelisted !"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_bool","typeString":"bool"},{"typeIdentifier":"t_stringliteral_5c1ceab27dd6ed07f05dac916dcd1b6bd794a03c45049dce86e59097d8a43cc9","typeString":"literal_string \\"This address is already whitelisted !\\""}],"id":54,"name":"require","nodeType":"Identifier","overloadedDeclarations":[-18,-18],"referencedDeclaration":-18,"src":"257:7:1","typeDescriptions":{"typeIdentifier":"t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$","typeString":"function (bool,string memory) pure"}},"id":60,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"257:71:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":61,"nodeType":"ExpressionStatement","src":"257:71:1"},{"expression":{"argumentTypes":null,"id":66,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":62,"name":"_whitelist","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":42,"src":"338:10:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_bool_$","typeString":"mapping(address => bool)"}},"id":64,"indexExpression":{"argumentTypes":null,"id":63,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"349:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"338:20:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"74727565","id":65,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"361:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"src":"338:27:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"id":67,"nodeType":"ExpressionStatement","src":"338:27:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":71,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"390:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"expression":{"argumentTypes":null,"id":68,"name":"addresses","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":45,"src":"375:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"id":70,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"375:14:1","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":72,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"375:24:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":73,"nodeType":"ExpressionStatement","src":"375:24:1"},{"eventCall":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":75,"name":"_address","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":51,"src":"426:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":74,"name":"Whitelisted","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":49,"src":"414:11:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$returns$__$","typeString":"function (address)"}},"id":76,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"414:21:1","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":77,"nodeType":"EmitStatement","src":"409:26:1"}]},"documentation":null,"functionSelector":"9b19251a","id":79,"implemented":true,"kind":"function","modifiers":[],"name":"whitelist","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":52,"nodeType":"ParameterList","parameters":[{"constant":false,"id":51,"mutability":"mutable","name":"_address","nodeType":"VariableDeclaration","overrides":null,"scope":79,"src":"222:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":50,"name":"address","nodeType":"ElementaryTypeName","src":"222:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"221:18:1"},"returnParameters":{"id":53,"nodeType":"ParameterList","parameters":[],"src":"247:0:1"},"scope":89,"src":"203:239:1","stateMutability":"nonpayable","virtual":false,"visibility":"public"},{"body":{"id":87,"nodeType":"Block","src":"509:33:1","statements":[{"expression":{"argumentTypes":null,"id":85,"name":"addresses","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":45,"src":"526:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage","typeString":"address[] storage ref"}},"functionReturnParameters":84,"id":86,"nodeType":"Return","src":"519:16:1"}]},"documentation":null,"functionSelector":"a39fac12","id":88,"implemented":true,"kind":"function","modifiers":[],"name":"getAddresses","nodeType":"FunctionDefinition","overrides":null,"parameters":{"id":80,"nodeType":"ParameterList","parameters":[],"src":"469:2:1"},"returnParameters":{"id":84,"nodeType":"ParameterList","parameters":[{"constant":false,"id":83,"mutability":"mutable","name":"","nodeType":"VariableDeclaration","overrides":null,"scope":88,"src":"492:16:1","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_memory_ptr","typeString":"address[]"},"typeName":{"baseType":{"id":81,"name":"address","nodeType":"ElementaryTypeName","src":"492:7:1","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"id":82,"length":null,"nodeType":"ArrayTypeName","src":"492:9:1","typeDescriptions":{"typeIdentifier":"t_array$_t_address_$dyn_storage_ptr","typeString":"address[]"}},"value":null,"visibility":"internal"}],"src":"491:18:1"},"scope":89,"src":"448:94:1","stateMutability":"view","virtual":false,"visibility":"public"}],"scope":90,"src":"57:487:1"}],"src":"32:512:1"},"compiler":{"name":"solc","version":"0.6.11+commit.5ef660b1.Emscripten.clang"},"networks":{"5777":{"events":{"0xaab7954e9d246b167ef88aeddad35209ca2489d95a8aeb59e288d9b19fae5a54":{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_address","type":"address"}],"name":"Whitelisted","type":"event","signature":"0xaab7954e9d246b167ef88aeddad35209ca2489d95a8aeb59e288d9b19fae5a54"}},"links":{},"address":"0x22a173b75ACdb0FEE95fc67B7B1E59CcfdF262bC","transactionHash":"0xed8232b7e1e5cb0950ebb7e8a049383e281d6bcbe430da5dfb114b8cf45ca92d"}},"schemaVersion":"3.0.20","updatedAt":"2021-09-23T20:39:48.574Z","networkType":"ethereum","devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}}')},26:function(e,t,f){e.exports=f(39)},31:function(e,t,f){},35:function(e,t,f){},39:function(e,t,f){"use strict";f.r(t);var a=f(0),s=f.n(a),n=f(18),r=f.n(n),i=(f(31),f(5)),d=f.n(i),l=f(8),o=f(19),p=f(20),c=f(23),y=f(21),u=f(25),m=f(14),b=f(10),_=f.n(b),g=function(){return new Promise((function(e,t){window.addEventListener("load",Object(l.a)(d.a.mark((function f(){var a,s,n,r;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(!window.ethereum){f.next=13;break}return a=new _.a(window.ethereum),f.prev=2,f.next=5,window.ethereum.enable();case 5:e(a),f.next=11;break;case 8:f.prev=8,f.t0=f.catch(2),t(f.t0);case 11:f.next=14;break;case 13:window.web3?(s=window.web3,console.log("Injected web3 detected."),e(s)):(n=new _.a.providers.HttpProvider("http://127.0.0.1:8545"),r=new _.a(n),console.log("No web3 instance injected, using Local web3."),e(r));case 14:case"end":return f.stop()}}),f,null,[[2,8]])}))))}))},T=(f(34),f(24)),h=f(16),v=f(7),D=f(15),I=f(22),S=(f(35),function(e){function t(){var e,f;Object(o.a)(this,t);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(f=Object(c.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(s)))).state={whitelist:null,web3:null,accounts:null,contract:null},f.componentDidMount=Object(l.a)(d.a.mark((function e(){var t,a,s,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g();case 3:return t=e.sent,e.next=6,t.eth.getAccounts();case 6:return a=e.sent,e.next=9,t.eth.net.getId();case 9:s=e.sent,n=m.networks[s],r=new t.eth.Contract(m.abi,n&&n.address),f.setState({web3:t,accounts:a,contract:r},f.runInit),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),alert("Failed to load web3, accounts, or contract. Check console for details."),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])}))),f.runInit=Object(l.a)(d.a.mark((function e(){var t,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.state,t.accounts,a=t.contract,e.next=3,a.methods.getAddresses().call();case 3:s=e.sent,f.setState({whitelist:s});case 5:case"end":return e.stop()}}),e)}))),f.whitelist=Object(l.a)(d.a.mark((function e(){var t,a,s,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.state,a=t.accounts,s=t.contract,n=f.address.value,e.next=4,s.methods.whitelist(n).send({from:a[0]});case 4:f.runInit();case 5:case"end":return e.stop()}}),e)}))),f}return Object(u.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state.whitelist;return this.state.web3?s.a.createElement("div",{className:"App"},s.a.createElement("div",null,s.a.createElement("h2",{className:"text-center"},"Blockchain Whitelist System powered by Ethereum"),s.a.createElement("hr",null),s.a.createElement("br",null)),s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement(v.a,{style:{width:"50rem"}},s.a.createElement(v.a.Header,null,s.a.createElement("strong",null,"Authorized Accounts")),s.a.createElement(v.a.Body,null,s.a.createElement(D.a,{variant:"flush"},s.a.createElement(D.a.Item,null,s.a.createElement(I.a,{striped:!0,bordered:!0,hover:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"@"))),s.a.createElement("tbody",null,null!==t&&t.map((function(e){return s.a.createElement("tr",null,s.a.createElement("td",null,e))}))))))))),s.a.createElement("br",null),s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement(v.a,{style:{width:"50rem"}},s.a.createElement(v.a.Header,null,s.a.createElement("strong",null,"Authorized New Account")),s.a.createElement(v.a.Body,null,s.a.createElement(h.a.Group,{controlId:"formAddress"},s.a.createElement(h.a.Control,{type:"text",id:"address",ref:function(t){e.address=t}})),s.a.createElement(T.a,{onClick:this.whitelist,variant:"dark"}," ","Autoriser"," ")))),s.a.createElement("br",null)):s.a.createElement("div",null,"Loading Web3, accounts, and contract...")}}]),t}(a.Component));r.a.render(s.a.createElement(S,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.07763125.chunk.js.map