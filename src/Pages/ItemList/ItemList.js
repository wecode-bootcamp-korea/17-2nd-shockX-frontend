import React from "react";
import Nav from "../../Components/Nav/Nav";
import TickerComp from "../../Components/TickerComp/TickerComp";
import styled from "styled-components";

const ItemList = () => {
  const kakaoLogOut = () => {
    window.Kakao.Auth.logout(function (response) {
      alert(response + "logout");
      localStorage.removeItem("Kakao_token");
    });
  };
  return (
    <>
      <Nav />
      <MAINTEST style={{ color: "#00000080" }}>
        test끝나고 삭제<button onClick={kakaoLogOut}>로그아웃</button>
      </MAINTEST>
      <TickerComp />
    </>
  );
};
export default ItemList;

const MAINTEST = styled.div`
  background-color: ivory;
  width: 100%;
  height: 2000px;
`;
