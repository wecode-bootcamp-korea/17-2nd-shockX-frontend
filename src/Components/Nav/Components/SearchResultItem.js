import React from "react";
import styled from "styled-components";

const SearchResultItem = ({ data }) => (
  <OneResultItem>
    <SearchImg src={data.productImage} />
    <SearchDetail>
      <h4>AIR JORDAN</h4>
      <h1>{data.productName}</h1>
      <h3>{data.price}</h3>
    </SearchDetail>
  </OneResultItem>
);

export default SearchResultItem;

const OneResultItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  &:hover {
    border-right: 8px solid ${(props) => props.theme.colors.green};
  }
`;

const SearchImg = styled.img`
  margin-left: 20px;
  width: 120px;
  height: 100px;
`;

const SearchDetail = styled.div`
  margin-left: 20px;
  font-weight: bold;

  h1 {
    font-size: 20px;
  }
`;
