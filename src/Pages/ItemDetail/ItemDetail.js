/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import MarketHistoryForm from "./Components/MarketHistoryForm";
import { ITEMDETAILAPI } from "../../Config";

export default function ItemDetail() {
  const [itemData, setItemData] = useState([]);
  const [dataIdx, setDataIdx] = useState(0);
  const updateIdx = buttonId => {
    setDataIdx(buttonId);
  };

  const getItemData = () => {
    fetch(`${ITEMDETAILAPI}`)
      .then(res => res.json())
      .then(res => setItemData(res));
  };

  // const getItemData = () => {
  //   fetch("./Data/ItemDetailData.json")
  //     .then(res => res.json())
  //     .then(res => setItemData(res));
  // };

  useEffect(() => {
    getItemData();
  }, []);
  return (
    <>
      <Form itemData={itemData} updateIdx={updateIdx} dataIdx={dataIdx} />
      <MarketHistoryForm
        itemData={itemData}
        updateIdx={updateIdx}
        dataIdx={dataIdx}
      />
    </>
  );
}
