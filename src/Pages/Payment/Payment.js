/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import PaymentNav from "./Components/PaymentNav";
import PaymentFooter from "./Components/PaymentFooter";
import PaymentImage from "./Components/PaymentImage";
import PaymentDetail from "./Components/PaymentDetail";
import Expiration from "./Components/Expiration";
import ShippingInfoPage from "./Components/ShippingInfoPage";
import ReviewBilling from "./Components/ReviewBilling";
import {
  buyProps,
  sellProps,
  buyWarningMsg,
  sellWarningMsg,
  billingProps,
  notAvailableProps,
} from "./paymentData";
import { ORDERAPI } from "../../Config";

const Payment = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [detailData, setDetailData] = useState({});
  const [isBuy, setIsBuy] = useState(1);
  const [isPlace, setIsPlace] = useState(0);
  const [messageText, setMessageText] = useState("");
  const [isShowAddFeeList, setIsShowAddFeeList] = useState(false);
  const [expirationNum, setExpirationNum] = useState(30);
  const [buyTotalPrice, setBuyTotalPrice] = useState(0);
  const [sellTotalPrice, setSellTotalPrice] = useState(0);
  const [isAsk, setIsAsk] = useState(true);
  const [isBid, setIsBid] = useState(true);
  const [inputs, setInputs] = useState({
    buyInput: "",
    sellInput: "",
    name: "",
    country: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
  });
  const {
    buyInput,
    sellInput,
    name,
    country,
    address,
    address2,
    city,
    state,
    zipCode,
    phoneNumber,
  } = inputs;

  let useParam = useParams();
  const history = useHistory();

  // useEffect(() => {
  //   if (useParam.id === "buy") {
  //     setIsBuy(0);
  //   } else {
  //     setIsBuy(1);
  //   }
  //   fetch("/Data/PaymentData.json", {
  //     method: "GET",
  //     headers: {
  //       Authorization: localStorage.getItem("Kakao_token"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setDetailData(data));
  // }, [useParam.id]);

  //백앤드와 통신할때
  useEffect(() => {
    if (useParam.id === "buy") {
      setIsBuy(0);
    } else {
      setIsBuy(1);
    }
    fetch(`${ORDERAPI}/${useParam.id}/1?size=15`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("Kakao_token"),
      },
    })
      .then(res => res.json())
      .then(data => {
        setDetailData(data.data.product);
        setInputs({
          name: data.data.shippingInfo.name,
          city: data.data.shippingInfo.city,
          country: data.data.shippingInfo.country,
          zipCode: data.data.shippingInfo.postalCode,
          phoneNumber: data.data.shippingInfo.phoneNumber,
          address: data.data.shippingInfo.primaryAddress,
          address2: data.data.shippingInfo.secondaryAddress,
          state: data.data.shippingInfo.state,
        });
      });
  }, [useParam.id]);

  const sumbitPaymentInfo = () => {
    fetch(`${ORDERAPI}/${useParam.id}/1?size=15`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("Kakao_token"),
      },
      body: JSON.stringify({
        city: city,
        country: country,
        isAsk: isAsk === false ? "0" : "1",
        isBid: isBid === false ? "0" : "1",
        totalPrice: isBuy === 0 ? buyTotalPrice : sellTotalPrice,
        name: name,
        phoneNumber: phoneNumber,
        postalCode: zipCode,
        price: isBuy === 0 ? buyInput : sellInput,
        primaryAddress: address,
        secondaryAddress: address2,
        state: state,
        expirationDate: expirationNum,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === "SUCCESS") {
          alert("Your Order is Confirmed!");
          history.push("/");
        } else alert("Payment Failed");
      });
  };

  const changeIdxHanlder = idx => {
    if (idx < 2) {
      setCurrentIdx(idx + 1);
    }
  };
  const changeTabHandler = id => {
    setIsPlace(id);
    setIsBid(!isBid);
    setIsAsk(!isAsk);
  };

  const handleInputNum = e => {
    setInputs({
      ...inputs,
      [e.name]: e.value,
    });
  };

  const handleInputInfo = e => {
    setInputs({
      ...inputs,
      [e.name]: e.value,
    });
  };

  const messageHandler = e => {
    if (e.key === "Enter") {
      if (buyInput || sellInput) {
        setIsShowAddFeeList(true);
      }
      if (isBuy === 0) {
        if (Number(buyInput) < detailData.highestBid) {
          setMessageText(buyWarningMsg.lessThanHigh);
        }
        if (Number(buyInput) === detailData.highestBid) {
          setMessageText(buyWarningMsg.equalToHigh);
        }
        if (Number(buyInput) > detailData.highestBid) {
          setMessageText(buyWarningMsg.greaterThanHigh);
        }
        if (
          detailData.lowestAsk !== 0 &&
          Number(buyInput) >= detailData.lowestAsk
        ) {
          setMessageText(buyWarningMsg.greaterThanLow);
          setIsPlace(1);
          setInputs({ buyInput: detailData.lowestAsk });
        }
      }
      if (isBuy === 1) {
        if (
          Number(sellInput) < detailData.lowestAsk &&
          Number(sellInput) > detailData.highestBid
        ) {
          setMessageText(sellWarningMsg.lessThanLow);
        }
        if (Number(sellInput) === detailData.lowestAsk) {
          setMessageText(sellWarningMsg.equalToLow);
        }
        if (Number(sellInput) > detailData.lowestAsk) {
          setMessageText(sellWarningMsg.greaterThanLow);
        }
        if (Number(sellInput) <= detailData.highestBid) {
          setMessageText(sellWarningMsg.lessThanHigh);
          setIsPlace(1);
          setInputs({ sellInput: detailData.highestBid });
        }
      }
      setBuyTotalPrice(buyTotal);
      setSellTotalPrice(sellTotal);
    }
  };

  const expirationHandler = e => {
    setExpirationNum(e.target.value);
  };

  const buyNum = Number(buyInput);
  const sellNum = Number(sellInput);
  const processingFee = Math.round(100 * buyInput * 0.03) / 100;
  const shippingFee = 13.95;
  const transactionFee = Math.round(100 * sellInput * 0.095) / 100;
  const paymentProc = Math.round(100 * sellInput * 0.03) / 100;
  const buyTotal =
    Math.round(100 * (processingFee + shippingFee + buyNum)) / 100;
  const sellTotal =
    Math.round(100 * (transactionFee + paymentProc + shippingFee + sellNum)) /
    100;

  return (
    <>
      <PaymentNav />
      <PaymentPage>
        <PaymentImage data={detailData} />
        <PaymentRight>
          {currentIdx === 0 && (
            <>
              <SizeContainer>
                <SizeText>U.S. Men's Size {detailData.size}</SizeText>
                <PenIcon
                  alt="Pen"
                  src={process.env.PUBLIC_URL + `/images/Payment/pen.svg`}
                />
              </SizeContainer>
              <PaymentDetail
                data={detailData}
                format={isBuy === 0 ? buyProps : sellProps}
                isBuy={isBuy}
                isPlace={isPlace}
                changeTabHandler={changeTabHandler}
                handleInputNum={handleInputNum}
                messageHandler={messageHandler}
                messageText={messageText}
                isShowAddFeeList={isShowAddFeeList}
                buyInput={buyInput}
                sellInput={sellInput}
                buyTotal={buyTotal}
                sellTotal={sellTotal}
                notAvailableProps={notAvailableProps}
              />
              {isPlace === 0 && (
                <Expiration
                  isBuy={isBuy}
                  expirationNum={expirationNum}
                  expirationHandler={expirationHandler}
                />
              )}
            </>
          )}
          {currentIdx === 1 && (
            <ShippingInfoPage
              data={billingProps}
              handleInputInfo={handleInputInfo}
              inputs={inputs}
            />
          )}
          {currentIdx === 2 && (
            <ReviewBilling
              data={detailData}
              buyTotalPrice={buyTotalPrice}
              sellTotalPrice={sellTotalPrice}
              expirationNum={expirationNum}
              buyInput={buyInput}
              sellInput={sellInput}
              isBuy={isBuy}
              isPlace={isPlace}
              name={name}
              phoneNumber={phoneNumber}
              address={address}
              city={city}
              state={state}
              country={country}
              zipCode={zipCode}
            />
          )}
        </PaymentRight>
      </PaymentPage>
      <PaymentFooter
        isBuy={isBuy}
        changeIdxHanlder={changeIdxHanlder}
        currentIdx={currentIdx}
        sumbitPaymentInfo={sumbitPaymentInfo}
      />
    </>
  );
};

export default Payment;

const PaymentPage = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: #fafafa;
`;

const PaymentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 100%;
  background-color: #fafafa;
`;

const SizeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  height: 60px;
  margin: 20px 0px;
  padding: 0px 10px 0px 20px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 3px;
`;

const SizeText = styled.p`
  font-weight: bold;
  color: #1e222f;
`;

const PenIcon = styled.img`
  margin: 0 10px;
  width: 10px;
`;
