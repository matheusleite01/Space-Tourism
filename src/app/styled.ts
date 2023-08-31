import styled from "styled-components";
import { theme } from "../styles/theme";
import imageDesktop from "../assets/home/background-home-desktop.jpg";
import imageTablet from "../assets/home/background-home-tablet.jpg";
import imageMobile from "../assets/home/background-home-mobile.jpg";

export const ImgBg = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(${imageDesktop.src}) no-repeat center;
  background-size: cover;
  z-index: 1;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    background: url(${imageTablet.src}) no-repeat center;
    background-size: cover;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    background: url(${imageMobile.src}) no-repeat center;
    background-size: cover;
  }
`;

export const Container = styled.div`
  min-height: 79vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    min-height: auto;
    flex-direction: column;
    align-items: center;
    gap: 156px;
    margin-top: 195px;
    text-align: center;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    margin-top: 130px;
    gap: 80px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  p:first-child {
    max-width: 100%;
    font-family: ${theme.font.family.barlowCondensed};
    font-size: ${theme.font.size.size_28px};
    color: ${theme.color.colorNeutral};
    letter-spacing: 4.725px;
  }

  p {
    max-width: 374px;
    font-family: ${theme.font.family.barlowCondensed};
    font-size: ${theme.font.size.size_18px};
    color: ${theme.color.colorNeutral};
    line-height: 32px;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    align-items: center;
    p:first-child {
      font-size: ${theme.font.size.size_20px};
    }
    p {
      max-width: 352px;
      font-size: ${theme.font.size.size_16px};
      text-align: center;
      line-height: 28px;
    }
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    gap: 16px;
    p:first-child {
      font-size: ${theme.font.size.size_16px};
    }
    p {
      max-width: 352px;
      font-size: ${theme.font.size.size_15px};
      line-height: 25px;
    }
  }
`;
