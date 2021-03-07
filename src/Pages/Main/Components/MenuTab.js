import React from "react";
import styled from "styled-components";

const MenuTab = ({ data, changeTabImage, currentTab, goToItemList }) => {
  return (
    <MenuTabContainer>
      <MenuTabWrapper>
        {data.tabName.map((menu, idx) => {
          return (
            <MenuTabItem
              key={idx}
              color={Number(currentTab) === menu.id ? "red" : "white"}
              onClick={changeTabImage}
              id={menu.id}
            >
              {menu.name}
            </MenuTabItem>
          );
        })}
      </MenuTabWrapper>
      <TabImageWrapper>
        <TabImage onClick={goToItemList} src={data.tabImage[currentTab]} />
      </TabImageWrapper>
    </MenuTabContainer>
  );
};

export default MenuTab;

const MenuTabContainer = styled.section`
  width: 100%;
`;

const MenuTabWrapper = styled.nav`
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
`;

const MenuTabItem = styled.p`
  padding-top: 15px;
  margin: 0px 15px;
  letter-spacing: 0.08em;
  padding-bottom: 10px;
  border-bottom: 6px solid ${(props) => props.color};

  &:hover {
    border-bottom: 6px solid "red";
  }
`;

const TabImageWrapper = styled.div`
  width: 100%;
`;

const TabImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;
