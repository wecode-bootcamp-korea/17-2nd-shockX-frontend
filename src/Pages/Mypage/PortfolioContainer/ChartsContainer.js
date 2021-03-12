import React from "react";
import PieChart from "./Components/PieChart";
import TapMenu from "./Components/TapMenu";
import styled from "styled-components";
import DataFunction from "./Components/DataFunction";
import configObj from "../../../utils/configObj";

function ChartsContainer({ data }) {
  // console.log(Number(data.portfolio.length));
  return (
    <div>
      <TapMenu />
      <Container>
        <PieChart />
        <PieChart />
      </Container>
    </div>
  );
}

export default ChartsContainer;

const Container = styled.div`
  ${({ theme }) => theme.flexCenter}
  padding: 0 20px;
`;
