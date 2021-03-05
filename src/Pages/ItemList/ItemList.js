import React from "react";
import Nav from "../../Components/Nav/Nav";

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
      <div style={{ color: "#00000080" }}>
        test끝나고 삭제<button onClick={kakaoLogOut}>로그아웃</button>
      </div>
    </>
  );
};
export default ItemList;
