import React, { Component } from "react";
import styled from "styled-components";
import Ticker from "react-ticker";

class TickerComp extends Component {
  constructor() {
    super();
    this.state = {
      tickerList: [],
      tickerMove: true,
    };
  }
  componentDidMount() {
    fetch("Data/TickerData.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          tickerList: res,
        });
      });
  }

  stopTicker = () => {
    this.setState({ tickerMove: !this.state.tickerMove });
  };

  render() {
    return (
      <TickerWrapper onMouseOver={this.stopTicker}>
        <Ticker move={this.state.tickerMove} speed={15}>
          {({ index }) => (
            <>
              {this.state.tickerList.map((item) => {
                return (
                  <>
                    <TickerText key={item.id}>{item.text}</TickerText>
                    <TickerNum color={item.color}>
                      ${item.num.toLocaleString()}
                    </TickerNum>
                    {item.color === "green" && (
                      <TickerArrow color={item.color}>▲</TickerArrow>
                    )}
                    {item.color === "red" && (
                      <TickerArrow color={item.color}>▼</TickerArrow>
                    )}
                  </>
                );
              })}
            </>
          )}
        </Ticker>
      </TickerWrapper>
    );
  }
}

export default TickerComp;

const TickerText = styled.span`
  margin-left: 30px;
`;

const TickerNum = styled.span`
  margin-left: 10px;
  color: ${(props) => props.color};
`;

const TickerArrow = styled.span`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  font-size: ${(props) => (props.color === "green" ? "20px" : "17px")};
  color: ${(props) => props.color};
`;
const TickerWrapper = styled.footer`
  padding-top: 15px;
  height: 50px;
  background-color: black;
  color: white;
  font-size: 18px;
`;
