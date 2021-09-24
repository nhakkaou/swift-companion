import React, { useState, useEffect } from "react";
import img from "./assets/1337.png";
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
      <Image style={styles.logo} source={{ uri: "./assets/1337.png" }} />
      <View style={styles.login_container}>
        <TextInput
          placeholder="Login.."
          style={styles.input}
          onChangeText={(e) => setvalue(e)}
          value={text}
        />
        <TouchableOpacity style={styles.button}>
          <Icon name="search" type="evilicon" color="#517fa4" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  input: {
    width: "100%",
    padding: 10,
    // borderRadius: 6,
    fontWeight: "bold",
    height: 50,
    backgroundColor: "#f3f3f4",
  },
  logo: {
    textAlign: "center",
    margin: "auto",
    padding: 0,
    width: 100,
    height: 100,
  },
  button: {
    backgroundColor: "#f3f3f4",
    // width: 30,
    // height: 50,
  },

  login_container: {
    margin: "auto",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 4,
    // border: 3,
    borderColor: "#d9c5b2",
  },
});
export default Home;
