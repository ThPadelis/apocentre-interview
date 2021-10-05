const Router = require("koa-router");
const Web3 = require("web3");
const loadBlockchain = require("../../utils/loadBlockchain");

const router = new Router();

router.get("/:ethAddress/transactions", async (ctx) => {
  try {
    const contract = await loadBlockchain();
    const address = ctx.params.ethAddress || "";

    if (!Web3.utils.isAddress(address)) {
      ctx.response.status = 400;
      ctx.response.body = {
        message: "Provide a valid address",
      };
    } else {
      const _transactions = await contract.getPastEvents("Transfer", {
        fromBlock: 0,
        toBlock: "latest",
      });

      const transactions = [..._transactions]
        .map((t) => ({
          from: t.returnValues.from,
          to: t.returnValues.to,
          value: t.returnValues.value,
        }))
        .filter((t) => t.from === address || t.to === address);

      ctx.response.status = 200;
      ctx.response.body = { transactions, length: transactions.length };
    }
  } catch (error) {
    ctx.response.status = 400;
    ctx.response.body = { error: error.toString() };
  }
});

module.exports = router.middleware();
