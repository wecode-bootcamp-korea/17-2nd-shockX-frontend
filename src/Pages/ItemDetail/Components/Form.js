/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import styled from "styled-components";
import MarketSummary from "./Container/MarketSummary";
import SocialBtnContainer from "./Container/SocialBtnContainer";
import ProductSummary from "./Container/ProductSummary";
import ItemImage from "./Container/ItemImage";
import ScrollSlider from "./Container/ScrollSlider";
import ProductInfo from "./Container/ProductInfo";

export default function Form({
  itemData,
  updateIdx,
  dataIdx,
  goToBuy,
  goToSell,
}) {
  const [scrollValue, setScrollValue] = useState(0);
  const handleScrollValue = (e) => {
    setScrollValue(e.target.value);
  };

  return (
    <Format>
      <SocialBtnContainer />
      <h1>{itemData.results?.product_name}</h1>
      <ProductSummary ticker={itemData.results?.product_ticker} />
      <MarketSummary
        productId={itemData.results?.product_id}
        sizes={itemData.results?.sizes}
        updateIdx={updateIdx}
        dataIdx={dataIdx}
        goToBuy={goToBuy}
        goToSell={goToSell}
      />
      <ItemImage imageIdx={scrollValue} images={itemData.results?.image_url} />
      {itemData.results?.product_ticker === "AJ6-BI19" && (
        <ScrollSlider handleScrollValue={handleScrollValue} />
      )}
      <ProductInfo product={itemData.results} />
    </Format>
  );
}

const Format = styled.div`
  max-width: 84vw;
  display: block;
  justify-content: left;
  padding: 0 15px;
  margin: 0 auto;
  margin-top: 120px;

  h1 {
    max-width: 70%;
    font-size: 55px;
    font-weight: 700;
  }
`;
