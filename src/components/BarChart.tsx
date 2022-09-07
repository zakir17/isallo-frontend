import { Bar } from "react-chartjs-2";
import "./BarChart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
interface Props {
  chartData: number[];
}
const BarChart = ({ chartData }: Props) => {
  const userData = {
    labels: [
      "Satisfaction",
      "Contentment",
      "Joy",
      "Relief",
      "Hopelessness",
      "Loneliness",
      "Disappointment",
      "Gloomy",
      "Anxiety",
      "Stressed",
      "Worried",
      "Doubtful",
      "Mad",
      "Annoyed",
      "Irritation",
      "Frustration",
      "Withdrawn",
      "Uncomfortable",
      "Offended",
      "Disturbed",
    ],
    datasets: [
      {
        label: "Emotions",
        data: chartData,
        backgroundColor: [
          "rgb(243, 231, 165)",
          "rgb(243, 231, 165)",
          "rgb(243, 231, 165)",
          "rgb(243, 231, 165)",
          "rgb(110, 168, 211)",
          "rgb(110, 168, 211)",
          "rgb(110, 168, 211)",
          "rgb(110, 168, 211)",
          "rgb(64, 96, 93)",
          "rgb(64, 96, 93)",
          "rgb(64, 96, 93)",
          "rgb(64, 96, 93)",
          "rgb(194, 116, 108)",
          "rgb(194, 116, 108)",
          "rgb(194, 116, 108)",
          "rgb(194, 116, 108)",
          "rgb(235, 179, 155)",
          "rgb(235, 179, 155)",
          "rgb(235, 179, 155)",
          "rgb(235, 179, 155)",
        ],
      },
    ],
  };
  return (
    <div>
      <Bar
        data={userData}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              max: 10,
            },
          },
        }}
      ></Bar>
    </div>
  );
};

export default BarChart;

// {
//   label: "Joy",
//   data: [chartData[2]],
//   backgroundColor: "rgb(243, 231, 165)",
// },
// {
//   label: "Relief",
//   data: [chartData[3]],
//   backgroundColor: "rgb(243, 231, 165)",
// },
// {
//   label: "Hopelessness",
//   data: [chartData[4]],
//   backgroundColor: "rgb(110, 168, 211)",
// },
// {
//   label: "Loneliness",
//   data: [chartData[5]],
//   backgroundColor: "rgb(110, 168, 211)",
// },
// {
//   label: "Disappointment",
//   data: [chartData[6]],
//   backgroundColor: "rgb(110, 168, 211)",
// },
// {
//   label: "Gloomy",
//   data: [chartData[7]],
//   backgroundColor: "rgb(110, 168, 211)",
// },
// {
//   label: "Fear",
//   data: [chartData[8], chartData[9], chartData[10], chartData[11]],
//   backgroundColor: "rgb(64, 96, 93)",
// },
// {
//   label: "Anger",
//   data: [chartData[12], chartData[13], chartData[14], chartData[15]],
//   backgroundColor: "rgb(194, 116, 108)",
// },
// {
//   label: "Disgust",
//   data: [chartData[16], chartData[17], chartData[18], chartData[19]],
//   backgroundColor: "rgb(235, 179, 155)",
// },
