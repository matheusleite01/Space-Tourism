import React from "react";
import Image from "next/image";
import * as S from "./styled";
import Radio from "../Form/Radio";
import douglasImg from "../../assets/crew/image-douglas-hurley.png";
import markImg from "../../assets/crew/image-mark-shuttleworth.png";
import victorImg from "../../assets/crew/image-victor-glover.png";
import anoushehImg from "../../assets/crew/image-anousheh-ansari.png";


const creewInfo = [
  {
    subtitle: "Commander",
    title: "Douglas Hurley",
    paragraph:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    subtitle: "Mission Specialist",
    title: "MARK SHUTTLEWORTH",
    paragraph:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist..",
  },
  {
    subtitle: "PILOT",
    title: "Victor Glover",
    paragraph:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    subtitle: "Flight Engineer",
    title: "Anousheh Ansari",
    paragraph:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const CrewNav = () => {
  const professionArr = creewInfo.map(({ subtitle }) => subtitle);
  const [value, setValue] = React.useState(professionArr[0]);
  const creewInfoFilter = creewInfo.filter(
    ({ subtitle }) => subtitle === value,
  );

  return (
    <S.Container>
      <S.InfoContainer>
        {creewInfoFilter.map(({ subtitle, title, paragraph }) => (
          <div key={subtitle}>
            <S.SubTitle>{subtitle}</S.SubTitle>
            <S.Title>{title}</S.Title>
            <S.Paragraph>{paragraph}</S.Paragraph>
          </div>
        ))}
        <S.NavInput>
          <Radio options={professionArr} value={value} setValue={setValue} />
        </S.NavInput>
      </S.InfoContainer>
      <S.ImgContainer>
        {value === professionArr[0] &&  <Image src={douglasImg} alt="image-douglas-hurle" />}
        {value === professionArr[1] &&  <Image src={markImg} alt="image-mark-shuttleworth" />}
        {value === professionArr[2] &&  <Image src={victorImg} alt="image-victor-glover" />}
        {value === professionArr[3] &&  <Image src={anoushehImg} alt="image-anousheh-ansari" />}
      </S.ImgContainer>
    </S.Container>
  );
};

export default CrewNav;
