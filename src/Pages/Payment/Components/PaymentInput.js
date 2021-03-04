import React, { useState } from "react";
import styled from "styled-components";
import MinWarningMsg from "./MinWarningMsg";
import NotAvailable from "./NotAvailable";

const PaymentInput = ({
  format,
  messageHandler,
  handleInputNum,
  isPlace,
  isBuy,
  messageText,
  high,
  low,
  notAvailableProps,
}) => {
  const [inputNum, setInputNum] = useState({ value: "" });
  const numOnChange = (e) => {
    const { value, name } = e.target;
    handleInputNum({ value: value, name: name });
    setInputNum({ value: value });
  };

  const highOrLow = isBuy === 0 ? low : high;
  const placeholderText = isBuy === 0 ? "Enter Bid" : "Enter Ask";
  const minBidCondition = isBuy === 0 && low !== 0;
  const minAskCondition = isBuy === 1 && high !== 0;
  const bidNotAvailable = isPlace === 1 && isBuy === 0 && low === 0;
  const askNotAvailable = isPlace === 1 && isBuy === 1 && high === 0;

  return (
    <InputWrapper>
      <EnterInput>
        $
        <NumberInputBox
          name={format[isPlace].inputNum}
          placeholder={placeholderText}
          onChange={numOnChange}
          value={isPlace === 0 ? inputNum.value : highOrLow}
          onKeyUp={messageHandler}
          type="number"
          min="0"
        />
      </EnterInput>
      <MinWarningMsg
        data={notAvailableProps}
        inputNum={inputNum}
        messageText={messageText}
        minBidCondition={minBidCondition}
        minAskCondition={minAskCondition}
      />
      <NotAvailable
        bidNotAvailable={bidNotAvailable}
        askNotAvailable={askNotAvailable}
        isBuy={isBuy}
        isPlace={isPlace}
        low={low}
        high={high}
      />
    </InputWrapper>
  );
};

export default PaymentInput;

const InputWrapper = styled.div`
  ${(props) => props.theme.flexColumnCenter};
`;

const EnterInput = styled.span`
  width: 360px;
  padding-left: 4px;
  font-size: 30px;
`;

const NumberInputBox = styled.input`
  margin-left: 15px;
  padding: 5px 5px 5px 15px;
  width: 320px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  height: 55px;
  font-size: 20px;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
