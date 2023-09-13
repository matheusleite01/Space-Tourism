"use client";
import { DescribeInfo, SpanDescribe, TitleDescribe } from "./styled";

type DescripeProps = {
  id: string;
  title: string;
};

const DescribeTitle = ({ id, title }: DescripeProps) => {
  return (
    <DescribeInfo>
      <SpanDescribe>{id}</SpanDescribe>
      <TitleDescribe>{title}</TitleDescribe>
    </DescribeInfo>
  );
};

export default DescribeTitle;
