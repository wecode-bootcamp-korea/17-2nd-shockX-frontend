import React, { useState } from "react";
import styled from "styled-components";

const BillingInput = ({ item, handleInputInfo, inputs }) => {
  const [inputInfo, setInfo] = useState({ value: "" });
  const infoOnChange = (e) => {
    const { value, name } = e.target;
    handleInputInfo({ value, name });
    setInfo({ value });
  };

  return (
    <OneBillingInput>
      <BillingInputBox
        name={item.name}
        placeholder={item.text}
        onChange={infoOnChange}
        value={inputs[item.name]}
      />
      <InputInsideText>{item.text}</InputInsideText>
    </OneBillingInput>
  );
};

export default BillingInput;

const OneBillingInput = styled.div`
  position: relative;
  margin: 10px auto;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  width: 100%;
  height: 50px;

  &:focus-within {
    border-color: ${(props) => props.theme.colors.green};
  }
`;

const BillingInputBox = styled.input`
  padding-left: 20px;
  border: none;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  color: black;
  ::placeholder {
    color: #a7a7a7;
    font-size: 15px;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
  &:focus + p {
    visibility: visible;
  }
`;

const InputInsideText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  margin: 2px 0px 0px 20px;
  font-size: 11px;
  color: #a7a7a7;
  visibility: hidden;
`;
