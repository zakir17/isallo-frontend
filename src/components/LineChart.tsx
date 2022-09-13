import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Line } from "react-chartjs-2";

interface Props {
  chartData: any;
  options: any;
}
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ chartData, options }: Props) => {
  return (
    <div>
      <Line
        data={chartData}
        options={options}
        width={"85%"}
        height={"65%"}
      ></Line>
    </div>
  );
};

export default LineChart;
