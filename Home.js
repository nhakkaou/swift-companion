import React, { useState } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import img from "./assets/1337.png";
const Home = () => {
  const [text, setvalue] = useState("");
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: require("./assets/1337.png") }}
      />
      <TextInput
        placeholder="Login.."
        style={styles.input}
        onChangeText={(e) => setvalue(e)}
        value={text}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    margin: 0,
    // padding: 24,
    backgroundColor: "#14110f",
  },
  input: {
    border: 3,
    borderColor: "#d9c5b2",
    margin: "auto",
    width: "30%",
    // textAlign: "center"
    padding: 10,
    borderWidth: 4,
    borderRadius: 6,
    fontWeight: "bold",
    height: 50,
    backgroundColor: "#f3f3f4",
    opacity: "100%",
  },
  logo: {
    margin: "auto",
    padding: 0,
    width: 100,
    height: 100,
  },
});
export default Home;
