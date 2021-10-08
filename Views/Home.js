import React, { useState } from "react";
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
import axios from "axios";
const Home = ({ navigation, token, set, theme, setTheme }) => {
  const [text, setvalue] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [load, setLoad] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    setTheme(!theme);
  };
  const ft_search = () => {
    setLoad(true);
    if (text)
      axios
        .get("https://api.intra.42.fr/v2/users/" + text.toLocaleLowerCase(), {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((rs) => {
          axios
            .get(
              "https://api.intra.42.fr/v2/users/" + rs.data.id + "/coalitions",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((coalition) => {
              // set({ result: rs?.data, coalition: coalition?.data });
              navigation.navigate("Profile", {
                coalition: coalition?.data,
                result: rs?.data,
              });
            });
        })
        .catch((er) => {
          setLoad(false);
          alert(er);
        });
  };

  return (
    <View style={{ backgroundColor: isEnabled ? "#fff" : "#000", flex: 1 }}>
      <View style={styles.Switch}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.sousContainer}>
        <Image style={styles.logo} source={require("../assets/1337.png")} />
        {token && !load ? (
          <View style={styles.login_container}>
            <TextInput
              placeholder="Login.."
              style={styles.input}
              onChangeText={(e) => setvalue(e.trim())}
              value={text}
            />
            <TouchableOpacity onPress={ft_search} style={styles.button}>
              <Text> Search </Text>
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
