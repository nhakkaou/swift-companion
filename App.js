import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProfileScreen, ProjectScreen, ChartScreen, HomeScreen } from "./Views";
const MyTheme = {
  dark: true,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "#000",
    card: "#292D39",
    text: "white",
    border: "#292D39",
    notification: "rgb(255, 69, 58)",
  },
};

const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

// function Root() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//       <Stack.Screen name="Settings" component={SettingsScreen} />
//     </Stack.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen
          name="Projects"
          component={ProjectScreen}
          options={{ headerShown: true }}
        />
        <Drawer.Screen
          name="Charts"
          component={ChartScreen}
          options={{ headerShown: true }}
        />
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
