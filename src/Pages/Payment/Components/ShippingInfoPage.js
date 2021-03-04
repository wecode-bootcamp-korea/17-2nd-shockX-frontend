import React from "react";
import styled from "styled-components";
import BillingInput from "./BillingInput";

const ShippingInfoPage = ({ data, handleInputInfo }) => {
  return (
    <ShippingInfoContainer>
      <BillingHeader>
        <h1>Billing</h1>
        <h3>Please choose your billing method</h3>
      </BillingHeader>
      <BillingBody>
        <BillingInfoText>Billing Info</BillingInfoText>
        {data.map((item) => {
          return <BillingInput handleInputInfo={handleInputInfo} item={item} />;
        })}
      </BillingBody>
    </ShippingInfoContainer>
  );
};

export default ShippingInfoPage;

const ShippingInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  background-color: #fafafa;
  width: 100%;
`;

const BillingHeader = styled.header`
  width: 100%;
  margin: 30px 0;

  h1 {
    font-size: 40px;
    letter-spacing: 0.1em;
  }
  h3 {
    font-size: 18px;
    letter-spacing: 0.07em;
  }
`;

const BillingBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const BillingInfoText = styled.h4`
  font-size: 16px;
  font-weight: bold;
`;
