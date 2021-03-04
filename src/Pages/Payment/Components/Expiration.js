import React from "react";
import styled from "styled-components";

const Expiration = ({ isBuy, expirationNum, expirationHandler }) => {
  const bidOrAsk = isBuy === 0 ? "Bid " : "Ask ";
  return (
    <ExpirationContainer>
      <StopWatchIcon
        alt="stopwatch"
        src={process.env.PUBLIC_URL + `/images/Payment/stopwatch.svg`}
      />
      <ExpirationText>{bidOrAsk}Expiration:</ExpirationText>
      <SelectDays value={expirationNum} onChange={expirationHandler}>
        <option value="1">1 Days</option>
        <option value="3">3 Days</option>
        <option value="7">7 Days</option>
        <option value="14">14 Days</option>
        <option value="30">30 Days</option>
        <option value="60">60 Days</option>
      </SelectDays>
    </ExpirationContainer>
  );
};

export default Expiration;

const ExpirationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: #fafafa;
  width: 450px;
  height: 60px;
  border-radius: 3px;
`;

const StopWatchIcon = styled.img`
  margin: 0 10px;
  width: 16px;
`;

const ExpirationText = styled.p`
  margin: 0 10px 0 20px;
  font-size: 18px;
  color: black;
`;

const SelectDays = styled.select`
  margin-left: 50px;
  border: none;
  width: 200px;
  height: 50px;
  font-size: 18px;
  background-color: #fafafa;
`;
