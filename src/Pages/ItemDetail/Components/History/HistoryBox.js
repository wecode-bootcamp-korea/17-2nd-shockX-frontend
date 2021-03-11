import React from "react";
import styled from "styled-components";

function HistoryBox({ sizes }) {
  return (
    <Container>
      <HistoryHead>12 MONTH HISTORICAL</HistoryHead>
      <Box>
        <h1># OF SALES</h1>
        <p>{sizes?.total_sales}</p>
      </Box>
      <Box>
        <h1>PRICE PREMIUM</h1>
        {sizes?.price_premium > 0 ? (
          <p>{sizes?.price_premium}%</p>
        ) : (
          <p className="red">{sizes?.price_premium}%</p>
        )}
      </Box>
      <Box>
        <h1>AVERAGE SALE PRICE</h1>
        <p>{sizes?.average_sale_price}</p>
      </Box>
    </Container>
  );
}

export default HistoryBox;

const Container = styled.div`
  width: 360px;
  height: 100%;
  font-size: 16px;
  font-weight: 600;
`;

const HistoryHead = styled.div`
  ${({ theme }) => theme.flexCenter};
  height: 84px;
`;

const Box = styled.div`
  padding-top: 20px;
  flex-direction: 1;
  border-top: 1px solid lightgray;
  p,
  h1 {
    text-align: center;
    margin: 20px;
  }
  h1 {
    font-size: 24px;
    font-weight: 700;
  }
  p {
    font-size: 36px;
    color: #08a05c;
    padding-bottom: 22px;
  }
  .red {
    color: #ff6060;
  }
`;
