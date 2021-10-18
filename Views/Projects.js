import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import { List } from "react-native-paper";
import { Icon } from "react-native-elements";

const MyComponent = ({ route, rslt }) => {
  const { result } = rslt;

  return (
    <ScrollView>
      <View style={{ color: "white", flex: 1 }}>
        {result ? (
          result?.projects_users.map((el, key) => (
            <List.Item
              key={key}
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
          ))
        ) : (
          <Text>TEBEEB</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default MyComponent;
