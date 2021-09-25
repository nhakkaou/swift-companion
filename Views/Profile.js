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
import { Avatar } from "react-native-paper";
import test from "./test.json";
import coallition from "./coallition.json";

const Flex = () => {
  const image = {
    uri: `${test.image_url}`,
  };
  const cover = {
    uri: `${coallition.cover_url}`,
  };
  const img_coallition = {
    uri: `${coallition.image_url}`,
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
        <View style={{ flexDirection: "row", flexWrap: "wrap", top: 0 }}>
          <View style={styles.coallition}>
            <Image source={img_coallition} style={styles.img_coallition} />
          </View>
          <Avatar.Image
            size={200}
            source={{ uri: `${test.image_url}` }}
            style={styles.img}
          />
        </View>
        <View style={{ backgroundColor: "black", opacity: "70%", padding: 20 }}>
          <Text style={styles.titleText}>{test.login}</Text>
          <Text style={styles.nameStyle}>
            {test.first_name} {test.last_name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.inStyle}>Grade</Text>
            <Text style={styles.textStyle}>{test.cursus_users[0].grade}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.inStyle}>Email</Text>
            <Text style={styles.textStyle}>{test.email}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.inStyle}>Phone</Text>
            <Text style={styles.textStyle}>{test.phone}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.inStyle}>Wallet</Text>
            <Text style={styles.textStyle}>{test.wallet}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.inStyle}>Correction point</Text>
            <Text style={styles.textStyle}>{test.correction_point}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.inStyle}>Level</Text>
            <Text style={styles.textStyle}>{test.cursus_users[0].level}</Text>
          </View>
        </View>
      </ImageBackground>

      <ProgressBar
        progress={"0" + test.cursus_users[0].level.toString().match(/.\d+/g)}
        color={coallition.color}
        style={{ height: 20, backgroundColor: "none" }}
      ></ProgressBar>
      {/* </SafeAreaView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
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
    borderRadius: 100,
    margin: "auto",
  },
  inStyle: {
    color: "#A061D1",
    textAlign: "left",
    fontFamily: "Futura Medium",
    fontSize: 14,
  },
  coallition: {
    backgroundColor: "#A061D1",
    maxWidth: 60,
    maxHeight: 100,
    minWidth: 60,
    minHeight: 100,
    borderWidth: 2,
    borderColor: "transparent",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    flex: 0.15,
  },
  img_coallition: {
    width: 50,
    height: 50,
    margin: "auto",
  },
});

export default Flex;
