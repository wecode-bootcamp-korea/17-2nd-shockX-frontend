import React from "react";
import styled from "styled-components";

const PaymentFooter = ({
  isBuy,
  changeIdxHanlder,
  currentIdx,
  sumbitPaymentInfo,
}) => (
  <PaymentFooterBar>
    <ButtonContainer>
      <CancelBtn>Cancel</CancelBtn>
      {
        <NextBtn
          onClick={
            currentIdx === 2
              ? sumbitPaymentInfo
              : () => changeIdxHanlder(currentIdx)
          }
          color={isBuy === 0 ? "#08a05c" : "#FF6060"}
        >
          {currentIdx === 2 ? "Submit" : "Next"}
        </NextBtn>
      }
    </ButtonContainer>
  </PaymentFooterBar>
);

export default PaymentFooter;

const PaymentFooterBar = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: sticky;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: white;
  width: 100%;
  height: 80px;
  border-top: 1px solid lightgray;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 38px;
  width: 35%;
  height: 100%;
`;

const CancelBtn = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid lightgrey;
  border-radius: 3px;
`;

const NextBtn = styled.button`
  width: 100px;
  background-color: ${(props) => props.color};
  height: 50px;
  border-radius: 3px;
  color: white;
`;
