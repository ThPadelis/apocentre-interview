import { Stack, Text, useClipboard, useToast } from "native-base";
import React from "react";
import Web3 from "web3";

const TableRow = ({ data }) => {
  const { onCopy } = useClipboard();
  const toast = useToast();

  const toEth = (value) => {
    if (!value) return "";
    return Web3.utils.fromWei(value, "ether");
  };

  const copyToClipboard = (text, value) => {
    onCopy(value);
    toast.show({ description: `${text} copied` });
  };

  return (
    <Stack
      direction="row"
      my="1"
      space={3}
      alignItems="center"
      accessible={true}
    >
      <Text
        width={325}
        onPress={(e) => {
          copyToClipboard("Address", data.from);
        }}
        isTruncated
      >
        {data.from}
      </Text>
      <Text
        width={325}
        onPress={(e) => {
          copyToClipboard("Address", data.to);
        }}
        isTruncated
      >
        {data.to}
      </Text>
      <Text
        width={100}
        onPress={(e) => {
          copyToClipboard("Value", data.value);
        }}
        isTruncated
        textAlign="center"
      >
        {toEth(data.value)}
      </Text>
    </Stack>
  );
};

export default TableRow;
