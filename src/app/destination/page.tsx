"use client";
import * as D from "./styled";
import DestinationNav from "@/components/DestinationNav/Index";

const Destination = () => {
  return (
    <D.ImgBg>
      <D.Container className="container">
        <div>
          <D.DescribeTitle>
            <span className="spanDescribe">01</span>
            <h2 className="describe">Pick your destination</h2>
          </D.DescribeTitle>
          <DestinationNav />
        </div>
      </D.Container>
    </D.ImgBg>
  );
};

export default Destination;
