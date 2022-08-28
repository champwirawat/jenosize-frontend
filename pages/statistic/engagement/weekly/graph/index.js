import Chart from "chart.js/auto";
import React, { useEffect, useRef } from "react";
import EngagementWeeklyLayout from "../../../../../layouts/EngagementWeeklyLayout";
import tailwindConfig from "../../../../../tailwind.config";

const random = () => Math.floor(Math.random() * 100) + 1;

const EngagementWeeklyGraph = ({ dataType }) => {
  const canvasEl = useRef(null);

  useEffect(() => {
    const ctx = canvasEl.current.getContext("2d");
    const weight = [
      random(),
      random(),
      random(),
      random(),
      random(),
      random(),
      random(),
      random(),
    ];
    const labels = ["10", "11", "12", "13", "14", "15", "16"];

    const config = {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "label",
            data: weight,
            fill: false,
            borderColor: tailwindConfig.theme.colors.primary["DEFAULT"],
            lineTension: 0.1,
            pointStyle: "circle",
          },
        ],
      },
      options: {
        responsive: true, // เพื่อกำหนดขนาดตามพื้นที่ของบล๊อค
        maintainAspectRatio: false, // เพื่อกำหนดขนาดตามพื้นที่ของบล๊อค
        plugins: {
          legend: {
            display: false,
            position: "top",
            labels: {
              usePointStyle: true,
              boxWidth: 5,
            },
          },
        },
        tooltips: {},
      },
    };

    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <>
      <div className="px-4 mt-4 text-center">
        <div className="h-60">
          <canvas id="myChart" ref={canvasEl} />
        </div>
      </div>
    </>
  );
};

EngagementWeeklyGraph.Layout = EngagementWeeklyLayout;
export default EngagementWeeklyGraph;
