import React from "react";
import styled from "styled-components";

const AccountNav = () => (
  <AccountHeader>
    <AccountNavLogo
      alt="kakaoIcon"
      src={process.env.PUBLIC_URL + "/Images/shockX_logo_green.svg"}
    />
  </AccountHeader>
);

export default AccountNav;

const AccountNavLogo = styled.img`
  width: 140px;
`;

const AccountHeader = styled.header`
  ${(props) => props.theme.flexCenter};
  position: fixed;
  background-color: white;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid lightgray;
`;
