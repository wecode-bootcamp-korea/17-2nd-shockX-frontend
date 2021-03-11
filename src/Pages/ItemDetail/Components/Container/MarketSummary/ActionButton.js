/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";

export default function ActionButton({ lowestAsk, highestBid }) {
  // const LowestAsk = lowestAsk?.split("").slice(0, 3).join("");
  // const HighestBid = highestBid.split("").slice(0, 3).join("");

  return (
    <ActionButtons>
      <BuyOrBid>
        <div className="left_section">
          <p className="market_price">${lowestAsk}</p>
          <p className="action_descripton">Lowest Ask</p>
        </div>
        <div className="right_section">
          <p className="market_text">Buy</p>
          <p className="action_text">or Bid</p>
        </div>
      </BuyOrBid>
      <SellOrAsk>
        <div className="left_section">
          <p className="market_price">${highestBid}</p>
          <p className="action_descripton">Highest Bid</p>
        </div>
        <div className="right_section">
          <p className="market_text">Sell</p>
          <p className="action_text">or Ask</p>
        </div>
      </SellOrAsk>
    </ActionButtons>
  );
}

const ActionButtons = styled.div`
  ${props => props.theme.flexCenter}
  margin: 0 4px;
  height: auto;
  p {
    color: white;
    padding: 4px;
  }
  .market_price {
    font-size: 30px;
  }
  .market_text {
    font-size: 28px;
  }
  .action_descripton {
    font-size: 18px;
    opacity: 70%;
  }
  .action-_text {
    font-size: 16px;
  }
`;

const BuyOrBid = styled.button`
  ${props => props.theme.flexCenter}
  background-color: ${props => props.theme.colors.red};
  margin: 0 16px;
  padding: 8px 16px;
  border-radius: 4px;
  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }
`;

const SellOrAsk = styled.button`
  ${props => props.theme.flexCenter}
  background-color: ${props => props.theme.colors.green};
  margin: 0 12px;
  padding: 8px 16px;
  border-radius: 4px;
  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }
`;
