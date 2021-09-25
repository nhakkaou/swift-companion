import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProfileScreen, ProjectScreen, ChartScreen, HomeScreen } from "./Views";
import axios from "axios";
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
const uid = "8b3f2aa1e1b4e9ea2ed2399b3783dba79813b948c9ecbb9555f7927a7b530e0a";
const client =
  "fdf4044597bc43b22cf442e825051dda952c834d1d16d8aebfdb6c223df3a37d";

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
  const [token, setToken] = React.useState();
  setInterval(() => {
    axios
      .post("https://api.intra.42.fr/oauth/token", {
        grant_type: "client_credentials",
        client_id: uid,
        client_secret: client,
      })
      .then((tk) => (setToken(tk?.data.access_token)));
  }, 7200);

  const [result, setRes] = React.useState([]);
  return result.length === 0 ? (
    <HomeScreen set={setRes} token={token} />
  ) : (
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
        {/* // <Drawer.Screen
        //   name="Home"
        //   component={HomeScreen}
        //   options={{ headerShown: true }}
        // /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
