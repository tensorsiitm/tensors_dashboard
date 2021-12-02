import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Expense",
      data: [
        1223, 2323, 1313, 3114, 1341, 5135, 8666, 4232, 2534, 5445, 4545, 2323,
      ],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "Income",
      data: [
        8666, 4232, 2534, 5445, 4545, 2323, 1223, 2323, 1313, 3114, 1341, 5135,
      ],
      fill: false,
      backgroundColor: "#51EA38",
      borderColor: "#BDFEB3",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const LineChart = () => (
  //component used to insert the chart
  <div className="mb-3">
    <Line data={data} options={options} />
  </div>
);

export default LineChart;
