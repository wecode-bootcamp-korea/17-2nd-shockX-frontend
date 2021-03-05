import React from "react";
import styled from "styled-components";

const AccountTab = ({ signUpText, signInText, setCurrentTab, currentTab }) => {
  return (
    <TabContainer>
      <Tab onClick={() => setCurrentTab(true)} clicked={currentTab}>
        {signUpText}
      </Tab>
      <Tab onClick={() => setCurrentTab(false)} clicked={!currentTab}>
        {signInText}
      </Tab>
    </TabContainer>
  );
};

export default AccountTab;

const TabContainer = styled.div`
  ${(props) => props.theme.flexCenter};
  margin: 30px 0px;
  width: 350px;
`;

const Tab = styled.button`
  text-align: center;
  padding-bottom: 30px;
  width: 50%;
  height: 35px;
  border-bottom: 2.5px solid
    ${(props) => (props.clicked ? "black" : " lightgrey")};
  font-size: 14px;
  color: ${(props) => (props.clicked ? "black" : "grey")};
  &:hover {
    cursor: pointer;
  }
`;
