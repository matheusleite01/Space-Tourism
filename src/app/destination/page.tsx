"use client";
import * as D from "./styled";
import DescribeTitle from '@/components/DescribeTitle/Index';
import DestinationNav from "@/components/DestinationNav/Index";

const Destination = () => {
  return (
    <D.ImgBg>
      <D.Container className="container">
        <div>
          <DescribeTitle id="01" title="Pick your destination"/>
          <DestinationNav />
        </div>
      </D.Container>
    </D.ImgBg>
  );
};

export default Destination;
