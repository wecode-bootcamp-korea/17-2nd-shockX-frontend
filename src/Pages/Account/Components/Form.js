import React from "react";
import styled from "styled-components";
import Input from "./Input";

const Form = ({
  format,
  handleInput,
  signUpValidation,
  signInValidation,
  submitBtn,
  checked,
  handleCheckBox,
  goToMain,
}) => {
  return (
    <>
      <div
        onKeyUp={format.type === "signUp" ? signUpValidation : signInValidation}
      >
        {format.data.map((inputData) => (
          <Input
            key={inputData.id}
            input={inputData}
            handleInput={handleInput}
          />
        ))}
      </div>
      {format.type === "signUp" && (
        <>
          <PasswordText>
            At least 8 characters, 1 uppercase letter, 1 number & 1 symbol
          </PasswordText>
          <SignUpAgreement>
            <input
              type="checkbox"
              defaultChecked={checked}
              onClick={handleCheckBox}
            />
            <p>
              By signing up, you agree to the <strong>Terms of Service</strong>{" "}
              and
              <strong> Privacy Policy</strong>
            </p>
          </SignUpAgreement>
        </>
      )}
      {format.type === "signIn" && <ForgotPW>Forgot Password?</ForgotPW>}
      <SubmitButton submitBtn={submitBtn} onClick={goToMain}>
        {format.text}
      </SubmitButton>
      {format.type === "signIn" && (
        <LogInAgreement>
          By logging in, you agree to the <strong>Terms of Service</strong> and
          <strong> Privacy Policy</strong>
        </LogInAgreement>
      )}
    </>
  );
};

export default Form;

const SubmitButton = styled.button`
  margin-bottom: 20px;
  width: 350px;
  height: 50px;
  background: ${(props) => (props.submitBtn ? "#08a05c" : "#c7c7c7")};
  border-radius: 3px;
  border: none;
  font-size: 15px;
  font-weight: bold;
  color: white;

  &:hover {
    background-color: ${(props) => props.theme.colors.green};
  }
`;

const PasswordText = styled.p`
  margin: 3px 0 30px 0;
  width: 350px;
  font-size: 11px;
`;

const SignUpAgreement = styled.div`
  display: flex;
  align-items: center;
  width: 330px;
  margin: 0px 25px 20px 0px;
  font-size: 11px;
  color: grey;
  input {
    margin-right: 15px;
  }
  p {
    strong {
      color: black;
      font-weight: bold;
    }
  }
`;

const ForgotPW = styled.p`
  margin-bottom: 30px;
  width: 352px;
  text-align: right;
  font-size: 12px;
  color: grey;
  &:hover {
    cursor: pointer;
  }
`;

const LogInAgreement = styled.p`
  margin-bottom: 20px;
  text-align: center;
  width: 352px;
  font-size: 11px;
  color: grey;
  strong {
    color: black;
    font-weight: bold;
  }
`;
