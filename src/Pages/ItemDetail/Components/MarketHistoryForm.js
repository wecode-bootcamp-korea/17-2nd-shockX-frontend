import React, { useState } from "react";
import styled from "styled-components";
import LabelBanner from "../Components/LabelBanner";
import HistoryChart from "./History/HistoryChart";
import HistoryBox from "./History/HistoryBox";
import ChartData from "./History/ChartData";

export default function MarketHistoryForm({ itemData, updateIdx, dataIdx }) {
  return (
    <Format>
      <LabelBanner />
      <MainContainer>
        <div className="MainSection">
          <ChartData />
          <HistoryChart
            salesHistory={itemData.results?.sizes[dataIdx].sales_history}
            sizes={itemData.results?.sizes[dataIdx]}
          />
        </div>
        <HistoryBox sizes={itemData.results?.sizes[dataIdx]} />
      </MainContainer>
    </Format>
  );
}

const Format = styled.div`
  border-top: 1px solid lightgray;
`;

const MainContainer = styled.div`
  display: flex;
  max-width: 84vw;
  margin: 0 auto;
  .MainSection {
    width: 60%;
  }
`;
