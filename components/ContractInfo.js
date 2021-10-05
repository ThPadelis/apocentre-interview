import { Divider, Heading, Stack, Text } from "native-base";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ContractActions from "../store/actions/contract.action";

const Row = ({ title, value }) => {
  return (
    <Stack direction="row" my="1" space={3} alignItems="center">
      <Text width={500} bold="600">
        {title}
      </Text>
      <Text width={250}>{value}</Text>
    </Stack>
  );
};

const ContractInfo = ({ contract, getInfo }) => {
  const { name, decimals, symbol } = contract;

  useEffect(() => {
    getInfo();
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
      w="100%"
    >
      <Heading size="md">Contract overview</Heading>
      <Divider w="100%" />
      <Row title="Contract name" value={name} />
      <Row title="Decimals" value={decimals} />
      <Row title="Symbol" value={symbol} />
    </Stack>
  );
};

const mapStateToProps = (state) => ({ contract: state.contract });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getInfo: ContractActions.getInfo,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ContractInfo);
