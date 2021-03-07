import React from "react";
import styled from "styled-components";
import FeaturedItem from "./FeaturedItem";

const FeaturedList = ({ totalList, listTitleProps }) => {
  return (
    <ListContainer>
      {totalList.map((list, idx) => {
        return (
          <div key={idx}>
            <ListTitle>{listTitleProps[idx]}</ListTitle>
            <OneFeaturedList>
              {list.map((item, idx) => {
                return <FeaturedItem key={idx} product={item} />;
              })}
            </OneFeaturedList>
          </div>
        );
      })}
    </ListContainer>
  );
};

export default FeaturedList;

const ListContainer = styled.div`
  ${(props) => props.theme.flexColumnCenter};
  margin: 0 auto;
  width: 1200px;
`;

const OneFeaturedList = styled.div`
  display: flex;
  margin: 20px auto 50px;
`;

const ListTitle = styled.h1`
  margin: 50px 0 0px 20px;
  width: 1200px;
  font-size: 25px;
  letter-spacing: 0.07em;
`;
