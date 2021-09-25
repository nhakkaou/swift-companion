import React, { useState, useEffect } from "react";
import img from "../assets/1337.png";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import axios from "axios";
const Home = () => {
  const [text, setvalue] = useState("");
  const [users, setUsers] = useState([]);
  const token =
    "c86336d41aaeb0b6e42b08c9a5689534e984b6f9e3bb30152bfaa31eace6e759";
  useEffect(() => {
    axios
      .get("https://api.intra.42.fr/v2/users/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((rs) => console.log(rs))
      .catch((er) => console.log(er));
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: "../assets/favicon.png" }} />
      <View style={styles.login_container}>
        <TextInput
          placeholder="Login.."
          style={styles.input}
          onChangeText={(e) => setvalue(e)}
          value={text}
        />
        <TouchableOpacity style={styles.button}>Search</TouchableOpacity>
        {/* <Icon name="search" type="evilicon" color="#517fa4" /> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  input: {
    width: 250,
    height: 30,
    backgroundColor: "white",
    borderRadius: 1.5,
    color: "#292D39",
  },
  logo: {
    width: 250,
    height: 250,
    // backgroundColor: "orange",
  },
  button: {
    backgroundColor: "#292D39",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1.5,
    color: "white",
    width: 75,
    height: 30,
    margin: "auto",
    marginTop: 20,
  },
  login_container: {},
});
export default Home;
