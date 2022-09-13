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
  options: any;
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const PieChart = ({ chartData, options }: Props) => {
  return (
    <div style={{ width: "100%" }}>
      <Radar
        data={chartData}
        options={options}
        width={"80%"}
        height={"80%"}
      ></Radar>
    </div>
  );
};

export default PieChart;
