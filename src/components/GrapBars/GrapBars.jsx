import styles from "./GrapBars.module.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

let beneficios = [72, 56, 20, 36, 80, 40, 30];
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

let misOptions = {
  responsive: true,
  animation: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: -25,
      max: 100,
    },
    x: {
      ticks: {
        color: "rgba(0,220,195",
      },
    },
  },
};

let miData = {
  labels: meses,
  datasets: [
    {
      label: "Beneficios",
      data: beneficios,
      backgroundColor: "rgba(0,220,195,0.5)",
    },
  ],
};

export default function GrapBars() {
  return (
    <>
      <Bar data={miData} options={misOptions} />
    </>
  );
}
