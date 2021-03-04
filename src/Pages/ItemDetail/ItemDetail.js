import React from "react";
import { useHistory } from "react-router-dom";

const ItemDetail = (props) => {
  const history = useHistory();
  const goToBuy = () => {
    history.push("/order/buy");
  };

  const goToSell = () => {
    history.push("/order/sell");
  };
  return (
    <div>
      <button onClick={goToBuy}>Buy</button>
      <button onClick={goToSell}>Sell</button>
    </div>
  );
};

export default ItemDetail;
