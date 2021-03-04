/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import MenuTab from "./Components/MenuTab";
import BuyingSelling from "./Components/BuyingSelling";
import Nav from "../../Components/Nav/Nav";
import styled from "styled-components";

const Mypage = () => {
  const [currentMenu, setCurrentMenu] = useState(2);

  const menuHandler = id => {
    setCurrentMenu(id);
  };

  return (
    <>
      <Nav />
      <MyPageContainer>
        <MenuTab menuHandler={menuHandler} currentMenu={currentMenu} />
        <CurrentPage>
          {currentMenu === 2 && (
            <BuyingSelling data={buyingProps} currentMenu={currentMenu} />
          )}
          {currentMenu === 3 && (
            <BuyingSelling data={sellingProps} currentMenu={currentMenu} />
          )}
        </CurrentPage>
      </MyPageContainer>
    </>
  );
};

export default Mypage;

const MyPageContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const CurrentPage = styled.div`
  width: 100%;
`;

const buyingProps = [
  ["Item", "Bid Price", "Highest Bid", "Lowest Ask", "Expires"],
  ["Item", "Order Number", "Purchase Date", "Price", "Status"],
];

const sellingProps = [
  ["Item", "Ask Price", "Highest Bid", "Lowest Ask", "Expires"],
  ["Item", "Order Number", "Sale Date", "Sale Price", "Status"],
];
