"use client";
import * as S from "./styled";
import DescribeTitle from "@/components/DescribeTitle/Index";
import { Container } from "../destination/styled";
import CrewNav from "@/components/CrewNav";
import { Helmet } from "react-helmet";

const Crew = () => {
  return (
    <>
       <Helmet>
        <title>Crew</title>
        <meta name="description" content="Meet your crew" />
      </Helmet>
      <S.ImgBg>
        <Container className="container">
          <div>
            <DescribeTitle id="02" title="Meet your crew" />
            <CrewNav />
          </div>
        </Container>
      </S.ImgBg>
    </>
  );
};

export default Crew;
