/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";

export default function HistoryChart({ salesHistory, sizes }) {
  return (
    <ChartContainer>
      <table>
        <thead>
          <tr className="tablehead">
            <th>SIZE</th>
            <th>SALE PRICE</th>
            <th>DATE</th>
            <th>TIME</th>
          </tr>
        </thead>
        <tbody>
          {salesHistory?.map((history, idx) => {
            return (
              <tr className="tablebody">
                <td>{sizes.size_name}</td>
                <td>${history.sale_price}</td>
                <td>{history.date_time}</td>
                <td>{history.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ChartContainer>
  );
}

const ChartContainer = styled.div`
  ${({ theme }) => theme.flexCenter};
  font-size: 14px;

  th,
  td {
    text-align: center;
    width: 150px;
    padding: 5px;
    text-align: start;
  }
  .tablehead {
    border-bottom: 2px solid lightgray;
    font-weight: 700;
    background-color: white;
    font-size: 16px;
  }

  .tablebody:nth-child(odd) {
    background-color: #f5f5f5;
  }
`;
