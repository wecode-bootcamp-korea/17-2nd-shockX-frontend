/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";

function ScrollSlider({ handleScrollValue }) {
  return (
    <Container>
      <div>
        <input type="range" min={0} max={25} onChange={handleScrollValue} />
      </div>
    </Container>
  );
}

export default ScrollSlider;

const Container = styled.div`
  ${({ theme }) => theme.flexCenter};
  width: 100%;
  margin-bottom: 30px;

  div {
    width: 60%;

    input {
      flex: 1;
      -webkit-appearance: none;
      width: 100%;
      height: 6px;
      border-radius: 4px;
      background-color: #efefef;
      outline: none;
      opacity: 0.7;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: auto;
        appearance: none;
        width: 17px;
        height: 17px;
        border: 2px solid;
        border-radius: 50%;
        cursor: grab;
        background-color: #fff;
      }
    }
  }
`;
