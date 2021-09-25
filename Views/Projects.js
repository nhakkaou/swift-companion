import * as React from "react";
import { View, Text } from "react-native";
import { List } from "react-native-paper";
import result from "./test.json";
import { Icon } from "react-native-elements";

const MyComponent = () => (
  <View style={{ color: "white", flex: 1 }}>
    {result?.projects_users.map((el) => (
      <List.Item
        title={el.project.name}
        description={el.project.slug}
        right={(props) => (
          <>
            {el["validated?"] ? (
              <Text
                style={{
                  fontSize: 10,
                  color: el["validated?"] ? "#35ff00" : "#ff2e00",
                  margin: "auto",
                }}
              >
                {el.final_mark} {el.status}
              </Text>
            ) : (
              <Icon
                style={{ margin: "auto" }}
                name="clock"
                type="evilicon"
                color="gray"
              />
            )}
          </>
        )}
        style={{ borderBottomWidth: 0.1, borderColor: "#292D39" }}
        titleStyle={{ color: "gray" }}
        descriptionStyle={{ fontSize: 10, color: "gray" }}
      />
    ))}
  </View>
);

export default MyComponent;
