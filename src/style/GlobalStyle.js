import { createGlobalStyle } from "styled-components";
import Style from "./Style";

const { colors, fonts } = Style;

export const GlobalStyle = createGlobalStyle`
  
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${fonts.serif};
  }
  html{
    background: ${colors.dark};
  }
  &::-webkit-scrollbar{
    width: 10px;
    background-color: #e0e0e0;
  }
  &::-webkit-scrollbar-thumb{
    background-color: ${colors.primary};
    border-radius: 10px;
  }
  h2{
    font-size: 32px;
  }
  h3{
    font-size: 20px;
  }
  p{
    font-size: 14px;
  }
  small{
    font: 12px;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;
