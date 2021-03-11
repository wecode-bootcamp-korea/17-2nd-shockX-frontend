import React from "react";
import styled from "styled-components";

export default function LabelBanner(props) {
  return (
    <Banner>
      <SectionBanner>LATEST SALE</SectionBanner>
    </Banner>
  );
}

const Banner = styled.div`
  ${({ theme }) => theme.flexCenter}
  align-items: flex-start;
  height: 50px;
`;

const SectionBanner = styled.div`
  ${({ theme }) => theme.flexCenter}
  height: 40px;
  background-color: #2e2e2e;
  padding: 4px 16px;
  font-weight: 600;
  color: white;
`;
