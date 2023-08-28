import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.header`
  @media screen and (max-width: 1024px) {
    padding: 0 0 2.5rem 3.438rem;
  }
  @media screen and (max-width: 760px) {
    padding: 1.5rem;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0 2.5rem 3.438rem;
`;

export const NavList = styled.nav`
  @media screen and (max-width: 1024px) {
    padding: 2.438rem 3rem;
  }
  @media screen and (max-width: 760px) {
    display: none;
  }
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.774227142333984px);
  padding: 2.438rem 10.438rem 2.438rem 9.375rem;

  &.open {
    display: block;
    width: 254px;
    height: 100%;
    padding: 118px 154px 0 34px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;

    ul {
      flex-direction: column;
      align-items: flex-start;
      gap: 32px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 3.125rem;

  @media screen and (min-width: 1025px) {
    &::before {
      content: "";
      position: absolute;
      left: -426px;
      display: block;
      width: 473px;
      height: 1px;
      background: ${theme.color.colorWhite};
      opacity: 0.2515;
    }
  }
`;

export const ListItem = styled.li`
  position: relative;
  a {
    @media screen and (max-width: 760px) {
      &.active.open::after {
      width: 4px;
      height: 31px;
      right: -148px;
      left: auto;
      bottom: auto;
    }
  }
    &.active::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -38px;
      width: 70px;
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
`;

export const MenuBurger = styled.div`
  @media screen and (max-width: 760px) {
    display: block;
    cursor: pointer;
    z-index: 10;
  }
  display: none;
`;
