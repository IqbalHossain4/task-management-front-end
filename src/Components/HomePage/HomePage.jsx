import React, { useState } from "react";
import Chart from "react-apexcharts";
import useTask from "../../Hooks/useTask";

const HomePage = () => {
  const [storeTask] = useTask();
  var updateValue = parseInt(storeTask.length);
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
    <div className="w-75 mx-md-auto   ">
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
