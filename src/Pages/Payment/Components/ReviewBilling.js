import React from "react";
import styled from "styled-components";

const ReviewBilling = ({
  data,
  buyTotalPrice,
  sellTotalPrice,
  expirationNum,
  buyInput,
  sellInput,
  isBuy,
  isPlace,
  name,
  phoneNumber,
  address,
  city,
  state,
  country,
  zipCode,
}) => {
  const buyOrSellTotal = isBuy === 0 ? buyTotalPrice : sellTotalPrice;
  const buyOrSellInput = isBuy === 0 ? buyInput : sellInput;
  const bidOrAsk = isBuy === 0 ? "Your Bid" : "Your Ask";
  const purchaseOrSale = isBuy === 0 ? "Your Purchase" : "Your Sale";

  return (
    <ReviewPageContainer>
      <ReviewHeader>
        <h1>Review</h1>
        <h3>Please confirm your payment</h3>
      </ReviewHeader>
      <ReviewInfo>
        <ProductInfoText>Product Info</ProductInfoText>
        <ReviewItem>
          <strong>Product Name</strong>
          <p>{data.name}</p>
        </ReviewItem>
        <ReviewItem>
          <strong>Product Size</strong>
          <p>{data.size}</p>
        </ReviewItem>
        {isPlace === 0 && (
          <ReviewItem>
            <strong>{bidOrAsk}</strong>
            <p>${Number(buyOrSellInput).toFixed(2)}</p>
          </ReviewItem>
        )}
        {isPlace === 1 && (
          <ReviewItem>
            <strong>{purchaseOrSale}</strong>
            <p>${Number(buyOrSellInput).toFixed(2)}</p>
          </ReviewItem>
        )}
        <ReviewItem>
          <strong>Total Price</strong>
          <p>${Number(buyOrSellTotal).toFixed(2)}</p>
        </ReviewItem>
        <ReviewItem>
          <strong>Expiration</strong>
          <p>{expirationNum} days</p>
        </ReviewItem>
      </ReviewInfo>
      <ReviewInfo>
        <ProductInfoText>Delivery Info</ProductInfoText>
        <ReviewItem>
          <strong>Name</strong>
          <p>{name}</p>
        </ReviewItem>
        <ReviewItem>
          <strong>Phone Number</strong>
          <p>{phoneNumber}</p>
        </ReviewItem>
        <ReviewItem>
          <strong>Address</strong>
          <AddressWrapper>
            <AddressText>{address}</AddressText>
            <AddressText>{city}</AddressText>
            <AddressText>{state}</AddressText>
            <AddressText>{zipCode}</AddressText>
            <AddressText>{country}</AddressText>
          </AddressWrapper>
        </ReviewItem>
      </ReviewInfo>
    </ReviewPageContainer>
  );
};

export default ReviewBilling;

const ReviewPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  background-color: #fafafa;
  width: 100%;
  height: 500px;
`;

const ReviewHeader = styled.header`
  width: 100%;
  margin: 20px 0;

  h1 {
    font-size: 40px;
    letter-spacing: 0.1em;
  }
  h3 {
    font-size: 18px;
    letter-spacing: 0.07em;
  }
`;

const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
`;

const ReviewItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0px;
  strong {
    font-weight: bold;
  }
`;

const ProductInfoText = styled.h4`
  margin-bottom: 10px;
  padding-bottom: 7px;
  border-bottom: 1px solid black;
  font-size: 18px;
  font-weight: bold;
`;

const AddressWrapper = styled.div`
  display: flex;
`;

const AddressText = styled.p`
  font-size: 18px;
  margin-left: 3px;
`;
