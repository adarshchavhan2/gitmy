import styled from "styled-components";
import Style from "./Style";

const { colors, radius, fonts, media } = Style;
const Repo = styled.section`
  height: auto;
  padding: 30px 10px;
  background: rgb(246, 248, 250);
  color: ${colors.dark};

  h2 {
    font-weight: 600;
    padding: 0 5px;
  }
  .repo-wrapper {
    margin: auto;
    margin-top: 30px;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 5px;
    .repo {
      background: #fff;
      box-shadow: 0px 0px 5px rgb(0, 0, 0, 0.1);
      padding: 15px;
      padding-bottom: 30px;
      border-radius: ${radius};
      position: relative;
      overflow: hidden;
      .heading {
        display: flex;
        align-items: center;
        gap: 10px;
        h3 {
          font-weight: 500;
          font-family: ${fonts.mono};
        }
      }
      .description {
        padding: 15px 0px;
        line-height: 1.5;
      }
      .more {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          display: flex;
          gap: 10px;
          margin: 10px;
          .inner {
            .iconify {
              width: 12px;
              height: 12px;
            }
            .text {
              margin: 0 4px;
            }
          }
        }
        .right {
          padding: 10px;
        }
      }
    }
  }
  @media (max-width: ${media.tab}) {
    .repo-wrapper {
      grid-template-columns: 1fr 1fr;
      max-width: 768px;
    }
  }
  @media (max-width: ${media.mobile}) {
    .repo-wrapper {
      grid-template-columns: 1fr;
      max-width: 576px;
    }
  }
`;

export default Repo;
