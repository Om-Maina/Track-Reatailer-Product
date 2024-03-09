import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface StackedBarChartProps {
  data1: number[];
  data2: number[];
  labels: string[];
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({
  data1,
  data2,
  labels,
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartRef.current.width = 800;
        chartRef.current.height = 400;

        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels,
            datasets: [
              {
                label: "  Product Supplied",
                data: data1,
                backgroundColor: "#5A6D92",
                borderColor: "#5A6D92",
                borderWidth: 4,
                borderRadius: 5,
                maxBarThickness: 30,
              },
              {
                label: "  Product Ordered",
                data: data2,
                backgroundColor: "#5DA1D5",
                borderColor: "#5DA1D5",
                borderWidth: 4,
                borderRadius: 5,
                maxBarThickness: 30,
              },
            ],
          },
          options: {
            indexAxis: "y",
            scales: {
              x: {
                stacked: true,
                suggestedMin: 0,
                suggestedMax: 50000,
                position: "top",
                ticks: {
                  stepSize: 5000,
                  color: "#000",
                  font: {
                    family: "Poppins",
                    size: 13,
                    style: "normal",
                    weight: 400,
                    lineHeight: "normal",
                  },
                  callback: (value) => (value === 0 ? "Units" : value),
                },
              },
              y: {
                stacked: true,
                grid: {
                  display: false,
                },
                ticks: {
                  color: "#000",
                  font: {
                    size: 18,
                    style: "normal",
                    weight: 600,
                    lineHeight: "normal",
                  },
                },
              },
            },
            plugins: {
              legend: {
                position: "bottom",
                labels: {
                  boxWidth: 35,
                  boxHeight: 25,
                  padding: 50,
                  color: "#000",
                  font: {
                    size: 22,
                    style: "normal",
                    weight: 600,
                    lineHeight: "normal",
                  },
                },
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data1, data2, labels]);

  return <canvas ref={chartRef} style={{ width: "100%" }} />;
};

export default StackedBarChart;
