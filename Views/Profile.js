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

const Flex = ({ result }) => {
  function coalition_style(bgcolor = "#68BBE3") {
    return {
      backgroundColor: bgcolor,
      maxWidth: 60,
      maxHeight: 100,
      minWidth: 60,
      minHeight: 100,
      borderWidth: 2,
      borderColor: "transparent",
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
      flex: 0.15,
    };
  }
  function inStyle(color = "#A061D1") {
    return {
      color: color,
      textAlign: "left",

      fontSize: 14,
    };
  }
  function titleText(color = "#000") {
    return {
      fontSize: 19,
      lineHeight: 50,
      fontWeight: "bold",
      color: color,
      textAlign: "center",
    };
  }
  console.log(result.coalition.color);
  const image = {
    uri: `${result?.user.image_url}`,
  };
  const cover = {
    uri: `${result.coalition?.cover_url}`,
  };
  const img_coallition = {
    uri: `${result.coalition.image_url}`,
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
      <StatusBar
        animated={true}
        backgroundColor={result.coalition.color}
        hidden={false}
      />
      <ImageBackground source={cover} resizeMode="cover" style={styles.image}>
        <View style={{ flexDirection: "row", flexWrap: "wrap", top: 0 }}>
          <View style={coalition_style(result.coalition.color)}>
            <Image source={img_coallition} style={styles.img_coallition} />
          </View>
          <Avatar.Image
            size={200}
            source={{ uri: `${result.user.image_url}` }}
            style={styles.img}
          />
        </View>
        <View style={{ backgroundColor: "black", opacity: "70%", padding: 20 }}>
          <Text style={titleText(result.coalition.color)}>
            {result.user.login}
          </Text>
          <Text style={styles.nameStyle}>
            {result.user.first_name} {result.user.last_name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Text style={inStyle(result.coalition.color)}>Grade</Text>
            <Text style={styles.textStyle}>
              {result.user.cursus_users[0].grade}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Text style={inStyle(result.coalition.color)}>Email</Text>
            <Text style={styles.textStyle}>{result.user.email}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Text style={inStyle(result.coalition.color)}>Phone</Text>
            <Text style={styles.textStyle}>{result.user.phone}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Text style={inStyle(result.coalition.color)}>Wallet</Text>
            <Text style={styles.textStyle}>{result.user.wallet}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Text style={inStyle(result.coalition.color)}>
              Correction point
            </Text>
            <Text style={styles.textStyle}>{result.user.correction_point}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Text style={inStyle(result.coalition.color)}>Level</Text>
            <Text style={styles.textStyle}>
              {result.user.cursus_users[0].level}
            </Text>
          </View>
        </View>
      </ImageBackground>

      <ProgressBar
        progress={
          "0" + result.user.cursus_users[0].level.toString().match(/.\d+/g)
        }
        color={result.coalition.color}
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
  nameStyle: {
    color: "white",
    textAlign: "center",

    fontSize: 17,
  },
  textStyle: {
    color: "white",
    textAlign: "right",

    fontSize: 14,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: "auto",
  },
  img_coallition: {
    width: 50,
    height: 50,
    margin: "auto",
  },
});

export default Flex;
