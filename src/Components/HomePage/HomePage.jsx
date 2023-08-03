import React, { useState } from "react";
import Chart from "react-apexcharts";
import useTask from "../../Hooks/useTask";

const HomePage = () => {
  const [storeTask] = useTask();
  var updateValue = parseInt(storeTask.length);

  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, updateValue],
      },
    ],
  });
  const options = {
    labels: ["Tasks"],
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
  };
  const calCulateValue = updateValue % 100;
  const series = [calCulateValue];

  return (
    <div className="d-md-flex w-75 mx-md-auto   ">
      <div>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={250}
          width={400}
        />
      </div>
      <div className="radialbar">
        <Chart
          options={options}
          series={series}
          type="radialBar"
          height="250"
        />
      </div>
    </div>
  );
};

export default HomePage;
