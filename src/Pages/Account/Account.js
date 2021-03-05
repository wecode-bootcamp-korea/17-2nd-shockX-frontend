import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Form from "./Components/Form";
import AccountNav from "./Components/AccountNav";
import AccountTab from "./Components/AccountTab";
import OrContainer from "./Components/OrContainer";
import { KAKAOAPI } from "../../Config";

const Account = () => {
  const [currentTab, setCurrentTab] = useState(false);
  const [submitBtn, setSubmitBtn] = useState(false);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    signUpEmail: "",
    signUpPassword: "",
    signInEmail: "",
    signInPassword: "",
  });
  const [checked, setChecked] = useState(false);
  const { signUpEmail, signUpPassword, signInEmail, signInPassword } = inputs;

  const history = useHistory();

  const loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        fetch(KAKAOAPI, {
          method: "POST",
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.setItem("Kakao_token", res.access_token);
            if (res.access_token) {
              alert("You are Logged In with Kakao!");
              history.push("/");
            } else alert("Failed to Log In");
          });
      },
      fail: function (err) {
        console.log("Error", err);
      },
    });
  };

  const handleCheckBox = (e) => {
    setChecked(!checked);
  };

  const handleInput = (e) => {
    setInputs({
      ...inputs,
      [e.name]: e.value,
    });
  };

  const validation = () => {
    const inputFilled =
      (signUpEmail.length || signInEmail.length) > 0 &&
      (signUpPassword.length || signInPassword.length) > 0;
    if (inputFilled) {
      setSubmitBtn(true);
    }
  };

  const goToMain = () => {
    history.push("/");
  };

  return (
    <>
      <AccountNav />
      <AccountBody>
        <AccountBox>
          <AccountTab
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            signUpText={signUpProps.text}
            signInText={signInProps.text}
          />
          <SocialButtonWrapper onClick={loginWithKakao}>
            <KakaoImg
              alt="kakaoIcon"
              src={process.env.PUBLIC_URL + "/images/Account/kakao-talk.png"}
            />
            <SocialButton>Continue with Kakao</SocialButton>
          </SocialButtonWrapper>
          <OrContainer />
          <InputContainer>
            {currentTab ? (
              <Form
                format={signUpProps}
                handleInput={handleInput}
                signUpValidation={validation}
                submitBtn={submitBtn}
                checked={checked}
                handleCheckBox={handleCheckBox}
              />
            ) : (
              <Form
                format={signInProps}
                handleInput={handleInput}
                signInValidation={validation}
                submitBtn={submitBtn}
                goToMain={goToMain}
              />
            )}
          </InputContainer>
        </AccountBox>
      </AccountBody>
    </>
  );
};

export default Account;

const signUpProps = {
  type: "signUp",
  text: "Sign Up",
  data: [
    { id: 1, name: "firstName", type: "text", text: "First Name" },
    { id: 2, name: "lastName", type: "text", text: "Last Name" },
    { id: 3, name: "signUpEmail", type: "email", text: "Email Address" },
    { id: 4, name: "signUpPassword", type: "password", text: "Password" },
  ],
};

const signInProps = {
  type: "signIn",
  text: "Sign In",
  data: [
    { id: 5, name: "signInEmail", type: "email", text: "Email Address" },
    { id: 6, name: "signInPassword", type: "password", text: "Password" },
  ],
};

const SocialButton = styled.button`
  background-color: transparent;
  color: #3a1d1d;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 0.02em;
`;

const KakaoImg = styled.img`
  margin: auto 10px;
  width: 20px;
`;

const SocialButtonWrapper = styled.div`
  ${(props) => props.theme.flexCenter};
  width: 350px;
  height: 55px;
  border: 1px solid grey;
  border-radius: 3px;

  &:hover {
    transition: background 0.5s;
    cursor: pointer;
    background-color: #f7e600;
    border: none;
  }
`;

const InputContainer = styled.section`
  ${(props) => props.theme.flexColumnCenter};
  width: 200px;
`;

const AccountBox = styled.div`
  ${(props) => props.theme.flexColumnCenter};
  margin: 180px 0px 200px;
  background-color: white;
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 3px;
`;

const AccountBody = styled.div`
  ${(props) => props.theme.flexCenter};
  background-color: #fafafa;
`;
