import React from "react";
import styled from "styled-components";

function TotalContainer(props) {
  return (
    <Form>
      <Empty></Empty>
      <body></body>
    </Form>
  );
}

export default TotalContainer;

const Form = styled.div`
  width: 30%;
  border-bottom: 1px solid lightgray;
`;

const Empty = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
`;
