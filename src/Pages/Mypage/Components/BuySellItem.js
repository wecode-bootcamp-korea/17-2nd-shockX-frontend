import React from "react";
import styled from "styled-components";

const BuyingItem = ({ item, currentTab, currentMenu }) => {
  const currentStatus =
    currentMenu === 2 ? "Item Delivered Successfully" : "Sales Complete";

  const buyPrice =
    currentMenu === 2 ? `$ ${item.bidPrice}` : `$ ${item.askPrice}`;
  const secondCell = currentTab === 0 ? `${buyPrice}` : item.orderNumber;
  const thirdCell =
    currentTab === 0 ? `$ ${item.highestBid}` : item.purchaseDate;
  const fourthCell =
    currentTab === 0 ? `$ ${item.lowestAsk}` : `$ ${item.price}`;
  const fifthCell = currentTab === 0 ? item.expires : currentStatus;

  return (
    <BuyingItemWrapper>
      <>
        <ItemNameBox>
          <ItemImage src={item.image} alt={item.name} />
          <div>
            {item.name}
            <p>Size: {item.size}</p>
          </div>
        </ItemNameBox>
        <td>{secondCell}</td>
        <td>{thirdCell}</td>
        <td>{fourthCell}</td>
        <td>{fifthCell}</td>
      </>
    </BuyingItemWrapper>
  );
};

export default BuyingItem;

const BuyingItemWrapper = styled.tr`
  height: 80px;
  border-bottom: 1px solid ${(props) => props.theme.colors.green};

  color: black;

  &:hover {
    background-color: rgb(7, 160, 91, 0.7);
  }

  td {
    font-size: 17px;
    padding-left: 8px;
    text-align: left;
    vertical-align: middle;
    div {
      width: 280px;
    }
    p {
      border: 1px solid ${(props) => props.theme.colors.green};
      border-radius: 15px;
      background-color: ${(props) => props.theme.colors.green};
      color: white;
      width: 70px;
      height: 20px;
      padding-top: 2px;
      text-align: center;
      font-size: 13px;
      margin: 3px 0px;
    }
  }
`;

const ItemNameBox = styled.td`
  display: flex;
  align-items: center;
  padding-top: 13px;
`;
const ItemImage = styled.img`
  margin-right: 10px;
  width: 70px;
  height: 50px;
  object-fit: cover;
`;
