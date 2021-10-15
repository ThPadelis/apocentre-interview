import { Heading, Stack } from "native-base";
import React from "react";

const TableHeader = () => {
  return (
    <Stack direction="row" my="1" space={3} alignItems="center">
      <Heading width={325} size="sm">
        From
      </Heading>
      <Heading width={325} size="sm">
        To
      </Heading>
      <Heading width={100} size="sm">
        Value (ETH)
      </Heading>
    </Stack>
  );
};

export default TableHeader;
