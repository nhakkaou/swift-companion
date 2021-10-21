import * as React from "react";
import { Text, FlatList } from "react-native";
import { List } from "react-native-paper";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

const MyComponent = ({ route, rslt, dark }) => {
  const { result } = rslt;
  const renderList = ({ item }) => {
    return (
      <List.Item
        title={item.project.name}
        description={item.project.slug}
        right={(props) => (
          <>
            {item["validated?"] ? (
              <Text
                style={{
                  fontSize: 10,
                  color: item["validated?"]
                    ? dark
                      ? "#35ff00"
                      : "#037d50"
                    : "#ff2e00",
                  margin: "auto",
                }}
              >
                {item.final_mark} {item.status}
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
    );
  };
  return (
    <SafeAreaView>
      {/* <View style={{ color: "white" }}> */}
      {result ? (
        <FlatList
          data={result?.projects_users}
          renderItem={renderList}
          keyExtractor={(item) => item.id}
        />
      ) : (
        ""
      )}
      {/* </View> */}
    </SafeAreaView>
  );
};

export default MyComponent;
