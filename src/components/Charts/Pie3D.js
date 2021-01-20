import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import Fusion from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFusioncharts.fcRoot(FusionCharts, charts, Fusion);

const Pie3D = (data) => {
  //console.log(data);
  // Resolves charts dependancy
  charts(FusionCharts);

  const dataSource = {
    chart: {
      caption: "Languages",
      numbersuffix: "%",
      decimals: 0,
      pieRadius: "55%",
      theme: "fusion"
    },
    data: data.data
  };
  return (
      <ReactFusioncharts
          type="pie3d"
          width="100%"
          height="100%"
          dataFormat="JSON"
          dataSource={dataSource}
      />
  );
};
export default Pie3D;
