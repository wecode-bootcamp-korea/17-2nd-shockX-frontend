/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";

function ListContainer(props) {
  return (
    <ChartContainer>
      <table>
        <thead>
          <tr className="tablehead">
            <th>NAME</th>
            <th>PURCHASE DATE</th>
            <th>PURCHASE PRICE</th>
            <th>MARKET VALUE</th>
            <th>GAIN/LOSS</th>
          </tr>
        </thead>
        <tbody>
          {/* {salesHistory?.map((history, idx) => {
              return ( */}
          <tr className="tablebody">
            <td>JORDAN 1 RETRO HIGH</td>
            <td>03/31/2020</td>
            <td>$350</td>
            <td>$450</td>
            <GainLoss>100%</GainLoss>
          </tr>
          {/* );
            })} */}
        </tbody>
      </table>
    </ChartContainer>
  );
}

export default ListContainer;

const ChartContainer = styled.div`
  font-size: 14px;

  th,
  td {
    text-align: center;
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

const GainLoss = styled.td`
  color: ${props => props.theme.colors.green};
`;
