import * as TransactionActions from "../actions/transactions.action";

const initialState = [];

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case TransactionActions.GET_ALL:
      return action.payload;
    default:
      return state;
  }
};

export default transactions;
