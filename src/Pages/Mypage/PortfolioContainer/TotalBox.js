/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import TotalModule from "./Components/TotalModule";

function TotalBox({ data }) {
  return (
    <Form>
      <thead>
        <tr className="tablehead">
          <th className="firstcolumn">Items</th>
          <th>Rank</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        {/* {salesHistory?.map((history, idx) => {
    return ( */}
        {/* <TotalModule /> */}
        <tr className="tablebody">
          <Hilight className="firstcolumn">7</Hilight>
          <td>03/31/2020</td>
          <td>$350</td>
        </tr>
      </tbody>
    </Form>
  );
}

export default TotalBox;

const Form = styled.table`
  margin-top: 12px;
  width: 100%;
  font-weight: 600;
  border-bottom: 1px solid lightgray;
  text-align: left;

  .tablehead {
    font-size: 14px;
  }
  .tablebody {
    font-size: 18px;
  }
  .firstcolumn {
    width: 50%;
    margin: 6px 0;
  }
`;

const Hilight = styled.div`
  font-size: 28px;
  color: ${props => props.theme.colors.green};
`;
