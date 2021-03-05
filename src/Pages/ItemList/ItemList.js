import React from "react";
import Nav from "../../Components/Nav/Nav";

const ItemList = () => (
  <>
    <Nav />
    <div style={{ color: "#00000080" }}>test</div>
    <img
      alt="delete"
      src={process.env.PUBLIC_URL + "/images/shockX_logo_black.svg"}
    />
  </>
);
export default ItemList;
