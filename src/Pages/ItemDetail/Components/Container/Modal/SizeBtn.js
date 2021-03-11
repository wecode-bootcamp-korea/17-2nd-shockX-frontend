import React, { useState } from "react";
import styled from "styled-components";

export default function SizeBtn({ isButtonOn, sizeName, lowestAsk }) {
  return (
    <Container>
      <button className={isButtonOn ? "buttonOn" : "buttonDown"}>
        US {sizeName}
        {lowestAsk === 0 ? (
          <p className="sell">bid</p>
        ) : (
          <p className="buy">${lowestAsk}</p>
        )}
      </button>
    </Container>
  );
}

const Container = styled.div`
  button {
    width: 74px;
    height: 60px;
    margin: 5px;
    border: 0.5px solid lightgray;
    font-size: 18px;
    font-weight: 700;

    &:hover {
      background-color: #eef7eb;
      transition: 0.2s;
    }
  }
  .buttonOn {
    background-color: #eef7eb;
  }

  .buttonDown {
    background-color: white;
  }

  .buy {
    margin-top: 3px;
    font-size: 14px;
    color: green;
  }
  .sell {
    margin-top: 3px;
    font-size: 14px;
    color: red;
  }
`;
