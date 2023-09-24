"use client";
import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";

const animaTitle = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const animaSpan = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 0.5042;
  }
`;

const animaContent = keyframes`
  from{
    opacity: 0;
    transform: translateX(-5px)
  }
  to{
    opacity: 1;
    transform: translateX(0px);
  }
`;

const animaImg = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    position: static;
    flex-direction: column;
    text-align: center;
    gap: 22px;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    flex-direction: column-reverse;
  }
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 450px;
  align-items: center;
  z-index: 5;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    grid-template-rows: auto;
    gap: 40px;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 32px;
  }
`;

export const SubTitle = styled.span`
  color: ${theme.color.colorWhite};
  font-family: ${theme.font.family.bellefair};
  font-size: ${theme.font.size.size_32px};
  line-height: normal;
  text-transform: uppercase;
  opacity: 0.5042;
  animation: ${animaSpan} 0.8s ease-in forwards;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    font-size: ${theme.font.size.size_24px};
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    font-size: ${theme.font.size.size_16px};
  }
`;

export const Title = styled.h1`
  color: ${theme.color.colorWhite};
  font-family: ${theme.font.family.bellefair};
  font-size: ${theme.font.size.size_56px};
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 27px;
  margin-top: 15px;
  animation: ${animaTitle} 0.8s ease-in forwards;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    margin-bottom: 16px;
    margin-top: 8px;
    font-size: ${theme.font.size.size_40px};
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    font-size: ${theme.font.size.size_24px};
  }
`;

export const Paragraph = styled.p`
  max-width: 444px;
  color: ${theme.color.colorNeutral};
  font-family: ${theme.font.family.barlow};
  font-size: ${theme.font.size.size_18px};
  line-height: 32px;
  animation: ${animaContent} 0.7s ease-in forwards;

  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    max-width: 530px;
    font-size: ${theme.font.size.size_16px};
    line-height: 28px;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    font-size: ${theme.font.size.size_15px};
  }
`;

export const ImgContainer = styled.div`
  position: absolute;
  right: 100px;
  bottom: 0;
  z-index: 1;
  img{
    animation: ${animaImg} .5s ease-in forwards;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    top: auto;
    right: auto;
    bottom: 0px;
    img {
      width: 400px;
      height: auto;
    }
    img[alt="image-mark-shuttleworth"] {
      width: 368px;
      height: 500px;
    }
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    position: static;
    width: 100%;
    border-bottom: 1px solid #383b4b;
    img {
      width: 177px;
      margin: 0 auto;
    }
    img[alt="image-mark-shuttleworth"] {
      width: 177px;
      height: 222px;
    }
  }
`;

export const NavInput = styled.div`
  input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &::before {
      content: "";
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 24px;
      border-radius: 50%;
      background-color: #fff;
      opacity: 0.1744;
      cursor: pointer;
      transition: 0.2s;
      @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
        width: 10px;
        height: 10px;
        margin-right: 16px;
      }
    }

    &:hover::before {
      opacity: 0.5001;
    }

    &:checked::before {
      background-color: #fff;
      opacity: 1;
    }
  }
`;
