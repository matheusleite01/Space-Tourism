"use client";
import * as S from "./styled";
import DescribeTitle from "@/components/DescribeTitle/Index";
import { Container } from "../destination/styled";
import TechnologyNav from "@/components/TechnologyNav/Index";
import { Helmet } from "react-helmet";

const Technology = () => {
  return (
    <>
     <Helmet>
        <title>Technology</title>
        <meta name="description" content="SPACE LAUNCH 101" />
      </Helmet>
    <S.ImgBg>
      <Container className="container">
        <div>
          <DescribeTitle id="03" title="SPACE LAUNCH 101" />
          <TechnologyNav />
        </div>
      </Container>
    </S.ImgBg>
    </>
    
  );
};

export default Technology;
