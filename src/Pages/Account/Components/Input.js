import React, { useState } from "react";
import styled from "styled-components";

const Input = ({ input, handleInput }) => {
  const [inputText, setInput] = useState({ value: "" });
  const textOnChange = (e) => {
    const { value, name } = e.target;
    handleInput({ value: value, name: name });
    setInput({ value: value });
  };
  return (
    <InputWrapper>
      <input
        name={input.name}
        type={input.type}
        placeholder={input.text}
        onChange={textOnChange}
        value={inputText.value}
      />
      <p>{input.text}</p>
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  position: relative;
  margin: 10px auto;
  border: 1px solid #e0e0e0;
  border-radius: 3px;

  input {
    margin: 10px auto;
    padding-left: 20px;
    border: none;
    width: 350px;
    height: 35px;
    color: black;

    ::placeholder {
      color: #a7a7a7;
      font-size: 15px;
    }
  }

  p {
    position: absolute;
    top: 0;
    left: 0;
    margin: 5px 0px 0px 20px;
    font-size: 11px;
    color: #a7a7a7;
    visibility: hidden;
  }
  input:focus::-webkit-input-placeholder {
    color: transparent;
  }
  input:focus + p {
    visibility: visible;
  }
  &:focus-within {
    border-color: black;
  }
`;
