import React, { useState, useEffect } from "react";
import img from "../assets/1337.png";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Switch,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import axios from "axios";
const Home = (props) => {
  const [text, setvalue] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    props.setTheme(!props.theme);
  };
  const ft_search = () => {
    console.log(text.toLocaleLowerCase());
    if (text)
      axios
        .get("https://api.intra.42.fr/v2/users/" + text.toLocaleLowerCase(), {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        })
        .then((rs) => {
          axios
            .get(
              "https://api.intra.42.fr/v2/users/" + rs.data.id + "/coalitions",
              {
                headers: {
                  Authorization: `Bearer ${props.token}`,
                },
              }
            )
            .then((coalition) =>
              props.set({
                user: rs.data,
                coalition: coalition?.data[0],
              })
            );
        })
        .catch((er) => alert(er));
  };
  return (
    <View style={styles.container}>
      <View style={styles.Switch}>
        <Switch
          trackColor={{ false: "#273746", true: "#A0E7E5" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.sousContainer}>
        <Image style={styles.logo} source={require("../assets/1337.png")} />
        {props.token ? (
          <View style={styles.login_container}>
            <TextInput
              placeholder="Login.."
              style={styles.input}
              onChangeText={(e) => setvalue(e.trim())}
              value={text}
            />
            <TouchableOpacity onPress={ft_search} style={styles.button}>
              <Text> Search</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#000",
  },
  sousContainer: {
    justifyContent: "center",
    // margin: "10",
    alignItems: "center",
  },
  input: {
    width: 250,
    height: 30,
    backgroundColor: "white",
    borderRadius: 1.5,
    color: "#292D39",
  },
  logo: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: "#292D39",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1.5,
    color: "white",
    height: 30,
    margin: "auto",
    marginTop: 20,
    padding: 8,
  },
  login_container: {},
  Switch: {
    padding: 15,
    alignItems: "flex-end",
  },
});
export default Home;
