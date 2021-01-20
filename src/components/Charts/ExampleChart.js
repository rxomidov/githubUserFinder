import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";


const ChartComponent = (data) => {
  //console.log(data);
  // Resolves charts dependancy
  charts(FusionCharts);

  const dataSource = {
    chart: {
      caption: "Languages",
      subcaption: "In MMbbl = One Million barrels",
      xaxisname: "Country",
      yaxisname: "Reserves (MMbbl)",
      numbersuffix: "%",
      theme: "gammel"
    },
    data: data.data
  };
    return (
        <ReactFusioncharts
            type="bar3d"
            width="100%"
            height="100%"
            dataFormat="JSON"
            dataSource={dataSource}
        />
    );
};
export default ChartComponent;
