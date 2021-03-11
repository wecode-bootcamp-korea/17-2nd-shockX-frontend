import React from "react";
import styled from "styled-components";

const BlackBtn = () => {
  return <BlackButton>Add</BlackButton>;
};

export default BlackBtn;

const BlackButton = styled.button`
  padding: 16px;
  border-radius: 2px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
