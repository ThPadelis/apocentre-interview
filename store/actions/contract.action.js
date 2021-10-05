import loadBlockchain from "../../utils/loadBlockchain";

export const GET_IFNO = "[CONTRACT] GET INFO";

export const getInfo = () => async (dispatch) => {
  try {
    const contract = await loadBlockchain();
    console.log({ contract });
    const name = await contract.methods.name().call();
    const symbol = await contract.methods.symbol().call();
    const decimals = await contract.methods.decimals().call();
    dispatch({ type: GET_IFNO, payload: { name, symbol, decimals } });
  } catch (error) {
    console.log({ error: error.toString() });
    dispatch({ type: GET_IFNO, payload: {} });
  }
};
