import React from "react";
import BlackBtn from "./Components/BlackBtn";
import styled from "styled-components";

const HeaderZone = () => {
  return (
    <FlexBox>
      <HeaderText>Your Portfolio</HeaderText>
      <BlackBtn />
    </FlexBox>
  );
};

export default HeaderZone;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 12px;
  margin-bottom: 20px;
`;
const HeaderText = styled.h1`
  font-size: 24px;
  font-weight: 800;
`;
