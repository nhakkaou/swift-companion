import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  ProgressBarAndroid,
  ScrollView,
} from "react-native";

import { Avatar } from "react-native-paper";
import result from "./test.json";
import coalition from "./coallition.json";
const Flex = ({ route }) => {
  // const { result, coalition } = route.params;
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
  console.log(coalition.image_url);
  const image = {
    uri: `${result?.image_url}`,
  };
  const cover = {
    uri: `${coalition?.cover_url}`,
  };
  const img_coallition = {
    uri: `${coalition.image_url}`,
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={[
            styles.container,
            {
              flexDirection: "column",
              flex: 1,
              // position: "relative",
            },
          ]}
        >
          {result ? (
            <>
              <StatusBar
                animated={true}
                backgroundColor={coalition?.color}
                hidden={false}
              />

              <ImageBackground
                source={cover}
                resizeMode="cover"
                style={styles.image}
              >
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 20,
                  }}
                >
                  <View style={coalition_style(coalition?.color)}>
                    <Image
                      source={img_coallition}
                      style={styles.img_coallition}
                    />
                  </View>
                  <Text style={titleText(coalition?.color, "500", 14)}>
                    {coalition?.name}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <Avatar.Image
                    size={150}
                    source={{ uri: `${result.image_url}` }}
                    style={styles.img}
                  />
                </View>
              </ImageBackground>
              <Text style={titleText(coalition?.color)}>{result?.login}</Text>
              <Text style={styles.nameStyle}>
                {result?.first_name} {result?.last_name}
              </Text>

              <View
                style={{
                  padding: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "stretch",
                }}
              >
                <Text style={inStyle(coalition?.color)}>Grade</Text>
                <Text style={styles.textStyle}>
                  {result.cursus_users[0].grade}
                </Text>
              </View>
              <View
                style={{
                  padding: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "stretch",
                }}
              >
                <Text style={inStyle(coalition.color)}>Email</Text>
                <Text style={styles.textStyle}>{result.email}</Text>
              </View>
              <View
                style={{
                  padding: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "stretch",
                }}
              >
                <Text style={inStyle(coalition?.color)}>Phone</Text>
                <Text style={styles.textStyle}>{result?.phone}</Text>
              </View>
              <View
                style={{
                  padding: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "stretch",
                }}
              >
                <Text style={inStyle(coalition.color)}>Wallet</Text>
                <Text style={styles.textStyle}>{result?.wallet}</Text>
              </View>
              <View
                style={{
                  padding: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "stretch",
                }}
              >
                <Text style={inStyle(coalition.color)}>Correction point</Text>
                <Text style={styles.textStyle}>{result.correction_point}</Text>
              </View>
              <View
                style={{
                  padding: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "stretch",
                }}
              >
                <Text style={inStyle(coalition.color)}>Level</Text>
                <Text style={styles.textStyle}>
                  {result.cursus_users[0].level}
                </Text>
              </View>

              <View
                style={{ width: "100%", padding: 20, alignItems: "center" }}
              >
                {result.cursus_users[0].skills.map((el, key) => {
                  return (
                    <>
                      <Text
                        key={key}
                        style={titleText("#ffffff", "normal", 15)}
                      >
                        {el.name}
                      </Text>
                      <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        // progress={`0${el.level.toString().match(/.\d+/g)}`}
                        progress={0.7}
                        color={coalition.color}
                      />
                    </>
                  );
                })}
              </View>
            </>
          ) : (
            ""
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  image: {
    // flex: 1,
    justifyContent: "center",
    width: "100%",
    height: 250,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
    // marginTop: 10,
    // marginBottom: 10
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
  img_coallition: {
    width: 50,
    height: 50,
  },
});

export default Flex;
