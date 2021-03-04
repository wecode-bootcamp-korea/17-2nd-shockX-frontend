import React from "react";
import styled, { keyframes } from "styled-components";
import PaymentTab from "./PaymentTab";
import PaymentInput from "./PaymentInput";
import ListItem from "./ListItem";
import TotalPrice from "./TotalPrice";

const PaymentDetail = ({
  data,
  format,
  isBuy,
  isPlace,
  changeTabHandler,
  handleInputNum,
  messageHandler,
  messageText,
  isShowAddFeeList,
  buyInput,
  sellInput,
  buyTotal,
  sellTotal,
  notAvailableProps,
}) => {
  const addFeeList = format[isPlace].addFee;
  return (
    <PaymentContainer>
      <PaymentTab
        changeTabHandler={changeTabHandler}
        isPlace={isPlace}
        isBuy={isBuy}
        format={format}
      />
      <PaymentInput
        high={data.highestBid}
        low={data.lowestAsk}
        messageHandler={messageHandler}
        handleInputNum={handleInputNum}
        isPlace={isPlace}
        isBuy={isBuy}
        format={format}
        messageText={messageText}
        notAvailableProps={notAvailableProps}
      />
      {isShowAddFeeList ? (
        <PaymentList>
          {addFeeList.map((el, idx) => {
            return (
              <ListItem
                key={idx}
                item={el}
                buyInput={buyInput}
                sellInput={sellInput}
                total={format[isPlace].total}
              />
            );
          })}
          <TotalPrice
            total={format[isPlace].total}
            isBuy={isBuy}
            buyTotal={buyTotal}
            sellTotal={sellTotal}
          />
        </PaymentList>
      ) : (
        <PressEnter isBuy={isBuy}>
          Please Enter Your Value And Press Enter To Continue!
        </PressEnter>
      )}
    </PaymentContainer>
  );
};

export default PaymentDetail;

const PaymentContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  padding-bottom: 30px;
  width: 500px;
  min-height: 300px;
`;

const PaymentList = styled.ul`
  margin-top: 40px;
  width: 350px;
  list-style: none;
`;

const blinkingEffect = keyframes`
50%{
    opacity:0;
  }
`;

const PressEnter = styled.p`
  animation: ${blinkingEffect} 1s linear infinite;
  margin-top: 30px;
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => (props.isBuy === 0 ? "#08a05c" : "#FF6060")};
`;
