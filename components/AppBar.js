import React from "react";
import { Box, HStack, StatusBar, Text } from "native-base";
import ToggleDarkMode from "./ToggleDarkMode";
import Github from "./Github";

const AppBar = () => {
  return (
    <>
      <StatusBar
        _dark={{ backgroundColor: "blueGray.900", barStyle: "light-content" }}
        _light={{ backgroundColor: "blueGray.100", barStyle: "dark-content" }}
      />

      <Box
        safeAreaTop
        _dark={{ backgroundColor: "blueGray.900" }}
        _light={{ backgroundColor: "blueGray.100" }}
      />

      <HStack
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.100" }}
        px="5"
        py="3"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack space="4" alignItems="center">
          <Text fontSize="20" fontWeight="bold">
            Interview Project
          </Text>
        </HStack>
        <HStack space="2">
          <Github />
          <ToggleDarkMode />
        </HStack>
      </HStack>
    </>
  );
};

export default AppBar;
