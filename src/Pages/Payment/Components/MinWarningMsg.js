import React from "react";
import styled from "styled-components";

const MinWarningMsg = ({
  data,
  inputNum,
  messageText,
  minBidCondition,
  minAskCondition,
}) => {
  return (
    <>
      {minBidCondition && (
        <WarningMsg>{inputNum.value ? messageText : data.bid}</WarningMsg>
      )}
      {minAskCondition && (
        <WarningMsg>{inputNum.value ? messageText : data.ask}</WarningMsg>
      )}
    </>
  );
};

export default MinWarningMsg;

const WarningMsg = styled.span`
  margin: 15px 0px 0px 75px;
  width: 360px;
  font-size: 15px;
  color: ${(props) => props.theme.colors.fontGray};
`;
