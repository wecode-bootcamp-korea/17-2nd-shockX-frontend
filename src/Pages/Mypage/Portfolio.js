/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ChartsContainer from "./PortfolioContainer/ChartsContainer";
import HeaderZone from "./PortfolioContainer/HeaderZone";
import TotalContainer from "./PortfolioContainer/TotalContainer";
import ListContainer from "./PortfolioContainer/ListContainer";
import DataFunction from "./PortfolioContainer/Components/DataFunction";
// import PortfolioData from "../../../public/Data/PortfolioData.json";
import { PORTFOLIOAPI } from "../../Config";
import configObj from "../../utils/configObj";

function Portfolio(props) {
  const [portfolioData, setPortfolioData] = useState([]);
  const getPortfolioData = () => {
    fetch("./Data/PortfolioData.json")
      .then(res => res.json())
      .then(res => setPortfolioData(res));
  };
  // const getPortfolioData = () => {
  //   fetch(`${PORTFOLIOAPI}`, {
  //     method: "GET",
  //     headers: {
  //       Authorization: localStorage.getItem(""),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => setPortfolioData(res));
  // };
  useEffect(() => {
    getPortfolioData();
  }, []);

  return (
    <PortfolioPage>
      <ASIDE />
      <PortfolioContainer>
        <HeaderZone />
        <ChartZone>
          {/* <configObj data={portfolioData} />
          <DataFunction data={portfolioData} /> */}
          <ChartsContainer data={portfolioData} />
          <TotalContainer data={portfolioData} />
        </ChartZone>
        <ListContainer data={portfolioData} />
      </PortfolioContainer>
    </PortfolioPage>
  );
}

export default Portfolio;

const PortfolioPage = styled.div`
  ${({ theme }) => theme.flexCenter}
`;
const ASIDE = styled.div`
  width: 265px;
  background-color: lightgray;
`;
const ChartZone = styled.div`
  display: flex;
`;
const PortfolioContainer = styled.div`
  width: 1152px;
  margin: 0 auto;
  padding: 16px 32px;
`;
