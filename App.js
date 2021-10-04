import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProfileScreen, ProjectScreen, ChartScreen, HomeScreen } from "./Views";
import axios from "axios";
import { Icon } from "react-native-elements";
const darkTheme = {
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
// const lightTheme = {
//   dark: false,
//   colors: {
//     primary: "rgb(255, 45, 85)",
//     background: "white",
//     card: "#292D39",
//     text: "#000",
//     border: "#292D39",
//     notification: "rgb(255, 69, 58)",
//   },
// };
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
  // const [delay, setDelay] = React.useState(0);
  const [dark, setDark] = React.useState(true);
  React.useEffect(() => {
    console.log("DKHALT");
    axios
      .post("https://api.intra.42.fr/oauth/token", {
        grant_type: "client_credentials",
        client_id: uid,
        client_secret: client,
      })
      .then((tk) => setToken(tk?.data.access_token));
  }, []);
  setInterval(() => {
    alert("Expire");
    axios
      .post("https://api.intra.42.fr/oauth/token", {
        grant_type: "client_credentials",
        client_id: uid,
        client_secret: client,
      })
      .then((tk) => setToken(tk?.data.access_token));
  }, 7200000);
  console.log(dark);
  const [result, setRes] = React.useState([]);
  return result.length === 0 ? (
    <HomeScreen set={setRes} token={token} theme={dark} setTheme={setDark} />
  ) : (
    <NavigationContainer theme={dark ? darkTheme : DefaultTheme}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Profile"
          component={() => <ProfileScreen result={result} />}
          options={{
            headerRight: () => (
              <Icon
                type="font-awesome-5"
                name="sign-out-alt"
                color="#000"
                onPress={() => setRes([])}
              />
            ),
            result: result,
          }}
        />
        <Drawer.Screen
          name="Projects"
          component={ProjectScreen}
          options={{
            headerRight: () => (
              <Icon
                type="font-awesome-5"
                name="sign-out-alt"
                color="#000"
                onPress={() => setRes([])}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Charts"
          component={ChartScreen}
          options={{
            headerRight: () => (
              <Icon
                type="font-awesome-5"
                name="sign-out-alt"
                color="#000"
                onPress={() => setRes([])}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
