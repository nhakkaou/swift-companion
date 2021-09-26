import React, { useState, useEffect } from "react";
import img from "../assets/1337.png";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Switch,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import axios from "axios";
const Home = (props) => {
  const [text, setvalue] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const ft_search = () => {
    console.log(props);
    if (text)
      axios
        .get("https://api.intra.42.fr/v2/users/" + text, {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        })
        .then((rs) => {
          console.log(rs);
          props.set(rs);
        })
        .catch((er) => alert(er));
  };
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#00ff00" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Image style={styles.logo} source={require("../assets/1337.png")} />
      {props.token ? (
        <View style={styles.login_container}>
          <TextInput
            placeholder="Login.."
            style={styles.input}
            onChangeText={(e) => setvalue(e)}
            value={text}
          />
          <TouchableOpacity onPress={ft_search} style={styles.button}>
            Search
          </TouchableOpacity>
        </View>
      ) : (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
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
    // width: 75,
    height: 30,
    margin: "auto",
    marginTop: 20,
    padding: 8,
  },
  login_container: {},
});
export default Home;
