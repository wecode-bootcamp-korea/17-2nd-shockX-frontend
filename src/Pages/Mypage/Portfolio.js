import React from "react";
import styled from "styled-components";
import ChartsContainer from "./PortfolioContainer/ChartsContainer";
import HeaderZone from "./PortfolioContainer/HeaderZone";
import TotalContainer from "./PortfolioContainer/TotalContainer";
import ListContainer from "./PortfolioContainer/ListContainer";

function Portfolio(props) {
  return (
    <PortfolioPage>
      <ASIDE />
      <PortfolioContainer>
        <HeaderZone />
        <ChartZone>
          <ChartsContainer />
          <TotalContainer />
        </ChartZone>
        <ListContainer />
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
