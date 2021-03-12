import React from "react";

function DataFunction({ data }) {
  console.log("data>>>", data);
  const obj = Number(data.portfolio.length);
  return <div>{obj}</div>;
}

export default DataFunction;
