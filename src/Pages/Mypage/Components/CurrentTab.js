import React from "react";
import styled from "styled-components";

const CurrentTab = ({ handleTab, currentMenu, currentTab }) => {
  const purchaseOrSale = currentMenu === 2 ? "PURCHASING" : "SALES";
  return (
    <HeaderWrapper>
      <TabContainer>
        <OneTab onClick={() => handleTab(0)} clicked={currentTab === 0}>
          Current
        </OneTab>
        <OneTab onClick={() => handleTab(1)} clicked={currentTab === 1}>
          Pending
        </OneTab>
        <OneTab clicked={currentTab === 2}>History</OneTab>
      </TabContainer>
      <SearchContainer>
        <SearchName placeholder="Search name" />
        <SearchBtn>Search</SearchBtn>
      </SearchContainer>
    </HeaderWrapper>
  );
};

export default CurrentTab;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

const TabContainer = styled.ul`
  display: flex;
  width: 100%;
  border-bottom: 1px solid lightgrey;
`;

const OneTab = styled.li`
  padding: 7px;
  width: 120px;
  border-bottom: 1px solid
    ${(props) => (props.clicked ? "black" : "transparent")};
  text-align: center;
  font-size: 17px;
  letter-spacing: 0.08em;
  font-weight: bold;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

const SearchContainer = styled.div`
  margin: 20px 0px;
`;

const SearchName = styled.input`
  padding: 10px;
  width: 700px;
  height: 40px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  &::placeholder {
    color: lightgrey;
  }
`;

const SearchBtn = styled.button`
  background-color: black;
  color: white;
  width: 80px;
  height: 39px;
  border-radius: 4px;
  font-size: 15px;
`;
