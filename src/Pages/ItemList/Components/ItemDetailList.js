import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DropdownIcon from "./DropdownIcon";
import ItemCard from "./ItemCard";
import PaginationButtons from "./PaginationButtons";

const ItemDetailList = ({
  sizeBtn,
  priceBtn,
  productInfoList,
  fetchOffset,
}) => {
  return (
    <>
      <MainContainer>
        <FilterContainer>
          <FilterSection>
            <CategoriesName>HOME / SNEAKERS / AIR JORDAN</CategoriesName>
            <FilterBtnContainer>
              <FilterClearBtn to={`/product?limit=20`}>
                clear all filters
              </FilterClearBtn>
              <FilterBtn>Air Jordan x</FilterBtn>
              {sizeBtn && <FilterBtn>{sizeBtn} x</FilterBtn>}
              {priceBtn && <FilterBtn>{priceBtn} x</FilterBtn>}
            </FilterBtnContainer>
          </FilterSection>
          <SortSection>
            <DropdownBtn type="button">
              <span>Sort By: featured </span>
              <DropdownIcon />
            </DropdownBtn>
            <GridImg src={process.env.PUBLIC_URL + "/images/grid-black.svg"} />
            <ListImg src={process.env.PUBLIC_URL + "/images/list-black.svg"} />
          </SortSection>
        </FilterContainer>
        <ListContainer>
          <ItemCard productInfoList={productInfoList} />
        </ListContainer>
        <PaginationButtons fetchOffset={fetchOffset} />
      </MainContainer>
    </>
  );
};

export default ItemDetailList;

const MainContainer = styled.section`
  width: 100%;
  margin-left: 20px;
  padding: 0px 15px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterSection = styled.div``;

const CategoriesName = styled.h3`
  padding-top: 20px;
  color: gray;
  font-size: 12px;
`;

const FilterBtnContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-top: 3px;
`;

const FilterClearBtn = styled(Link)`
  margin-right: 16px;
  padding: 12px 24px;
  border: 1px solid lightgray;
  color: #1a202c;
  font-size: 16px;
`;

const FilterBtn = styled.button`
  margin-right: 16px;
  padding: 12px 24px;
  border: 1px solid lightgray;
  background-color: #e7e8e8;
  color: #1a202c;
  font-size: 16px;
`;

const SortSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
`;

const DropdownBtn = styled.button`
  width: 232px;
  margin-left: 8px;
  padding: 16px;
  border: 1px solid lightgray;
  font-size: 14px;

  svg {
    margin-left: 10px;
  }
`;

const GridImg = styled.img`
  width: 18px;
  height: 24px;
  margin: 0px 8px;
  cursor: pointer;
`;

const ListImg = styled.img`
  width: 18px;
  height: 24px;
  opacity: 0.3;
  cursor: pointer;
`;

const ListContainer = styled.section`
  width: inherit;
  margin-top: 30px;
`;
