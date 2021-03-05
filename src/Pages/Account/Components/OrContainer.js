import React from "react";
import styled from "styled-components";

const OrContainer = () => {
  return (
    <OrWrapper>
      <OrLine />
      <OrText>OR</OrText>
      <OrLine />
    </OrWrapper>
  );
};

export default OrContainer;

const OrWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px auto 8px;
`;
const OrLine = styled.div`
  border-bottom: 1.5px solid lightgrey;
  width: 155px;
  height: 2px;
`;

const OrText = styled.p`
  margin: 0 10px;
  font-size: 12px;
  color: grey;
`;
