import React from "react";
import styled from "styled-components";

export default function LastSaleBox({ lastSalePrice }) {
  return (
    <LastSale>
      <label>Last Sale</label>
      <span>${lastSalePrice}</span>
      <label className="small_red">-$ (-1%)</label>
    </LastSale>
  );
}

const LastSale = styled.div`
  padding: 0px 10px;
  margin: 0 8px;
  label {
    font-size: 16px;
    color: lightgray;
    font-weight: 700;
  }
  span {
    margin-top: 8px;
    display: block;
    font-size: 26px;
  }
  .small_red {
    color: #ff5a5f;
  }
`;
