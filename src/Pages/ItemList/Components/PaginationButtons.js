import React from "react";
import styled from "styled-components";
import DropdownIcon from "../Components/DropdownIcon";

const PaginationButtons = ({ fetchOffset }) => (
  <PageNationContainer>
    <DropdownIcon />
    <PageButton data-idx="0" onClick={fetchOffset}>
      1
    </PageButton>
    <PageButton data-idx="1" onClick={fetchOffset}>
      2
    </PageButton>
    <DropdownIcon />
  </PageNationContainer>
);

export default PaginationButtons;

const PageNationContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;

  svg {
    margin: 20px;
    transform: rotate(90deg);
  }
  svg:last-child {
    margin: 20px;
    transform: rotate(-90deg);
  }
`;

const PageButton = styled.button`
  width: 32px;
  height: 32px;
  margin: 5px;
`;
