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
const Home = (props) => {
  const [text, setvalue] = useState("");
  const [users, setUsers] = useState([]);
  console.log(props);
  const search = () => {
    if (text)
      axios
        .get("https://api.intra.42.fr/v2/users/"+text, {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        })
        .then((rs) => {
          console.log(rs);
          setRes(rs)})
        .catch((er) => alert(er));
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: "../assets/1337.png" }} />
      <View style={styles.login_container}>
        <TextInput
          placeholder="Login.."
          style={styles.input}
          onChangeText={(e) => setvalue(e)}
          value={text}
        />
        <TouchableOpacity onClick={() => search} style={styles.button}>
          Search
        </TouchableOpacity>
      </View>
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
    width: 500,
    height: 500,
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
