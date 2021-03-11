import React, { useState } from "react";
import styled from "styled-components";
import SizeBox from "./MarketSummary/SizeBox";
import LastSaleBox from "./MarketSummary/LastSaleBox";
import ActionButton from "./MarketSummary/ActionButton";
import SizeModal from "./Modal/SizeModal";

export default function MarketSummary({
  goToBuy,
  sizes,
  products,
  updateIdx,
  dataIdx,
  productId,
  goToSell,
}) {
  const [isModalOn, setIsModalOn] = useState(false);
  const handleModal = () => {
    setIsModalOn(!isModalOn);
  };
  return (
    <>
      <Container>
        <div onClick={() => handleModal()}>
          <SizeBox sizes={sizes?.[dataIdx].size_name} />
        </div>
        <LastSaleBox lastSalePrice={sizes?.[dataIdx].last_sale} />
        <ActionButton
          lowestAsk={sizes?.[dataIdx].lowest_ask}
          highestBid={sizes?.[dataIdx].highest_bid}
          goToBuy={goToBuy}
          goToSell={goToSell}
          sizeId={sizes?.[dataIdx].size_id}
          productId={productId}
        />
      </Container>
      {isModalOn && (
        <SizeModal sizes={sizes} products={products} updateIdx={updateIdx} />
      )}
    </>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexCenter};
  justify-content: start;
  margin: 40px 0;
`;
