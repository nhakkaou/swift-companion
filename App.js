import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProfileScreen, ProjectScreen, HomeScreen } from "./Views";
import axios from "axios";
import { Icon } from "react-native-elements";
import { AsyncStorage } from "react-native";

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

export default function App() {
  const Home = ({ navigation }) => (
    <HomeScreen
      navigation={navigation}
      set={setRes}
      theme={dark}
      setTheme={setDark}
      token={token}
    />
  );

  const Profile = ({ route, navigation }) => (
    <ProfileScreen rslt={result} route={route} dark={dark} />
  );
  const Project = ({ route, navigation }) => (
    <ProjectScreen
      navigation={navigation}
      route={route}
      rslt={result}
      dark={dark}
    />
  );
  const [result, setRes] = React.useState([]);
  const [token, setToken] = React.useState("");
  const [dark, setDark] = React.useState(true);
  React.useEffect(() => {
    try {
      async function GetToken() {
        console.log("test");
        const token = await AsyncStorage.getItem("TOKEN");
        const date = await AsyncStorage.getItem("DATE");
        console.log(token, date);
        if (!token || date || date > Date.now()) {
          console.log("HIII");
          axios
            .post(
              "https://api.intra.42.fr/oauth/token",
              {
                grant_type: "client_credentials",
                client_id: uid,
                client_secret: client,
              },
              { timeout: 2000 }
            )
            .then(async (tk) => {
              setToken(tk.data.access_token);
              await AsyncStorage.setItem("TOKEN", tk.data.access_token);
              await AsyncStorage.setItem(
                "DATE",
                new Date(tk.data.created_at * 1000 + tk.data.expires_in * 1000)
              );
            });
        } else setToken(token);
      }
      GetToken();
    } catch (er) {
      console.log(er);
    }
  }, []);
  // setInterval(() => {
  //   alert("Expire");
  //   axios
  //     .post("https://api.intra.42.fr/oauth/token", {
  //       grant_type: "client_credentials",
  //       client_id: uid,
  //       client_secret: client,
  //     })
  //     .then((tk) => setToken(tk?.data.access_token));
  // }, delay);

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
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
