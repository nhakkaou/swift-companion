import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProfileScreen, ProjectScreen, HomeScreen } from "./Views";
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

const Drawer = createDrawerNavigator();

export default function App() {
  const Home = ({ navigation }) => (
    <HomeScreen
      navigation={navigation}
      set={setRes}
      theme={dark}
      setTheme={setDark}
      // token={token}
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
  // const [token, setToken] = React.useState("");
  const [dark, setDark] = React.useState(true);
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
