import React from "react";
import styled from "styled-components";
import BuySellItem from "./BuySellItem";

const BuyingTable = ({ listData, data, currentTab, currentMenu }) => {
  return (
    <BuyingTableWrapper>
      <thead>
        <tr>
          <th>{data[0]}</th>
          <th>{data[1]}</th>
          <th>{data[2]}</th>
          <th>{data[3]}</th>
          <th>{data[4]}</th>
        </tr>
      </thead>
      <tbody>
        {listData.map((item) => {
          return (
            <BuySellItem
              currentMenu={currentMenu}
              item={item}
              currentTab={currentTab}
            />
          );
        })}
      </tbody>
    </BuyingTableWrapper>
  );
};

export default BuyingTable;

const BuyingTableWrapper = styled.table`
  width: 100%;
  text-align: left;
  margin: 0 auto;
  font-size: 15px;
  th {
    padding: 8px;
    border-right: 2px solid ${(props) => props.theme.colors.green};
    border-bottom: 2px solid ${(props) => props.theme.colors.green};
    font-size: 15px;

    &:first-child {
      width: 400px;
    }
  }
`;
