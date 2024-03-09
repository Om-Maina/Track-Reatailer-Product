import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import "./Donut.css";

interface DonutChartProps {
  data: number[];
  labels: string[];
}

export const DonutChart: React.FC<DonutChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const total = data.reduce((acc, value) => acc + value, 0);

      const option = {
        graphic: [
          {
            type: "text",
            left: "center",
            top: "center",
            style: {
              text:
                "₹" +
                total.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
              textAlign: "center",
              fill: "#0078D4",
              fontSize: 20,
            },
          },
        ],
        series: [
          {
            type: "pie",
            radius: ["50%", "80%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "outside",
              alignTo: "labelLine",
            },
            labelLine: {
              show: false,
            },
            data: labels.map((label, index) => ({
              value: data[index],
              name: label,
              itemStyle: {
                color: index === 0 ? "#5271FF" : "#FF5757",
                emphasis: {
                  scale: false,
                },
              },
            })),
          },
        ],
      };

      chart.setOption(option);

      // Cleanup on unmount
      return () => {
        chart.dispose();
      };
    }
  }, [data, labels]);

  return (
    <div
      ref={chartRef}
      style={{ width: "90%", height: "320px", marginLeft: "1%" }}
    />
  );
};

export default DonutChart;
