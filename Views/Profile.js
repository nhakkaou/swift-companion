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

const Flex = ({ route }) => {
  const { result, coalition } = route.params;
  function coalition_style(bgcolor = "none") {
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
      fontWeight: "500",
      fontSize: 14,
    };
  }
  function titleText(color = "#000", bold = "bold", size = 19) {
    return {
      fontSize: size,
      lineHeight: 50,
      fontWeight: bold,
      color: color,
      textAlign: "center",
    };
  }
  console.log(coalition[0]?.color);
  const image = {
    uri: `${result?.image_url}`,
  };
  const cover = {
    uri: `${coalition[0]?.cover_url}`,
  };
  const img_coallition = {
    uri: `${coalition[0]?.image_url}`,
  };
  return (
    <SafeAreaView>
      <View
        style={[
          styles.container,
          {
            flexDirection: "column",
            flex: 1,
          },
        ]}
      >
        {result ? (
          <>
            <StatusBar
              animated={true}
              backgroundColor={coalition[0]?.color}
              hidden={false}
            />
            <ImageBackground
              source={cover}
              resizeMode="cover"
              style={styles.image}
            >
              <View style={{ flexDirection: "row", flexWrap: "wrap", top: 0 }}>
                <View>
                  <View style={coalition_style(coalition[0]?.color)}>
                    <Image
                      source={img_coallition}
                      style={styles.img_coallition}
                    />
                  </View>
                  <Text style={titleText(coalition[0]?.color, "500", 14)}>
                    {coalition[0]?.name}
                  </Text>
                </View>
                <Avatar.Image
                  size={150}
                  source={{ uri: `${result.image_url}` }}
                  style={styles.img}
                />
              </View>
            </ImageBackground>
            {/* <View style={{ padding: 20 }}>
              <Text style={titleText(coalition[0]?.color)}>
                {result?.login}
              </Text>
              <Text style={styles.nameStyle}>
                {result?.first_name} {result?.last_name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <Text style={inStyle(coalition[0]?.color)}>Grade</Text>
                <Text style={styles.textStyle}>
                  {result.cursus_users[0].grade}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <Text style={inStyle(coalition[0].color)}>Email</Text>
                <Text style={styles.textStyle}>{result.email}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <Text style={inStyle(coalition[0]?.color)}>Phone</Text>
                <Text style={styles.textStyle}>{result?.phone}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <Text style={inStyle(coalition[0].color)}>Wallet</Text>
                <Text style={styles.textStyle}>{result?.wallet}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <Text style={inStyle(coalition[0].color)}>
                  Correction point
                </Text>
                <Text style={styles.textStyle}>{result.correction_point}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <Text style={inStyle(coalition[0].color)}>Level</Text>
                <Text style={styles.textStyle}>
                  {result.cursus_users[0].level}
                </Text>
              </View>
            </View> */}
            {/* <ProgressBar
              progress={
                "0" + result.cursus_users[0].level.toString().match(/.\d+/g)
              }
              color={`${coalition[0].color}`}
              style={{ height: 20, backgroundColor: "white" }}
            ></ProgressBar> */}
          </>
        ) : (
          ""
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  image: {
    flex: 1,
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
    fontWeight: "500",
    fontSize: 14,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
    margin: "auto",
    marginTop: 10,
    marginBottom: 10,
  },
  img_coallition: {
    width: 50,
    height: 50,
    margin: "auto",
  },
});

export default Flex;
