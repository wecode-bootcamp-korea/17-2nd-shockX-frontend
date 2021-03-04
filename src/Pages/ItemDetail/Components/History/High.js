import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Options } from "./MockData/Options";

class High extends Component {
  render() {
    return <HighchartsReact highcharts={Highcharts} options={Options} />;
  }
}
export default High;
