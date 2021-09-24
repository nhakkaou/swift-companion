import * as React from "react";
import HomeScreen from "./Home";
import Profile from "./Profile";
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Charts from "./Charts";
import Projects from "./Projects";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Projects") {
              iconName = "tasks";
            } else if (route.name === "Profile") {
              iconName = focused ? "vcard" : "vcard-o";
            } else if (route.name === "Charts") {
              iconName = "bar-chart";
            }

            // You can return any component that you like here!
            return (
              <Icon
                name={iconName}
                type="font-awesome"
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "#A061D1",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Projects" component={Projects} />
        <Tab.Screen name="Charts" component={Charts} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
