import { theme } from "@/styles/theme";
import { styled, keyframes } from "styled-components";

const animaLogo = keyframes`
  from{
    opacity: 0;
    transform: translateX(-30px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

const animaNav = keyframes`
  from{
    opacity: 0;
    transform: translateY(-30px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

const animaMobile = keyframes`
  from{
    opacity: 0;
    transform: translateX(30px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

const animaLine = keyframes`
  from{
    opacity: 0;
    width: 0px;
  }
  to{
    opacity: 0.2515;
    width: 470px;
  }
  
`;

export const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0 2.5rem 3.438rem;
  z-index: 99;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    padding: 0 0 2.5rem 3.438rem;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    padding: 1.5rem;
  }
`;

export const LogoContainer = styled.div`
  animation: ${animaLogo} 2s forwards;
`;

export const NavList = styled.nav`
  opacity: 0;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.774227142333984px);
  padding: 2.438rem 10.438rem 2.438rem 9.375rem;
  animation: ${animaNav} 1.5s ease-in 1s forwards;

  &.open {
    display: block;
    width: 254px;
    height: 100%;
    padding: 118px 154px 0 34px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 5;
    animation: ${animaMobile} 1s forwards;

    ul {
      flex-direction: column;
      align-items: flex-start;
      gap: 32px;
    }
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    padding: 2.438rem 3rem;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 3.125rem;

  @media screen and (min-width: 1400px) {
    &::before {
      content: "";
      position: absolute;
      left: -426px;
      display: block;
      width: 473px;
      height: 1px;
      background: ${theme.color.colorWhite};
      opacity: 0;
      animation: ${animaLine} 1.5s ease-in 2s  forwards alternate;
    }
  }
`;

export const ListItem = styled.li`
  position: relative;
  a {
    &:hover::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -38px;
      width: 100%;
      height: 3px;
      opacity: 0.5021;
      background: #fff;
    }
    &.active::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -38px;
      width: 100%;
      height: 3px;
      background: #fff;
    }
  }
  span {
    font-family: ${theme.font.family.barlowCondensed};
    font-size: ${theme.font.size.size_16px};
    font-weight: ${theme.font.fontWeight.w700};
    letter-spacing: 2.7px;
    margin-right: 11px;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    span {
      display: none;
    }
  }

  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    span {
      display: inline;
    }
    a {
      &:hover::after {
        width: 4px;
        height: 31px;
        left: 214px;
        bottom: auto;
        opacity: 0.5021;
        background: #fff;
      }
      &.active.open::after {
        width: 4px;
        height: 31px;
        left: 214px;
        bottom: auto;
      }
    }
  }
`;

export const MenuBurger = styled.div`
  display: none;
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    display: block;
    cursor: pointer;
    z-index: 10;
  }
`;
