import React from "react";
import Chart from "../Componenets/Chart";
import { View } from "react-native";
const Charts = ({ route }) => {
  return (
    <View style={{ flex: 2, borderColor: "black" }}>
      <Chart />
    </View>
  );
};

export default Charts;
