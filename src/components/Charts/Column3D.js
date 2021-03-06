import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

import Fusion from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFusioncharts.fcRoot(FusionCharts, charts, Fusion);

const Column3D = (data) => {
  //console.log(data);
  // Resolves charts dependancy
  charts(FusionCharts);

  const dataSource = {
    chart: {
      caption: "Most Popular",
      yaxisName: "Stars",
      xaxisName: "Repos",
      yAxisNameFontSize: "16px",
      xAxisNameFontSize: "16px",
      theme: "fusion"
    },
    data: data.data
  };
  return (
      <ReactFusioncharts
          type="column3d"
          width="100%"
          height="100%"
          dataFormat="JSON"
          dataSource={dataSource}
      />
  );
};
export default Column3D;
