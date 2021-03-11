/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import MarketHistoryForm from "./Components/MarketHistoryForm";
import Nav from "../../Components/Nav/Nav";
import { ITEMDETAILAPI } from "../../Config";
import { useHistory, useLocation } from "react-router-dom";

export default function ItemDetail() {
  const [itemData, setItemData] = useState([]);
  const [dataIdx, setDataIdx] = useState(0);
  const updateIdx = (buttonId) => {
    setDataIdx(buttonId);
  };

  const location = useLocation();

  const getItemData = () => {
    const detailQuery = location.pathname;
    fetch(`${ITEMDETAILAPI}${detailQuery}`)
      .then((res) => res.json())
      .then((res) => setItemData(res));
  };
  const history = useHistory();
  const goToBuy = (id, size) => {
    history.push(`/order/buy/${id}?size=${size}`);
  };

  const goToSell = (id, size) => {
    history.push(`/order/sell/${id}?size=${size}`);
  };

  useEffect(() => {
    getItemData();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Nav />
      <Form
        goToBuy={goToBuy}
        goToSell={goToSell}
        itemData={itemData}
        updateIdx={updateIdx}
        dataIdx={dataIdx}
      />
      <MarketHistoryForm
        itemData={itemData}
        updateIdx={updateIdx}
        dataIdx={dataIdx}
      />
    </>
  );
}
