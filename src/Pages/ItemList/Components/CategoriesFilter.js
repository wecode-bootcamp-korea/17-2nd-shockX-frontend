import React from "react";
import styled from "styled-components";
import { CategoriesData } from "../data/CategoriesData";

const CategoriesFilter = ({
  isJordanCategory,
  displayOnJordanCategoryEvent,
  handleClick,
}) => {
  return (
    <CategoriesContainer>
      {CategoriesData.topCategories.map((topMenu, idx) => {
        return <TopMenuSection key={idx}>{topMenu}</TopMenuSection>;
      })}
      <DetailMenu>BELLOW RETAIL</DetailMenu>
      <DetailMenu onClick={displayOnJordanCategoryEvent}>
        {CategoriesData.brandCategories.categoryName}
      </DetailMenu>
      {isJordanCategory &&
        CategoriesData.brandCategories.productDetail.map(
          (jordanSeries, idx) => {
            return <JordanSeries key={idx}>{jordanSeries}</JordanSeries>;
          }
        )}
      <SizeMenu>{CategoriesData.sizeCategories.categoryName}</SizeMenu>
      <SizeButtonContainer>
        {CategoriesData.sizeCategories.sizeDetail.map((size) => {
          return (
            <SizeButtons
              type="button"
              key={size.size}
              id="size"
              onClick={handleClick}
              name="sizeBtn"
            >
              {size.sizeName}
            </SizeButtons>
          );
        })}
      </SizeButtonContainer>
      <PriceMenu>{CategoriesData.priceCategories.categoryName}</PriceMenu>
      <div>
        {CategoriesData.priceCategories.priceFilter.map((price) => {
          return (
            <PriceButtons
              key={price.priceId}
              onClick={handleClick}
              id={price.priceId}
              name="priceBtn"
            >
              {price.filterName}
            </PriceButtons>
          );
        })}
      </div>
    </CategoriesContainer>
  );
};

export default CategoriesFilter;

const CategoriesContainer = styled.aside`
  width: 200px;
  margin-top: 10px;
  padding-left: 20px;
  font-weight: 600;
  letter-spacing: 1.5px;
`;

const TopMenuSection = styled.h2`
  margin: 10px 0px;
  cursor: pointer;

  &:hover {
    color: #ff5a5f;
  }
`;

const DetailMenu = styled.button`
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 0;

  &:hover,
  &:focus-within {
    color: #ff5a5f;
  }
`;

const JordanSeries = styled.h3`
  padding-left: 10px;
  margin: 5px 0px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  cursor: pointer;
`;

const SizeMenu = styled.h2`
  margin-top: 30px;
  margin-bottom: 5px;
`;

const SizeButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
  width: 200px;
  text-align: center;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 0px;
  cursor: pointer;
`;

const SizeButtons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 5px;
  margin: 5px;
  background-color: #e7e8e8;
  color: black;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #ff5a5f;
  }
`;

const PriceMenu = styled.h2`
  margin-top: 30px;
  margin-bottom: 12px;
`;

const PriceButtons = styled.button`
  display: block;
  padding-left: 10px;
  margin: 10px 0px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.5px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #ff5a5f;
  }
`;
