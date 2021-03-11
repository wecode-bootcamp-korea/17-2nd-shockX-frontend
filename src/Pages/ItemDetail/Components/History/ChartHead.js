import React from "react";
import styled from "styled-components";

function ChartHead(props) {
  return (
    <Head>
      <th>SIZE</th>
      <th>SALE PRICE</th>
      <th>DATE</th>
      <th>TIME</th>
    </Head>
  );
}

export default ChartHead;

const Head = styled.div`
  th {
    font-size: 16px;
    padding: 2px 6px;
  }
`;
