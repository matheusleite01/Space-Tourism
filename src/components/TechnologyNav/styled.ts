import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 56px;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}){
    flex-direction: column-reverse;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}){
    text-align: center;
    flex-direction: column;
    gap: 44px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}){
    flex-direction: row;
  }
`;

export const Button = styled.button`
  font-family: ${theme.font.family.bellefair};
  font-size: ${theme.font.size.size_32px};
  color: ${theme.color.colorWhite};
  background: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid rgba(225, 225, 225, 0.25);
  cursor: pointer;
  transition: all .2s;

  &:hover{
    border: 1px solid rgba(225, 225, 225);
  }

  &.active {
    background: #fff;
    color: #0b0d17;
    border: none;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}){
    font-size: ${theme.font.size.size_24px};
    width: 60px;
    height: 60px;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}){
    font-size: ${theme.font.size.size_16px};
    width: 40px;
    height: 40px;
  }
`;

export const TechnologyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const TechnologySpan = styled.span`
  color: ${theme.color.colorNeutral};
  font-family: ${theme.font.family.barlowCondensed};
  font-size: ${theme.font.size.size_16px};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.7px;
`;

export const ImgContainer = styled.div`
@media screen and (min-width: 1400px){
  position: relative;
  right: -30px;
} 

`;
