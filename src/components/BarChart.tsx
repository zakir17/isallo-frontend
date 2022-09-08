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
