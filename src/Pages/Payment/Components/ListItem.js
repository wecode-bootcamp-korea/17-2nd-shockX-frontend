import React from "react";
import styled from "styled-components";

const ListItem = ({ item, buyInput, sellInput }) => {
  const processingFee = Math.round(100 * buyInput * 0.03) / 100;
  const shippingFee = 13.95;
  const transactionFee = Math.round(100 * sellInput * 0.095) / 100;
  const paymentProc = Math.round(100 * sellInput * 0.03) / 100;
  return (
    <OneItem>
      <ItemLabel>{item.label}</ItemLabel>
      {item.label === "Processing Fee (3%)" && (
        <ItemLabel>${processingFee.toFixed(2)}</ItemLabel>
      )}
      {item.label === "Estimated Shipping ($13.95)" && (
        <ItemLabel>${shippingFee.toFixed(2)}</ItemLabel>
      )}
      {item.label === "Transaction Fee (9.5%)" && (
        <ItemLabel>${transactionFee.toFixed(2)}</ItemLabel>
      )}
      {item.label === "Payment Proc (3%)" && (
        <ItemLabel>${paymentProc.toFixed(2)}</ItemLabel>
      )}
    </OneItem>
  );
};

export default ListItem;

const OneItem = styled.li`
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
