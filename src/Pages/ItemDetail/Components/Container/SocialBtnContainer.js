import React from "react";
import styled from "styled-components";

export default function SocialBtnContainer(props) {
  return (
    <Head>
      <div className="small_categories"></div>
      <div className="social_btn">
        <button>↑ SHARE</button>
        <button>+ PORTFOLIO</button>
        <button>+ FOLLOW</button>
      </div>
    </Head>
  );
}
const Head = styled.div`
  ${({ theme }) => theme.flexCenter};
  height: 60px;
  justify-content: space-between;
  .small_categories {
    width: 10px;
  }
  .social_btn {
    button {
      padding: 4px 12px;
      margin: 2px;
      border-radius: 15px;
      border: 0.5px solid black;
      font-size: 14px;
      font-weight: 600;
    }
  }
`;
