import { styled, keyframes } from "styled-components";
import { theme } from "../../styles/theme";

const anima = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const animaTitle = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 157px;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    flex-direction: column;
    gap: 56px;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    gap: 26px;
  }
`;

export const Img = styled.div`
  img {
    animation: ${anima} .7s  ease-in forwards;
  }

  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    img {
      max-width: 300px;
      height: 300px;
    }
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    img {
      max-width: 170px;
      height: 170px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 35px;
  margin-bottom: 35px;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    justify-content: center;
    margin-bottom: 32px;
  }
`;

export const ListItem = styled.li`
  font-family: ${theme.font.family.barlowCondensed};
  font-size: ${theme.font.size.size_16px};
  font-weight: ${theme.font.fontWeight.w400};
  color: ${theme.color.colorNeutral};
  letter-spacing: 2.7px;
  text-decoration: none;
  padding-bottom: 12px;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid rgb(255, 255, 255, 0.5);
  }

  &.active {
    color: ${theme.color.colorWhite};
    border-bottom: 2px solid #fff;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    font-size: ${theme.font.size.size_14px};
  }
`;

export const TitleDestination = styled.h2`
  font-family: ${theme.font.family.bellefair};
  font-size: ${theme.font.size.size_100px};
  margin-bottom: 14px;
  animation: ${animaTitle} .5s ease-in forwards;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    font-size: ${theme.font.size.size_80px};
    text-align: center;
    margin-bottom: 8px;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    font-size: ${theme.font.size.size_56px};
    margin-bottom: auto;
  }
`;

export const PhraseDestination = styled.p`
  max-width: 444px;
  font-family: ${theme.font.family.barlow};
  font-size: ${theme.font.size.size_18px};
  color: ${theme.color.colorNeutral};
  line-height: 32px;
  padding-bottom: 54px;
  border-bottom: 1px solid #383b4b;
  animation: ${anima} .7s ease-in forwards;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    max-width: 573px;
    padding-bottom: 49px;
    text-align: center;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    max-width: 327px;
    padding-bottom: 32px;
    font-size: ${theme.font.size.size_15px};
  }
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 79px;
  margin-top: 28px;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    justify-content: center;
    text-align: center;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    flex-direction: column;
    gap: 32px;
  }

  span {
    font-family: ${theme.font.family.barlowCondensed};
    font-size: ${theme.font.size.size_14px};
    color: ${theme.color.colorNeutral};
    letter-spacing: 2.362px;
    text-transform: uppercase;
    animation: ${animaTitle} .5s ease-in forwards;
  }

  p {
    font-family: ${theme.font.family.bellefair};
    font-size: ${theme.font.size.size_28px};
    color: ${theme.color.colorWhite};
    text-transform: uppercase;
    margin-top: 12px;
   animation: ${anima} .8s ease-in forwards;

  }
`;
