import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import test from "./test.json";
import coallition from "./coallition.json";
import Chart from "./Componenets/Chart";
const Flex = () => {
  const image = {
    uri: `${test.image_url}`,
  };
  const cover = {
    uri: `${coallition.cover_url}`,
  };
  return (
    // <SafeAreaView>
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
          flex: 1,
        },
      ]}
    >
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={false} />
      <ImageBackground source={cover} resizeMode="cover" style={styles.image}>
        <Image source={{ uri: `${test.image_url}` }} style={styles.img} />
        <View style={{ backgroundColor: "black", opacity: "70%", padding: 20 }}>
          <Text style={styles.titleText}>{test.login}</Text>
          <Text style={styles.nameStyle}>
            {test.first_name} {test.last_name}
          </Text>
          <Text style={styles.inStyle}>Grade</Text>
          <Text style={styles.textStyle}>{test.cursus_users[0].grade}</Text>
          <Text style={styles.inStyle}>Email</Text>
          <Text style={styles.textStyle}>{test.email}</Text>
          <Text style={styles.inStyle}>Phone</Text>
          <Text style={styles.textStyle}>{test.phone}</Text>
          <Text style={styles.inStyle}>Wallet</Text>
          <Text style={styles.textStyle}>{test.wallet}</Text>
          <Text style={styles.inStyle}>Correction point</Text>
          <Text style={styles.textStyle}>{test.correction_point}</Text>
          <Text style={styles.inStyle}>Level</Text>
          <Text style={styles.textStyle}>{test.cursus_users[0].level}</Text>
        </View>
      </ImageBackground>

      <ProgressBar
        progress={"0" + test.cursus_users[0].level.toString().match(/.\d+/g)}
        color={coallition.color}
        style={{ height: 20, backgroundColor: "none" }}
      ></ProgressBar>

      {/* <View style={{ flex: 2, borderColor: "black" }}>
        <Chart />
      </View> */}
      {/* </SafeAreaView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    flex: 2,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 19,
    lineHeight: 50,
    fontWeight: "bold",
    color: "yellow",
    textAlign: "center",
  },
  nameStyle: {
    color: "white",
    textAlign: "center",

    fontFamily: "Futura Medium",
    fontSize: 17,
  },
  textStyle: {
    color: "white",
    textAlign: "right",
    fontFamily: "Futura Medium",
    fontSize: 14,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    margin: "auto",
  },
  inStyle: {
    color: "#A061D1",
    textAlign: "left",
    fontFamily: "Futura Medium",
    fontSize: 14,
  },
});

export default Flex;
