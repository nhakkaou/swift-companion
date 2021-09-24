import { ListItem, Avatar } from "react-native-elements";
import React from "react";
import { View } from "react-native";

export const Projects = () => {
  return (
    <View>
      <ListItem
        friction={90} //
        tension={100} // These props are passed to the parent component (here TouchableScale)
        activeScale={0.95} //
        linearGradientProps={{
          colors: ["#FF9800", "#F44336"],
          start: { x: 1, y: 0 },
          end: { x: 0.2, y: 0 },
        }}
      >
        <ListItem.Content>
          <ListItem.Title style={{ color: "black", fontWeight: "bold" }}>
            Chris Jackson
          </ListItem.Title>
          <ListItem.Subtitle style={{ color: "black" }}>
            Vice Chairman
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron color="white" />
      </ListItem>
    </View>
  );
};
export default Projects;
