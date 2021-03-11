/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import SizeBtn from "./SizeBtn";
import styled from "styled-components";

export default function SizeModal({ sizes, updateIdx }) {
  const [buttonIdx, setButtonIdx] = useState(0);

  const handleIdx = buttonId => {
    setButtonIdx(buttonId);
    updateIdx(buttonId);
  };

  return (
    <Container>
      <header>
        <p className="modal_head">Selet A U.S Men's Size</p>
        <SizeChart>Size Chart</SizeChart>
      </header>
      <div className="size_button_container">
        {sizes.map((size, idx) => {
          return (
            <div onClick={() => handleIdx(idx)} key={size.size_id}>
              <SizeBtn
                key={size.size_id}
                sizeName={size.size_name}
                lowestAsk={size.lowest_ask}
                isButtonOn={buttonIdx === idx}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 352px;
  box-shadow: 4px 4px 10px gray;
  background-color: white;
  transform: translate(0%, -15%);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 10px 0 10px;

    .modal_head {
      font-size: 18px;
      font-weight: 700;
      padding: 8px 0px 6px 0;
    }
  }
  .size_button_container {
    ${({ theme }) => theme.flexCenter};
    height: 250px;
    justify-content: left;
    overflow: hidden;
    flex-wrap: wrap;
    overflow-y: scroll;
    scrollbar-width: thin;
  }
`;

const SizeChart = styled.button`
  border: none;
  font-size: 14px;
  font-weight: 700;
  color: green;
`;
