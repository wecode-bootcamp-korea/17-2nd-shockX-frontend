import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import MainImg from "./Components/MainImg";
import MyAccountModal from "./Components/MyAccountModal";
import { NAVDATA } from "./navData";

const Nav = () => {
  const [isMainImage, setIsMainImage] = useState(true);
  const [navData, setNavData] = useState([]);
  const [isMyAccountModal, setIsMyAccountModal] = useState(false);
  const history = useHistory();

  const handleScroll = () => {
    setIsMainImage(window.pageYOffset > 0 ? false : true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setNavData(NAVDATA);
  }, []);

  const showAccountModal = () => {
    setIsMyAccountModal(!isMyAccountModal);
  };

  const goToPage = (url) => {
    history.push(`${url}`);
  };

  const logOut = () => {
    localStorage.removeItem("Kakao_token");
    alert("You are logged out!");
  };

  return (
    <>
      <NavContainer isMainImage={isMainImage}>
        <NavLogo
          alt="NavLogo"
          src={
            isMainImage
              ? process.env.PUBLIC_URL + "/images/shockX_logo_black.svg"
              : process.env.PUBLIC_URL + "/images/shockX_logo_green.svg"
          }
          onClick={() => goToPage("/")}
        />
        {!isMainImage && (
          <SubInputContainer>
            <FontAwesomeIcon icon={faSearch} size="m" />
            <SubInput placeholder="Search for brand, color, etc." />
          </SubInputContainer>
        )}
        <NavMenu>
          <>
            {navData.map((menu) => {
              return <li key={menu.id}>{menu.title}</li>;
            })}
          </>
          {!localStorage.getItem("Kakao_token") && (
            <>
              <li onClick={() => goToPage("/account")}>Login</li>
              <li onClick={() => goToPage("/account")}>Sign Up</li>
            </>
          )}
          {localStorage.getItem("Kakao_token") && (
            <>
              <MyAccountMenu
                onClick={() => goToPage("/mypage")}
                onMouseOver={showAccountModal}
              >
                My Account
              </MyAccountMenu>
              <MyAccountModal isMyAccountModal={isMyAccountModal} />
              <li onClick={logOut}>Log Out</li>
            </>
          )}
          <SellBtn>Sell</SellBtn>
        </NavMenu>
      </NavContainer>
      {isMainImage && <MainImg />}
    </>
  );
};

export default Nav;

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  transition: background-color 1s linear 0s, box-shadow 1s linear 0s;
  background-color: ${(props) => (props.isMainImage ? "transparent" : "white")};
  border-bottom: ${(props) =>
    props.isMainImage ? "none" : "1px solid lightgrey"};
  box-shadow: ${(props) =>
    props.isMainImage ? "none" : "5px 5px 10px lightgrey"};
  width: 100%;
  min-width: 750px;
  height: 100px;
  z-index: 1000;
`;

const NavLogo = styled.img`
  margin: 0 40px;
  width: 90px;

  &:hover {
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 30px;

  li {
    padding-top: 10px;
    margin: 0 10px;
    letter-spacing: 0.03em;
    &:hover {
      cursor: pointer;
    }
  }
`;

const SellBtn = styled.li`
  padding: 10px;
  border: 1px solid grey;
  border-radius: 18px;
  &:hover {
    background-color: ${(props) => props.theme.colors.red};
    border-color: transparent;
    color: white;
  }
`;

const SubInputContainer = styled.div`
  ${(props) => props.theme.flexCenter};
  background-color: #fafafa;
  border-radius: 5px;
  padding: 5px 10px;
  width: 500px;
`;

const SubInput = styled.input`
  margin: 0px 3px;
  padding-left: 20px;
  background-color: #fafafa;
  border: none;
  width: 380px;
  height: 30px;
  &::placeholder {
    color: #616161;
    letter-spacing: 0.01em;
  }
`;

const MyAccountMenu = styled.li`
  padding-top: 10px;
  margin: 0 5px;
  letter-spacing: 0.03em;
`;
