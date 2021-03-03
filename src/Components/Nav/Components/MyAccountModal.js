import React from "react";
import styled from "styled-components";

const MyAccountModal = ({ isMyAccountModal }) => (
  <ModalContainer isMyAccountModal={isMyAccountModal}>
    <DataBoxWrapper>
      {MyAccountData.data.map((box, idx) => {
        return (
          <DataBox key={idx}>
            <MenuIcon
              alt={box.name}
              src={process.env.PUBLIC_URL + `/images/Nav/${box.name}.svg`}
            />
            <TextWrapper>
              <MenuTitle>{box.name}</MenuTitle>
              <MenuDetail>{box.text}</MenuDetail>
            </TextWrapper>
          </DataBox>
        );
      })}
    </DataBoxWrapper>
  </ModalContainer>
);

export default MyAccountModal;

const MyAccountData = {
  data: [
    {
      name: "Buying",
      text: "Active Bids, In-Progress, Complete Orders",
    },
    {
      name: "Selling",
      text: "Active Asks, In-Progress, Complete Sales",
    },
    {
      name: "Portfolio",
      text: "See the Value Of Your Items",
    },
    {
      name: "Following",
      text: "Products You Are Watching",
    },
    {
      name: "Security",
      text: "Two-Step Verification",
    },
    {
      name: "Profile",
      text: "Learn What's Unique To You",
    },
    {
      name: "Settings",
      text: "Payments, Payouts, Addresses",
    },
    {
      name: "Log Out",
      text: "Goodbye",
    },
  ],
};

const ModalContainer = styled.section`
  position: absolute;
  top: 60px;
  right: 110px;
  display: flex;
  width: 450px;
  height: 300px;
  background-color: white;
  border: 1px solid lightgray;
  z-index: 5000;
  transition: 3s;
  display: ${(props) => (props.isMyAccountModal ? "flex" : "none")};
`;

const DataBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const DataBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #fafafa;
    cursor: pointer;
  }
`;

const MenuIcon = styled.img`
  margin-left: 20px;
  width: 30px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  width: 70%;
  height: 50px;
  font-size: 13px;
  text-align: center;
`;

const MenuTitle = styled.p`
  margin: 3px auto;
  font-weight: bold;
`;

const MenuDetail = styled.p`
  margin: 3px auto;
  color: grey;
`;
