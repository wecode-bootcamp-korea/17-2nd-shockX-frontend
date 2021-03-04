import React from "react";
import styled from "styled-components";

const PaymentNav = () => (
  <PaymentNavBar>
    <PaymentNavLogo
      alt="kakaoIcon"
      src={process.env.PUBLIC_URL + "/Images/shockX_logo_green.svg"}
    />
    <FAQtext>FAQ</FAQtext>
  </PaymentNavBar>
);

export default PaymentNav;

const PaymentNavLogo = styled.img`
  margin-left: 40px;
  width: 90px;
  &:hover {
    cursor: pointer;
  }
`;

const PaymentNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid lightgray;
  z-index: 500;
`;
const FAQtext = styled.p`
  margin-right: 40px;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`;
