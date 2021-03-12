import React from "react";
import TotalBox from "./TotalBox";
import styled from "styled-components";

function TotalContainer({ data }) {
  return (
    <Form>
      <Empty>*</Empty>
      <Banner>
        <SectionBanner>TOTALS</SectionBanner>
      </Banner>
      <TotalBox data={data} />
    </Form>
  );
}

export default TotalContainer;

const Form = styled.div`
  width: 40%;
`;

const Empty = styled.button`
  width: 100%;
  padding: 8px 16px;
  color: white;
  border-bottom: 1px solid lightgray;
`;

const Banner = styled.div`
  ${({ theme }) => theme.flexCenter}
  justify-content: start;
  align-items: flex-start;
  height: 50px;
  margin-bottom: 12px;
`;

const SectionBanner = styled.div`
  ${({ theme }) => theme.flexCenter}
  height: 40px;
  background-color: #2e2e2e;
  padding: 4px 16px;
  font-weight: 600;
  color: white;
`;
