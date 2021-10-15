# Interview Project

## Requirements

We want you to create a system that will:

- Load the information for the given ERC20 contract.
    - The contract address is: `0xf019a9c291fab47003588fe74d33660cd467fc22`
    - We want the nam​e of the ERC20 contract, the symbol and the decimal points.
- The above ERC20 contracts has got some token transfer from and to this externally owned Ethereum address: `0xF7b547f3E46EFfB3480EEE2c486AE760734B135c​`. We need to load all those transfers.
- For each transfer we need to show:
    - The sender of the tokens i.e. `from`
    - The recipient of the tokens: `to`
    - The size i.e. the number of the tokens: ​`value`
- We need a KoaJS Restful API with a single endpoint.
    - The endpoint will be​ `/addresses/:ethAddress/transactions`
    - It will receive the aforementioned address as a parameter.
    - It will use Web3JS to load all transaction data from the Blockchain and send
    them to the client.
- Finally we need a React-Native app that will show the transactions in a table.
    - The app should use Redux for state management
    - It will communicate with the Koa Server to load all transactions for the given
ethereum address.

## Hints
1. You will have to use [​web3.js​](https://web3js.readthedocs.io/en/v1.2.8/) t​o connect to the Ethereum json-rpc endpoint which is `https://kovan.infura.io/v3/3269c013c5b2449aaea1bb593f873d77`
2. You can find the ERC20 abi [​here​](https://github.com/ethereum/wiki/wiki/Contract-ERC20-ABI).
3. To load the transfers you will have to read the Transfer​ event from the above ERC20 contract. Check the instructions​ [here​](https://web3js.readthedocs.io/en/v1.2.8/web3-eth-contract.html#contract-events).
4. Check [this](https://kovan.etherscan.io/token/0xf019a9c291fab47003588fe74d33660cd467fc22?a=0xF7b547f3E46EFfB3480EEE2c486AE760734B135c) ​link​ that shows the transaction table that you will have to render within the react native app.