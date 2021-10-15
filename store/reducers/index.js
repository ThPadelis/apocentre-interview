import { combineReducers } from "redux";
import contract from "./contract.reducer";
import transactions from "./transactions.reducer";

export default combineReducers({ contract, transactions });
