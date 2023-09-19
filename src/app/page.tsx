"use client";
import * as H from "./styled";
import Button from "@/components/Button/Index";
import {Helmet} from 'react-helmet';

export default function Home() {
  return (
    <>
       <Helmet>
        <title>Home</title>
        <meta name="description" content="Let’s face it; if you want to go to space" />
      </Helmet>
      <H.ImgBg>
        <H.Container role="container" className="container">
          <H.TitleContainer>
            <p>SO, YOU WANT TO TRAVEL TO</p>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </H.TitleContainer>
          <Button>EXPLORE</Button>
        </H.Container>
      </H.ImgBg>
    </>
  );
}
