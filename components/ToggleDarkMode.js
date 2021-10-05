import { FontAwesome } from "@expo/vector-icons";
import { Icon, IconButton, Tooltip, useColorMode } from "native-base";
import React from "react";

const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      position="bottom"
      label={colorMode === "dark" ? "Light mode" : "Dark mode"}
    >
      <IconButton
        role="button"
        onPress={toggleColorMode}
        icon={
          <Icon
            as={
              <FontAwesome name={colorMode === "dark" ? "sun-o" : "moon-o"} />
            }
            size="sm"
            _dark={{ color: "blueGray.50" }}
            _light={{ color: "blueGray.900" }}
          />
        }
      />
    </Tooltip>
  );
};

export default ToggleDarkMode;
