import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ItemCard = ({ productInfoList }) => {
  const history = useHistory();

  const goToDetail = (productId) => {
    history.push(`/product/${productId}`);
  };

  return (
    <ItemCardContainer>
      {productInfoList.map((product) => {
        return (
          <CardSection
            key={product.productId}
            onClick={() => goToDetail(product.productId)}
          >
            <ImgWrapper>
              <ProductImg src={product.productImage} alt="product" />
            </ImgWrapper>
            <TextWrapper>
              <ProductName>{product.productName}</ProductName>
              <LowestAsk>Lowest Ask</LowestAsk>
              <Price>$ {Math.floor(product.price)}</Price>
            </TextWrapper>
          </CardSection>
        );
      })}
    </ItemCardContainer>
  );
};

export default ItemCard;

const ItemCardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
`;

const CardSection = styled.div`
  width: 215px;
  height: 248px;
  margin-bottom: 15px;
  border: solid 2px #fafafa;
  cursor: pointer;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 16px;
`;

const ProductImg = styled.img`
  width: 140px;
  height: 90px;
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 122px;
  padding: 16px;
  background-color: #fafafa;
`;

const ProductName = styled.div`
  height: 30px;
  font-size: 15px;
  margin-bottom: 6px;
  overflow: hidden;
`;

const LowestAsk = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.fontGray};
`;

const Price = styled.div`
  margin-top: 12px;
  color: #0e0a0a;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1px;
`;
