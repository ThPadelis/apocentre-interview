import * as ContractActions from "../actions/contract.action";

const initialState = {
  name: "",
  decimals: 0,
  symbol: 0,
};

const contract = (state = initialState, action) => {
  switch (action.type) {
    case ContractActions.GET_IFNO:
      return action.payload;
    default:
      return state;
  }
};

export default contract;
