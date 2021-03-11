import React from "react";
import styled from "styled-components";
import MenuTabItem from "./MenuTabItem";

const MenuTab = ({ menuHandler, currentMenu }) => {
  return (
    <MenuTabWrapper>
      <UserNameText>{localStorage.getItem("username")}</UserNameText>
      {CATEGORY_ARR.map((category, idx) => {
        return (
          <MenuTabItem
            key={idx}
            data={category}
            menuHandler={menuHandler}
            currentMenu={currentMenu}
          />
        );
      })}
    </MenuTabWrapper>
  );
};

export default MenuTab;

const MenuTabWrapper = styled.aside`
  background-color: #f5f5f6;
  margin-top: 80px;
  width: 260px;
  height: 100%;
`;

const UserNameText = styled.h2`
  margin: 0px 0px 30px 20px;
  padding-top: 30px;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 0.03em;
`;

const CATEGORY_ARR = [
  { id: 1, title: "Security", detail: "Two-Step Verification" },
  {
    id: 2,
    title: "Buying",
    detail: "Active Bids, In-Progress, Completed Orders",
  },
  {
    id: 3,
    title: "Selling",
    detail: "Active Asks, In-Progress, Completed Sales",
  },
  { id: 4, title: "Profile", detail: "Learn what's unique to you" },
  { id: 5, title: "Portfolio", detail: "See the value of your items" },
  { id: 6, title: "Following", detail: "Products you're watching" },
  { id: 7, title: "Settings", detail: "Payments, Payouts, Addresses" },
  { id: 8, title: "Log Out", detail: "See You Again" },
];
