const Web3 = require("web3");
const { CONTRACT_ADDRESS, ERC20_ABI, PROVIDER } = require("./constants");

const loadBlockchain = async () => {
  const web3 = new Web3(PROVIDER);
  const contract = new web3.eth.Contract(ERC20_ABI, CONTRACT_ADDRESS);
  return Promise.resolve(contract);
};

module.exports = loadBlockchain;
