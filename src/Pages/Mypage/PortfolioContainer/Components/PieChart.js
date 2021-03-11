import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import configObj from "../../../../utils/configObj";
import styled from "styled-components";

function PieChart(props) {
  return (
    <ChartContainer>
      <HighchartsReact
        highcharts={Highcharts}
        options={configObj}
        containerProps={{ style: { width: "300px", height: "360px" } }}
      />
    </ChartContainer>
  );
}

export default PieChart;

const ChartContainer = styled.div``;
