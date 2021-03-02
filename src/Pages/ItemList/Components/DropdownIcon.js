import React from "react";
import styled from "styled-components";

const DropdownIcon = (props) => (
  <SvgIcon
    className="dropdownIcon"
    viewBox="0 0 16 16"
    fill="currentColor"
    width="1em"
    height="1em"
  >
    <path
      fillRule="evenodd"
      d="M8.146 11.942a.213.213 0 01-.292 0L2.5 6.854 3.393 6l4.606 4.372L12.607 6l.893.854-5.354 5.088z"
    ></path>
  </SvgIcon>
);

export default DropdownIcon;

const SvgIcon = styled.svg`
  width: 16px;
  height: 16px;
`;
