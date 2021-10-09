import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
  const Home = ({ navigation }) => (
    <HomeScreen
      navigation={navigation}
      set={setRes}
      token={token}
      theme={dark}
      setTheme={setDark}
    />
  );

  const Profile = ({ route, navigation }) => (
    <ProfileScreen rslt={result} route={route} />
  );
  const Project = ({ route, navigation }) => (
    <ProjectScreen navigation={navigation} route={route} rslt={result} />
  );
  const [token, setToken] = React.useState();
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
  return (
    <NavigationContainer
      theme={dark ? darkTheme : DefaultTheme}
      initialRouteName="Home"
    >
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={({ navigation }) => ({
            headerRight: () => (
              <Icon
                type="font-awesome-5"
                name="sign-out-alt"
                color="#000"
                onPress={() => navigation.navigate("Home")}
              />
            ),
          })}
        />
        <Drawer.Screen
          name="Projects"
          component={Project}
          options={({ navigation }) => ({
            headerRight: () => (
              <Icon
                type="font-awesome-5"
                name="sign-out-alt"
                color="#000"
                onPress={() => navigation.navigate("Home")}
              />
            ),
          })}
        />
        {/* <Drawer.Screen
          name="Charts"
          component={({ route, navigation }) => (
            <ChartScreen
              navigation={navigation}
              route={route}
              result={result}
            />
          )}
          options={{
            headerRight: () => (
              <Icon
                type="font-awesome-5"
                name="sign-out-alt"
                color="#000"
                onPress={() => navigation.navigate("Home")}
              />
            ),
          }}
        /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
