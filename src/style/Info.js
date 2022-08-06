import styled from "styled-components";
import Style from "./Style";

const { colors, radius, fonts, media } = Style;
const Info = styled.section`
  text-align: center;
  padding: 90px 0px;
  .back-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    color: ${colors.primary};
  }
  .avatar {
    width: 140px;
    padding: 7px;
    border-radius: 50%;
    background: ${colors.primary};
  }
  .name {
    color: ${colors.light};
    margin: 5px;
    font-weight: 600;
    letter-spacing: 0px;
  }
  .username {
    color: ${colors.primary};
    margin: 10px;
    font-family: ${fonts.mono};
    font-weight: 500;
  }
  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      color: ${colors.light};
      font-size: 14px;
      display: flex;
      align-items: center;
      margin: 5px 10px;
      span {
        padding: 5px;
      }
    }
  }

  .brief {
    color: ${colors.light};
    display: flex;
    justify-content: center;
    margin: 15px 0;
    gap: 10px;
    li {
      background: ${colors.dark1};
      padding: 15px 20px;
      border-radius: ${radius};
      display: flex;
      flex-direction: column;
      .no {
        font-weight: 500;
      }
      .text {
        margin-top: 5px;
        padding: 5px;
        font-size: 12px;
        letter-spacing: 1px;
      }
    }
  }

  @media (max-width: ${media.mobile}) {
    padding-bottom: 0px;
    .info {
      flex-direction: column;
    }
    .brief {
      transform: scale(0.9);
      flex-direction: column;
      align-items: center;
      li {
        width: 180px;
        .text {
          font-size: 12px;
        }
      }
    }
  }
`;
export default Info;