import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Icon, IconButton, Link, Tooltip } from "native-base";

const Github = () => {
  return (
    <Tooltip position="bottom" label="GitHub">
      <Link isExternal href="https://github.com/ThPadelis/apocentre-interview">
        <IconButton
          role="button"
          icon={
            <Icon
              as={<FontAwesome name="github" />}
              size="sm"
              _dark={{ color: "blueGray.50" }}
              _light={{ color: "blueGray.900" }}
            />
          }
        />
      </Link>
    </Tooltip>
  );
};

export default Github;
