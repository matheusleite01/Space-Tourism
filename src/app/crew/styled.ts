'use client';
import styled from "styled-components";
import {theme} from '../../styles/theme';
import imageDesktop from "../../assets/crew/background-crew-desktop.jpg";
import imageTablet from "../../assets/crew/background-crew-tablet.jpg";
import imageMobile from "../../assets/crew/background-crew-mobile.jpg";

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