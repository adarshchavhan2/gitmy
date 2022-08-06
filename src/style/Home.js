import styled from "styled-components";
import Style from "./Style";

const { colors, fonts, radius, media } = Style;

const Home = styled.section`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .iconify {
    height: 150px;
    width: 150px;
    color: ${colors.primary};
    padding-bottom: 15px;
  }
  .tagline {
    color: ${colors.primary};
    font-weight: 400;
    letter-spacing: 2px;
    padding-bottom: 25px;
  }
  .search-bar {
    padding: 10px 15px;
    font-size: 32px;
    font-family: ${fonts.mono};
    text-align: center;
    border: 0;
    outline: 0;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-radius: ${radius};
    background: ${colors.dark1};
    color: ${colors.light};
    text-transform: lowercase;

    &:hover,
    &focus {
      box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
    }
  }
  @media (max-width: ${media.mobile}) {
    .search-bar {
      font-size: 23px;
    }
  }
`;
export default Home;
