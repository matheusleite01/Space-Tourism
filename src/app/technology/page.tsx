"use client";
import * as S from "./styled";
import DescribeTitle from "@/components/DescribeTitle/Index";
import { Container } from "../destination/styled";
import TechnologyNav from "@/components/TechnologyNav/Index";
const Technology = () => {
  return (
    <S.ImgBg>
      <Container className="container">
        <div>
          <DescribeTitle id="03" title="SPACE LAUNCH 101" />
          <TechnologyNav />
        </div>
      </Container>
    </S.ImgBg>
  );
};

export default Technology;
