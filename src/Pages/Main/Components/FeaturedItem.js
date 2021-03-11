import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const FeaturedItem = ({ product }) => {
  const newPrice = Math.round(product.price);
  const history = useHistory();
  const goToDetail = (productId) => {
    history.push(`/product/${productId}`);
  };

  return (
    <OneItemContainer onClick={() => goToDetail(product.productId)}>
      <ItemImage src={product.productImage} alt={product.productName} />
      <h5>{product.productName}</h5>
      <p>Lowest Ask</p>
      <strong>${newPrice}</strong>
    </OneItemContainer>
  );
};

export default FeaturedItem;

const OneItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 5px;
  border: 1px solid #fafafa;
  background-color: #fafafa;
  width: 230px;
  height: 300px;
  &:hover {
    cursor: pointer;
  }

  h5 {
    margin: 15px 14px 15px 14px;
    height: 50px;
    font-size: 17px;
    color: black;
  }

  p {
    margin: 0px 0px 10px 14px;
    font-size: 14px;
    color: grey;
  }

  strong {
    margin-left: 14px;
    font-weight: bold;
    font-size: 24px;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;
