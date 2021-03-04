import React from "react";
import styled from "styled-components";

const TotalPrice = ({ total, buyTotal, sellTotal, isBuy }) => {
  return (
    <TotalItem>
      <ItemLabel>{total.label}</ItemLabel>
      {isBuy === 0 ? (
        <ItemLabel>${buyTotal.toFixed(2)}</ItemLabel>
      ) : (
        <ItemLabel>${sellTotal.toFixed(2)}</ItemLabel>
      )}
    </TotalItem>
  );
};
export default TotalPrice;

const TotalItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0px auto 20px;
  padding: 15px 0px 0px;
  border-top: 1px dotted lightgray;
`;

const ItemLabel = styled.p`
  font-size: 15px;
`;
