import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

import Candy from "fusioncharts/themes/fusioncharts.theme.candy";

ReactFusioncharts.fcRoot(FusionCharts, charts, Candy);

const Column3D = (data) => {
  //console.log(data);
  // Resolves charts dependancy
  charts(FusionCharts);

  const dataSource = {
    chart: {
      caption: "Stars Per Languages",
      decimals: 0,
      showPercentValues: 0,
      pieRadius: "55%",
      theme: "candy"
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
