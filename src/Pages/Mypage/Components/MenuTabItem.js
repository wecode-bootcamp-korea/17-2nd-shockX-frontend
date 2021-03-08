import React from "react";
import styled from "styled-components";

const MenuTabItem = ({ data, menuHandler, currentMenu }) => (
  <ItemWrapper
    id={data.id}
    onClick={() => menuHandler(data.id)}
    clicked={currentMenu === data.id}
  >
    <MenuIcon
      alt={data.title}
      src={process.env.PUBLIC_URL + `/Images/Nav/${data.title}.svg`}
    />
    <MenuContent>
      <MenuTitle>{data.title}</MenuTitle>
      <MenuDetail>{data.detail}</MenuDetail>
    </MenuContent>
  </ItemWrapper>
);

export default MenuTabItem;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${(props) => (props.clicked ? "white" : "#f5f5f6")};
  &:hover {
    cursor: pointer;
    background-color: lightgrey;
  }
`;

const MenuIcon = styled.img`
  margin-left: 20px;
  width: 25px;
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  width: 180px;
`;

const MenuTitle = styled.h1`
  font-size: 14px;
  font-weight: bold;
  color: #073721;
`;

const MenuDetail = styled.h4`
  margin-top: 10px;
  font-size: 11px;
  font-weight: bold;
  color: grey;
`;
