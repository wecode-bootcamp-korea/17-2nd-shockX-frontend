import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CurrentTab from "./CurrentTab";
import BuySellTable from "./BuySellTable";
import { ORDERAPI } from "../../../Config";

const Buying = ({ data, currentMenu }) => {
  const [currentList, setCurrentList] = useState([]);
  const [pendingList, setPendingList] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const buyOrSell = currentMenu === 2 ? "buying" : "selling";
    fetch(`${ORDERAPI}/order/account/${buyOrSell}`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Kakao_token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCurrentList(data[buyOrSell].current);
        setPendingList(data[buyOrSell].pending);
      });
  }, [currentMenu]);

  const handleTab = (id) => {
    setCurrentTab(id);
  };

  return (
    <BuyingContainer>
      <CurrentTab
        handleTab={handleTab}
        currentTab={currentTab}
        currentMenu={currentMenu}
      />
      <BuySellTable
        listData={currentTab === 0 ? currentList : pendingList}
        data={data[currentTab]}
        currentTab={currentTab}
        currentMenu={currentMenu}
      />
    </BuyingContainer>
  );
};

export default Buying;

const BuyingContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  padding: 20px;
`;
