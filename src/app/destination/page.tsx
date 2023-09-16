"use client";
import * as D from "./styled";
import DescribeTitle from "@/components/DescribeTitle/Index";
import DestinationNav from "@/components/DestinationNav/Index";
import { Helmet } from "react-helmet";

const Destination = () => {
  return (
    <>
      <Helmet>
        <title>Destination</title>
        <meta name="description" content="Pick your destination" />
      </Helmet>
      <D.ImgBg>
        <D.Container className="container">
          <div>
            <DescribeTitle id="01" title="Pick your destination" />
            <DestinationNav />
          </div>
        </D.Container>
      </D.ImgBg>
    </>
  );
};

export default Destination;
