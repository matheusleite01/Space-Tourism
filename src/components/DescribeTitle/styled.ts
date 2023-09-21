"use client";
import {styled, keyframes} from "styled-components";
import { theme } from "../../styles/theme";

const animaText = keyframes`
  from{
    opacity: 0;
    transform: translateX(-10px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }

`

export const DescribeInfo = styled.div`
  display: flex;
  gap: 28px;
  margin-bottom: 64px;
  animation: ${animaText} .5s ease-in forwards;
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    justify-content: center;
    gap: 18px;
    margin-bottom: 32px;
  }
`;

export const TitleDescribe = styled.h2`
  font-family: ${theme.font.family.barlowCondensed};
  font-size: ${theme.font.size.size_28px};
  letter-spacing: 4.725px;
  text-transform: uppercase;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    font-size: ${theme.font.size.size_20px};
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    font-size: ${theme.font.size.size_16px};
  }
`;
export const SpanDescribe = styled.span`
  font-family: ${theme.font.family.barlowCondensed};
  font-size: ${theme.font.size.size_28px};
  font-weight: ${theme.font.fontWeight.w700};
  letter-spacing: 4.725px;
  opacity: 0.25;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    font-size: ${theme.font.size.size_20px};
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    font-size: ${theme.font.size.size_16px};
  }
`;
