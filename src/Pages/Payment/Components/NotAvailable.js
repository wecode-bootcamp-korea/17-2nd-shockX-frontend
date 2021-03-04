import React from "react";
import styled from "styled-components";

const NotAvailable = ({
  bidNotAvailable,
  askNotAvailable,
  isBuy,
  low,
  high,
  isPlace,
}) => {
  return (
    <>
      {bidNotAvailable && (
        <NotAvailableText isBuy={isBuy}>
          Sorry. No Bids Available
        </NotAvailableText>
      )}
      {askNotAvailable && (
        <NotAvailableText isBuy={isBuy}>
          Sorry. No Asks Available
        </NotAvailableText>
      )}
    </>
  );
};

export default NotAvailable;

const NotAvailableText = styled.p`
  margin: 20px auto;
  font-size: 20px;
  color: ${(props) => (props.isBuy === 0 ? "#08a05c" : "#FF6060")};
`;
