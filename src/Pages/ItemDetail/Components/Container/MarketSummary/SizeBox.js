import React from "react";
import styled from "styled-components";

export default function SizeBox({ sizes }) {
  return (
    <Size>
      <label className="size_section">Size</label>
      <div className="dropdown">
        <span>{sizes}</span>
        <span className="dropIcon">⌵</span>
      </div>
    </Size>
  );
}

const Size = styled.div`
  padding-right: 24px;
  align-items: center;
  border-right: 0.5px solid lightgray;
  cursor: pointer;
  .size_section {
    margin: 0 auto;
    font-size: 20px;
    font-weight: 700;
    color: lightgray;
  }
  .dropdown {
    padding: 20px 0 20px 20px;
    span {
      font-size: 30px;
    }
    .dropIcon {
      margin-left: 16px;
    }
  }
`;
