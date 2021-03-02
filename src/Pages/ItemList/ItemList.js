import React, { useState } from "react";
// import TickerComp from "../../Components/TickerComp/TickerComp";
import styled from "styled-components";
import CategoriesFilter from "./Components/CategoriesFilter";
import ItemDetailList from "./Components/ItemDetailList";
import Nav from "../../Components/Nav/Nav";
import UseFetch from "./Hooks/UseFetch";

const ItemList = () => {
  const {
    productInfoList,
    sizeBtn,
    priceBtn,
    fetchOffset,
    handlePriceFiltersClickEvent,
    addFilter,
    handleClick,
  } = UseFetch();
  const [isJordanCategory, setIsJordanCategory] = useState(false);

  const displayOnJordanCategoryEvent = () => {
    setIsJordanCategory(!isJordanCategory);
  };

  return (
    <>
      <Nav />
      <ListContainer>
        <ItemContainer>
          <MainBannerImg
            src="//stockx-assets.imgix.net/Core/browse-header-sneakers.jpg?auto=compress,format"
            alt="메인 배너"
          />
          <CategoryContainer>
            <CategoriesFilter
              isJordanCategory={isJordanCategory}
              displayOnJordanCategoryEvent={displayOnJordanCategoryEvent}
              handlePriceFiltersClickEvent={handlePriceFiltersClickEvent}
              addFilter={addFilter}
              handleClick={handleClick}
            />
            <ItemDetailList
              productInfoList={productInfoList}
              fetchOffset={fetchOffset}
              sizeBtn={sizeBtn}
              priceBtn={priceBtn}
            />
          </CategoryContainer>
        </ItemContainer>
      </ListContainer>
    </>
  );
};
export default ItemList;

const ListContainer = styled.main`
  width: 100%;
  margin-top: 30px;
`;

const ItemContainer = styled.header`
  width: 1200px;
  margin: auto;
`;

const MainBannerImg = styled.img`
  width: 1200px;
  height: 270px;
  margin-bottom: 30px;
`;

const CategoryContainer = styled.section`
  width: inherit;
  display: flex;
`;
