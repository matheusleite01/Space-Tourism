import { theme } from "@/styles/theme";
import styled from "styled-components";

export const ButtonStyle = styled.button`
  position: relative;
  width: 274px;
  height: 274px;
  font-family: ${theme.font.family.bellefair};
  font-size: ${theme.font.size.size_32px};
  color: ${theme.color.colorBlack};
  letter-spacing: 2px;
  border-radius: 50%;
  border: none;

  @media screen and (max-width: ${theme.font.responsiveDevice.w1024}) {
    width: 242px;
    height: 242px;
  }
  @media screen and (max-width: ${theme.font.responsiveDevice.w760}) {
  font-size: ${theme.font.size.size_20px};
    width: 150px;
    height: 150px;
  }
`;
