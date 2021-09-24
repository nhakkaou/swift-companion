import React from "react";
import { View } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const Chart = () => {
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    // backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    // backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true, // optional
  };
  // const data = [
  //   // {
  //   //   name: "Graphics",
  //   //   population: 21500000,
  //   //   color: "rgba(131, 167, 234, 1)",
  //   //   legendFontColor: "#7F7F7F",
  //   //   // legendFontSize: 15,
  //   // },
  //   // {
  //   //   name: "Algorithms & AI",
  //   //   population: 2800000,
  //   //   color: "#F00",
  //   //   legendFontColor: "#7F7F7F",
  //   //   // legendFontSize: 15,
  //   // },
  //   // {
  //   //   name: "Imperative programming",
  //   //   population: 527612,
  //   //   color: "red",
  //   //   legendFontColor: "#7F7F15",
  //   //   // legendFontSize: 15,
  //   // },
  //   // {
  //   //   name: "Rigor",
  //   //   population: 8538000,
  //   //   color: "#ffffff",
  //   //   legendFontColor: "#7F7F02",
  //   //   // legendFontSize: 15,
  //   // },
  //   // {
  //   //   name: "Unix",
  //   //   population: 11920000,
  //   //   color: "rgb(0, 0, 255)",
  //   //   legendFontColor: "#7F7F15",
  //   //   // legendFontSize: 15,
  //   // },
  //   // {
  //   //   name: "Unix",
  //   //   population: 11920000,
  //   //   color: "rgb(0, 0, 255)",
  //   //   legendFontColor: "#7F7F00",
  //   //   // legendFontSize: 15,
  //   // },
  //   // {
  //   //   name: "Adaptation & creativity",
  //   //   population: 11920000,
  //   //   color: "rgb(0, 0, 255)",
  //   //   legendFontColor: "#7F7F71",
  //   //   // legendFontSize: 15,
  //   // },
  //   {
  //     name: "Network & system administration",
  //     population: 11920000,
  //     color: "rgb(0, 0, 255)",
  //     legendFontColor: "#7F7F74",
  //     // legendFontSize: 15,
  //   },
  //   {
  //     name: "Organization",
  //     population: 11920000,
  //     color: "rgb(0, 0, 255)",
  //     legendFontColor: "#7F7F70",
  //     // legendFontSize: 15,
  //   },
  //   {
  //     name: "Technology integration",
  //     population: 11920000,
  //     color: "rgb(0, 0, 255)",
  //     legendFontColor: "#7F7F78",
  //     // legendFontSize: 15,
  //   },
  //   {
  //     name: "Company experience",
  //     population: 11920000,
  //     color: "rgb(0, 0, 255)",
  //     legendFontColor: "#7F7F75",
  //     // legendFontSize: 15,
  //   },
  // ];
  const data = {
    labels: [
      "Graphics",
      "Algorithms & AI",
      "Imperative programming",
      "Rigor",
      "Unix",
      "Adaptation & creativity",
      "Network & system administration",
      "Organization",
      "Technology integration",
      "Company experience",
    ],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 7, 8, 9, 15, 11],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 1, // optional
      },
    ],
  };
  return (
    <View style={{ flex: 1 }}>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        beizer
      />
    </View>
  );
};

export default Chart;
