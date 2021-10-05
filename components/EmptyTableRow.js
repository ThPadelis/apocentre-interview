import { Stack, Text } from "native-base";
import React from "react";

const EmptyTableRow = () => {
  return (
    <Stack direction="row" my="1" space={3} alignItems="center">
      <Text width="100%" textAlign="center">
        No transactions found
      </Text>
    </Stack>
  );
};

export default EmptyTableRow;
