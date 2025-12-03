import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function DoughnutWithLabels() {
  const data = {
    labels: ["2020","2021","2022", "2023", "2024" , "2025"],
    datasets: [
      {
        data: [50,53,58, 68, 83 , 121],
backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        color: "#000",
        font: {
          size: 12,
          weight: "400",
        },
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}\n${value} ta`;
        },
        anchor: "center",
        align: "center",
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default DoughnutWithLabels;