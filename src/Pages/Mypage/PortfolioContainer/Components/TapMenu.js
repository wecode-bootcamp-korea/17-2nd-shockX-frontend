import React from "react";
import styled from "styled-components";

function TapMenu(props) {
  return (
    <TapContainer>
      <TapButton>Basic</TapButton>
      <TapButton>Advanced</TapButton>
    </TapContainer>
  );
}

export default TapMenu;

const TapContainer = styled.div`
  border-bottom: 1px solid lightgray;
`;

const TapButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
`;
