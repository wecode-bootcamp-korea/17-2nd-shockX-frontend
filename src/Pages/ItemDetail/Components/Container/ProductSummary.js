import React from "react";
import styled from "styled-components";

export default function ProductSummary({ ticker }) {
  return (
    <Section>
      <span className="samll_basic">Condition:</span>
      <span className="small_green">New</span>
      <div className="divider"> </div>
      <span className="samll_basic"> Ticker: </span>
      <span className="samll_basic"> {ticker}</span>
      <div className="divider"> </div>
      <span className="small_green">100% Authentic</span>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  margin-top: 16px;
  font-size: 18px;
  font-weight: 600;

  .small_basic {
    color: lightgray;
    padding: 0 6px;
  }
  .small_green {
    color: #08a05c;
    padding: 0 6px;
  }
  .divider {
    border-left: 1.5px solid black;
    margin: 2px 6px;
  }
`;
