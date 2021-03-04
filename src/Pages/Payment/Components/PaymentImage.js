import React from "react";
import styled from "styled-components";

const PaymentImage = ({ data }) => {
  return (
    <ImageContainer>
      <ImageText>
        <ImageName>{data.name}</ImageName>
        <NumWrapper>
          <ImageNum>
            Highest Bid: <BoldText>${Math.round(data.highestBid)}</BoldText>
          </ImageNum>
          <ImageNum>
            Lowest Ask: <BoldText>${Math.round(data.lowestAsk)}</BoldText>
          </ImageNum>
        </NumWrapper>
        <SizeText>
          U.S. Men's Size <BoldText>{data.size}</BoldText>
        </SizeText>
      </ImageText>
      <ImageWrapper src={data.image} />
    </ImageContainer>
  );
};

export default PaymentImage;

const ImageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  background-color: white;
  width: 60%;
`;

const ImageText = styled.div`
  ${(props) => props.theme.flexColumnCenter};
  width: 500px;
  height: 120px;
`;

const ImageName = styled.h1`
  margin: 5px auto;
  font-size: 30px;
`;

const NumWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
`;
const ImageNum = styled.h2`
  margin: 0 10px;
  font-size: 18px;
`;

const SizeText = styled.p`
  margin: 10px auto;
  font-size: 18px;
`;
const BoldText = styled.strong`
  font-weight: bold;
`;

const ImageWrapper = styled.img`
  width: 600px;
  height: 400px;
`;
