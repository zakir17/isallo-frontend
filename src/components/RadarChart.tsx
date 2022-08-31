import "./PieChart.css";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import Submission from "../models/Submission";

interface Props {
  chartData: any;
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const PieChart = ({ chartData }: Props) => {
  return (
    <div style={{ width: "500px" }}>
      <Radar data={chartData}></Radar>
    </div>
  );
};

export default PieChart;
