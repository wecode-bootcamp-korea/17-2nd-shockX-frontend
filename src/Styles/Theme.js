import { css } from "styled-components";

const colors = {
  red: "#FF6060",
  green: "#08a05c",
  black: "#010101",
  lightGray: "#fafafa",
  fontGray: "#00000080",
};

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const theme = {
  colors,
  flexCenter,
};

export default theme;