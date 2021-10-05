import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TransactionActions from "../store/actions/transactions.action";
import { Divider, Stack } from "native-base";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import EmptyTableRow from "./EmptyTableRow";

const Table = ({ getAllTransactions, transactions }) => {
  useEffect(() => {
    getAllTransactions("0xF7b547f3E46EFfB3480EEE2c486AE760734B135c");
  }, []);

  return (
    <Stack
      _dark={{ bg: "blueGray.800" }}
      _light={{ bg: "blueGray.100" }}
      direction="column"
      space={2}
      padding={5}
      rounded="sm"
      shadow={3}
    >
      <TableHeader />
      <Divider width="100%" />
      {transactions &&
        transactions.length > 0 &&
        transactions.map((t, i) => <TableRow data={t} key={i} />)}

      {(!transactions || transactions.length === 0) && <EmptyTableRow />}
    </Stack>
  );
};

const mapStateToProps = (state) => ({ transactions: state.transactions });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getAllTransactions: TransactionActions.getAll,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
