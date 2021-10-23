import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
} from "react-native";
import { Icon } from "react-native-elements";
import { SvgUri } from "react-native-svg";
import { Avatar, ProgressBar } from "react-native-paper";
import ModalDropdown from "react-native-modal-dropdown";
const Profile = ({ route, rslt, dark }) => {
  let { result, coalition } = rslt;
  const [value, setvalue] = React.useState(0);
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
  function titleText(color = "#ffffff", bold = "bold", size = 19) {
    return {
      fontSize: size,
      fontWeight: bold,
      color: color,
    };
  }
  coalition = coalition.length > 0 ? coalition[0] : coalition;
  let arr = [];
  result?.cursus_users.map((el, key) => arr.push(el.cursus.name));
  const cover = {
    uri: `${coalition?.cover_url}`,
  };
  const img_coallition = {
    uri: `${coalition?.image_url}`,
  };
  const renderItem = ({ item }) => {
    return (
      <View key={item.id}>
        <Text
          style={[
            titleText(!dark ? "#000" : "#ffffff", "normal", 15),
            { textAlign: "center" },
          ]}
        >
          {item.name}
        </Text>
        <ProgressBar
          progress={item.level / 10}
          // progress={0.6}
          color={coalition.color}
          style={{ width: 250 }}
        />
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flexDirection: "column",
            flex: 1,
          }}
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
                  <View
                    style={[
                      coalition_style(coalition?.color),
                      {
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 5,
                      },
                    ]}
                  >
                    <SvgUri
                      uri={coalition?.image_url}
                      width={"100%"}
                      height={"100%"}
                      fill="#fff"
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
                    position: "relative",
                  }}
                >
                  <Avatar.Image
                    size={150}
                    source={{ uri: `${result.image_url}` }}
                    style={styles.img}
                  />

                  <Avatar.Text
                    size={19}
                    style={{
                      backgroundColor: result.location ? "#00A400" : "#606770",
                      position: "absolute",
                      top: "80%",
                      left: "59%",
                    }}
                  />
                </View>
                <ModalDropdown
                  options={arr}
                  animated={true}
                  defaultIndex={0}
                  onSelect={(e) => setvalue(e)}
                />
                {/* // <Icon type="font-awesome-5" name="sort-down" color="#000" /> */}
                {result?.location ? (
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "#fff",
                    }}
                  >
                    {result.location}
                  </Text>
                ) : (
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "#fff",
                    }}
                  >
                    unavailable
                  </Text>
                )}
              </ImageBackground>
              <Text
                style={[
                  titleText(coalition?.color),
                  { textAlign: "center", lineHeight: 50 },
                ]}
              >
                {result?.login}
              </Text>
              <Text
                style={[
                  titleText(!dark ? "#000" : "#ffffff"),
                  { textAlign: "center", lineHeight: 50 },
                ]}
              >
                {result?.first_name} {result?.last_name}
              </Text>

              {result.cursus_users[value]?.grade ? (
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
                  <Text
                    style={[
                      titleText(!dark ? "#000" : "#ffffff", "500", 14),
                      { textAlign: "right" },
                    ]}
                  >
                    {result.cursus_users[value]?.grade}
                  </Text>
                </View>
              ) : (
                <></>
              )}

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
                <Text
                  style={[
                    titleText(!dark ? "#000" : "#ffffff", "500", 14),
                    { textAlign: "right" },
                  ]}
                >
                  {result.email}
                </Text>
              </View>

              {result?.phone != "hidden" ? (
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
                  <Text
                    style={[
                      titleText(!dark ? "#000" : "#ffffff", "500", 14),
                      { textAlign: "right" },
                    ]}
                  >
                    {result?.phone}
                  </Text>
                </View>
              ) : (
                <></>
              )}
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
                <Text
                  style={[
                    titleText(!dark ? "#000" : "#ffffff", "500", 14),
                    { textAlign: "right" },
                  ]}
                >
                  {result?.wallet}
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
                <Text style={inStyle(coalition.color)}>Correction point</Text>
                <Text
                  style={[
                    titleText(!dark ? "#000" : "#ffffff", "500", 14),
                    { textAlign: "right" },
                  ]}
                >
                  {result.correction_point}
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
                <Text style={inStyle(coalition.color)}>Level</Text>
                <Text
                  style={[
                    titleText(!dark ? "#000" : "#ffffff", "500", 14),
                    { textAlign: "right" },
                  ]}
                >
                  {result.cursus_users[value]?.level.toFixed(2)}
                </Text>
              </View>

              <View
                style={{
                  width: "100%",
                  padding: 20,
                  alignItems: "center",
                  lineHeight: 10,
                }}
              >
                <FlatList
                  data={result.cursus_users[value]?.skills}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
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
});

export default Profile;
