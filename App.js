import React from "react";
import { NativeBaseProvider, extendTheme, Center, VStack } from "native-base";
import { themeConfig } from "./utils/theme";
import { Provider } from "react-redux";
import store from "./store";
import AppBar from "./components/AppBar";
import Table from "./components/Table";
import ContractInfo from "./components/ContractInfo";

export const theme = extendTheme({ themeConfig });

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <AppBar />
        <Center
          _dark={{ bg: "blueGray.900" }}
          _light={{ bg: "blueGray.50" }}
          px="4"
          py="5"
          flex={1}
        >
          <VStack space={5} alignItems="center">
            <ContractInfo />
            <Table />
          </VStack>
        </Center>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
