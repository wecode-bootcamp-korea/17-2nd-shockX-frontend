import React from "react";
import styled from "styled-components";

const ResultCategory = ({ data }) => {
  return (
    <OneResultLine>
      <span>{data.num}</span> results found in
      <span> {data.category}</span>
    </OneResultLine>
  );
};

export default ResultCategory;

const OneResultLine = styled.li`
  list-style: none;
  padding: 15px 0px 0px 15px;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 50px;
  span {
    font-weight: bold;
  }
  &:hover {
    border-right: 8px solid ${(props) => props.theme.colors.green};
  }
`;
