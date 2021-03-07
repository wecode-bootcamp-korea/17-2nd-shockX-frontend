import React from "react";
import styled from "styled-components";
import SearchModal from "./SearchModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MainImg = ({
  searchItems,
  closeSearchModal,
  isSearchModalOpen,
  handleSearch,
}) => {
  return (
    <MainImageContainer onClick={closeSearchModal}>
      <Title>Buy & Sell</Title>
      <SubTitle>Authentic Sneakers</SubTitle>
      <SearchContainer>
        <FontAwesomeIcon icon={faSearch} size="lg" />
        <SearchInMain onChange={handleSearch} placeholder="Search..." />
      </SearchContainer>
      {isSearchModalOpen && <SearchModal searchItems={searchItems} />}
    </MainImageContainer>
  );
};
export default MainImg;

const MainImageContainer = styled.div`
  ${(props) => props.theme.flexColumnCenter};
  width: 100%;
  height: 500px;
  background-image: url(${"/images/Main/imagemain.png"});
  background-size: cover;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  letter-spacing: 0.1em;
  font-size: 60px;
  font-weight: bold;
`;

const SubTitle = styled.h1`
  background-color: black;
  padding: 8px 12px 8px 12px;
  color: white;
  font-size: 60px;
  font-weight: bold;
  letter-spacing: 0.1em;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  height: 50px;
  width: 690px;
  background-color: white;
`;

const SearchInMain = styled.input`
  border: none;
  border-radius: 3px;
  width: 600px;
  height: 50px;
`;
