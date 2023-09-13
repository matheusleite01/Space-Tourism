"use client";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 450px;
  align-items: center;
`;

export const SubTitle = styled.span`
  color: ${theme.color.colorWhite};
  font-family: ${theme.font.family.bellefair};
  font-size: ${theme.font.size.size_32px};
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 15px;
  opacity: 0.5042;
`;

export const Title = styled.h1`
  color: ${theme.color.colorWhite};
  font-family: ${theme.font.family.bellefair};
  font-size: ${theme.font.size.size_56px};
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 27px;
`;

export const Paragraph = styled.p`
  max-width: 444px;
  color: ${theme.color.colorNeutral};
  font-family: ${theme.font.family.barlow};
  font-size: ${theme.font.size.size_18px};
  line-height: 32px;
`;

export const ImgContainer = styled.div`
  position: absolute;
  top: -65px;
  right: 0;
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
      padding: 5px;
      margin-right: 24px;
      border-radius: 50%;
      background-color: #fff;
      opacity: 0.1744;
      cursor: pointer;
      transition: 0.2s;
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
