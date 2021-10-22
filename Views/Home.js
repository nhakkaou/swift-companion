import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Switch,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Home = ({ navigation, set, theme, setTheme }) => {
  const [text, setvalue] = useState("");
  const [load, setLoad] = useState(false);
  const [token, setToken] = React.useState("");
  const uid =
    "8b3f2aa1e1b4e9ea2ed2399b3783dba79813b948c9ecbb9555f7927a7b530e0a";
  const client =
    "fdf4044597bc43b22cf442e825051dda952c834d1d16d8aebfdb6c223df3a37d";
  React.useEffect(() => {
    try {
      async function GetToken() {
        console.log("test");
        const token = await AsyncStorage.getItem("TOKEN");
        const date = await AsyncStorage.getItem("DATE");
        console.log(token, date);
        if (!token || !date || date > Date.now()) {
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
              console.log(tk.data);
              console.log(
                new Date(tk.data.created_at * 1000 + tk.data.expires_in * 1000)
              );
              await AsyncStorage.setItem("data", tk.data);
              // await AsyncStorage.setItem(

              // );
            })
            .catch((er) => console.log(er));
        } else setToken(token);
      }
      GetToken();
    } catch (er) {
      console.log(er);
    }
  }, []);
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
              console.log("rs", rs.length);
              set({ result: rs?.data, coalition: coalition?.data });
              navigation.navigate("Profile");
            });
        })
        .catch(() => {
          setLoad(false);
          alert("User Dosnt existe");
        });
  };
  return (
    <SafeAreaView
      style={{ backgroundColor: !theme ? "#FEF5ED" : "#000", flex: 1 }}
    >
      <View style={styles.Switch}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={theme ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setTheme(!theme)}
          value={!theme}
        />
      </View>
      <View style={styles.sousContainer}>
        <Image
          style={styles.logo}
          source={
            theme
              ? require("../assets/1337.png")
              : require("../assets/1337-black.png")
          }
        />
        {token && !load ? (
          <View style={styles.login_container}>
            <TextInput
              placeholder="Login.."
              style={[
                styles.input,
                {
                  backgroundColor: theme ? "white" : "#D3E4CD",
                  color: theme ? "#292D39" : "#000",
                },
              ]}
              onChangeText={(e) => setvalue(e.trim())}
              value={text}
            />
            <TouchableOpacity
              onPress={ft_search}
              style={[
                styles.button,
                { backgroundColor: theme ? "#292D39" : "#99A799" },
              ]}
            >
              <Text style={{ color: "#ffffff" }}> Search </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <ActivityIndicator size="large" color="#00ff00" />
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sousContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 250,
    height: 30,
    borderRadius: 1.5,
  },
  logo: {
    width: 200,
    height: 200,
  },
  button: {
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
