import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "../../Components/Nav/Nav";
import TickerComp from "../../Components/TickerComp/TickerComp";
import MenuTab from "./Components/MenuTab";
import FeaturedList from "./Components/FeaturedList";
import { useHistory } from "react-router-dom";
import { menuTabProps } from "./mainData";

const LIMIT = 20;
const Main = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [popularList, setPopularList] = useState([]);
  const [newLowAskList, setNewLowAskList] = useState([]);
  const [trendList, setTrendList] = useState([]);
  const [highBidList, setHighBidList] = useState([]);
  let history = useHistory();

  //백앤드와 통신 안할때
  useEffect(() => {
    fetch("/Data/MainData.json")
      .then((res) => res.json())
      .then((data) => {
        setPopularList(data.products.slice(0, 5));
        setNewLowAskList(data.products.slice(5, 10));
        setTrendList(data.products.slice(10, 15));
        setHighBidList(data.products.slice(15, 20));
      });
  }, []);

  //백앤드와 통신 할때
  // useEffect(() => {
  //   fetch(`http://10.58.6.66:8000/product?limit=${LIMIT}`)
  //     .then((res) => res.json())
  //     .then((data) => setMainListData(data.products));
  // }, []);

  const changeTabImage = (e) => {
    setCurrentTab(e.target.id);
  };

  const goToItemList = () => {
    history.push("/itemlist");
  };

  const totalList = [popularList, newLowAskList, trendList, highBidList];

  return (
    <MainPage>
      <Nav />
      <MenuTab
        data={menuTabProps}
        changeTabImage={changeTabImage}
        currentTab={currentTab}
        goToItemList={goToItemList}
      />
      <FeaturedList totalList={totalList} listTitleProps={listTitleProps} />
      <TickerComp />
    </MainPage>
  );
};

export default Main;

const MainPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const listTitleProps = [
  "Most Popular",
  "New Lowest Ask",
  "What's Trending",
  "New Highest Bids",
];
