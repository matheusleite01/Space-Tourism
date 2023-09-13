"use client";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import imageDesktop from "../../assets/destination/background-destination-desktop.jpg";
import imageTablet from "../../assets/destination/background-destination-tablet.jpg";
import imageMobile from "../../assets/destination/background-destination-mobile.jpg";

export const ImgBg = styled.section`
  display: block;
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
    overflow-y: scroll;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    background: url(${imageMobile.src}) no-repeat center;
    background-size: cover;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  align-items: center;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    min-height: auto;
    margin-top: 120px;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    margin-top: 89px;
  }
`;