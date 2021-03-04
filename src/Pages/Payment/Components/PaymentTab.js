import React from "react";
import styled from "styled-components";

const PaymentTab = ({ format, changeTabHandler, isPlace, isBuy }) => {
  const colorCondition = isBuy === 0 ? "#08a05c" : "#FF6060";

  return (
    <TabContainer>
      {format.map((el, idx) => {
        return (
          <Tab
            key={idx}
            color={colorCondition}
            onClick={() => changeTabHandler(idx)}
            clicked={isPlace === idx}
          >
            {el.tab}
          </Tab>
        );
      })}
    </TabContainer>
  );
};

export default PaymentTab;

const TabContainer = styled.div`
  ${(props) => props.theme.flexCenter};
  margin: 30px 0px;
  width: 360px;
  height: 50px;
  border: 1px solid lightgrey;
  background-color: lightgray;
  border-radius: 25px;
`;

const Tab = styled.button`
  text-align: center;
  width: 50%;
  height: 50px;
  background-color: ${(props) => (props.clicked ? props.color : "lightgrey")};
  font-size: 15px;
  color: white;
  border-radius: 25px;

  &:hover {
    cursor: pointer;
  }
`;
