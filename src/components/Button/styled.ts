import { theme } from "@/styles/theme";
import { styled, keyframes } from "styled-components";

const animaButton = keyframes`
  from{
    opacity: 0;
    transform: translateX(30px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ButtonStyle = styled.button`
  position: relative;
  width: 274px;
  height: 274px;
  font-family: ${theme.font.family.bellefair};
  font-size: ${theme.font.size.size_32px};
  color: ${theme.color.colorBlack};
  background: ${theme.color.colorWhite};
  letter-spacing: 2px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  animation: ${animaButton} 1.5s ease-in-out forwards;
  transition: box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1);

  &:hover {
    box-shadow: 0 0 1px 88px rgba(225, 225, 225, 0.1036);
  }

  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    width: 242px;
    height: 242px;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
    font-size: ${theme.font.size.size_20px};
    width: 150px;
    height: 150px;
    &:hover {
      box-shadow: 0 0 1px 48px rgba(225, 225, 225, 0.1036);
    }
  }
`;
