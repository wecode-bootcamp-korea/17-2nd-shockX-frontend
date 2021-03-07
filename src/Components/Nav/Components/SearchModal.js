import React from "react";
import styled from "styled-components";
import ResultCategory from "./ResultCategory";
import SearchResultItem from "./SearchResultItem";

const SearchModal = ({ searchItems }) => {
  return (
    <ModalWrapper>
      <PressEnterText>PRESS ENTER TO SEARCH</PressEnterText>
      {numResultsProps.map((item, idx) => {
        return <ResultCategory key={idx} data={item} />;
      })}
      {searchItems.map((item, idx) => {
        return <SearchResultItem key={idx} data={item} />;
      })}
    </ModalWrapper>
  );
};

export default SearchModal;

const ModalWrapper = styled.section`
  position: absolute;
  overflow-y: scroll;
  top: 360px;
  background-color: white;
  width: 690px;
  height: 500px;
  z-index: 500;
`;

const PressEnterText = styled.p`
  margin: 10px 0px 10px 16px;
  font-size: 14px;
`;

const numResultsProps = [
  { num: 5850, category: "sneakers" },
  { num: 200, category: "streetwear" },
  { num: 137, category: "collectibles" },
  { num: 11, category: "handbags" },
];
