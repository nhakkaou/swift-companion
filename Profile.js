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
// import { ProgressBar } from 'react-native-paper';
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
        <Image src={test.image_url} style={styles.img} />
        <View style={{ backgroundColor: "black", opacity: "80%", padding: 20 }}>
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
          <Text style={styles.inStyle}>wallet</Text>
          <Text style={styles.textStyle}>{test.wallet}</Text>
          <Text style={styles.inStyle}>correction point</Text>
          <Text style={styles.textStyle}>{test.correction_point}</Text>
        </View>
      </ImageBackground>

      {/* <ProgressBar progress={} color={}/> */}

      <View style={{ flex: 2, borderColor: "black" }}>
        <Chart />
      </View>
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
    fontSize: 29,
    lineHeight: 50,
    fontWeight: "bold",
    color: "yellow",
    textAlign: "center",
  },
  nameStyle: {
    color: "white",
    textAlign: "center",
    lineHeight: 30,
    fontFamily: "Futura Medium",
    fontSize: 22,
  },
  textStyle: {
    color: "white",
    textAlign: "right",
    lineHeight: 30,
    fontFamily: "Futura Medium",
    fontSize: 22,
  },
  img: {
    width: 100,
    height: 100,
  },
  inStyle: {
    color: "#A061D1",
    textAlign: "left",
    lineHeight: 30,
    fontFamily: "Futura Medium",
    fontSize: 22,
  },
});

export default Flex;
