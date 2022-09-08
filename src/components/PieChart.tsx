import "./PieChart.css";
import { Pie } from "react-chartjs-2";
interface Props {
  cardData: number[];
  options: any;
}
const PieChart = ({ cardData, options }: Props) => {
  const userData = {
    labels: ["enjoyment", "sadness", "fear", "anger", "disgust"],
    datasets: [
      {
        label: "emotions",
        data: cardData,
        backgroundColor: [
          "rgb(243, 231, 165)",
          "rgb(110, 168, 211)",
          "rgb(64, 96, 93)",
          "rgb(194, 116, 108)",
          "rgb(235, 179, 155)",
        ],
      },
    ],
  };
  return (
    <div style={{ width: "200px", height: "200px" }}>
      <Pie data={userData} options={options}></Pie>
    </div>
  );
};

// import React from "react";
// import Chart from "chart.js/auto";
// import { Pie } from "react-chartjs-2";
// const labels = ["January", "February", "March", "April", "May", "June"];
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: "rgb(255, 99, 132)",
//
//       data: [0, 10, 5, 2, 20, 30, 45],
//     },
//   ],
// };
// const PieChart = () => {
//   return (
//     <div>
//       <Pie data={data} />
//     </div>
//   );
// };
export default PieChart;
