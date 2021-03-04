import React, { Component } from "react";
import { ChartMockData } from "./MockData/Options";
import High from "./High";

export default class ChartData extends Component {
  constructor() {
    super();
    this.state = { ChartMockData };
  }
  render() {
    return <High data={this.state.data} />;
  }
}
