import styled from "styled-components";
import Style from "./Style";

const { colors, radius, transition } = Style;
const NotFound = styled.section`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  .iconify {
    color: ${colors.primary};
    width: 190px;
    height: 190px;
  }
  p {
    color: ${colors.primary};
    letter-spacing: 1px;
    font-size: 20px;
    margin-top: -30px;
  }
  .btn {
    padding: 7px 25px;
    font-size: 20px;
    color: ${colors.primary};
    border: 1.5px solid ${colors.primary};
    margin-top: 25px;
    border-radius: ${radius};
    box-shadow: 0px 0px 5px ${colors.primary};
    position: relative;
    top: 5px;
    transition: ${transition};

    &:hover,
    &active {
      box-shadow: 0px 5px 10px ${colors.primary};
      top: 0px;
    }
  }
  small {
    color: ${colors.primary};
    font-size: 14px;
    margin-top: 20px;
    .no {
      color: ${colors.light};
    }
  }
`;

export default NotFound;
