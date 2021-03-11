import React from "react";
import PieChart from "./Components/PieChart";
import TapMenu from "./Components/TapMenu";
import styled from "styled-components";

function ChartsContainer(props) {
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
  background-color: pink;
`;
