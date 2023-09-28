import React from "react";
import * as S from "./styled";
import { Title, Paragraph } from "../CrewNav/styled";
import Image from "next/image";
import vehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.png";
import spaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";
import capsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import vehiclelandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceportlandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import capsulelandscape from "../../assets/technology/image-space-capsule-landscape.jpg";

const technologyInfo = [
  {
    id: "1",
    title: "LAUNCH VEHICLE",
    paragraph:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: "2",
    title: "SPACEPORT",
    paragraph:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    id: "3",
    title: "SPACE CAPSULE",
    paragraph:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const TechnologyNav = () => {
  const [value, setValue] = React.useState("1");
  const [img,setImg] = React.useState(false);
  const vehicle = img ? vehiclelandscape : vehiclePortrait;
  const spaceport = img ? spaceportlandscape : spaceportPortrait;
  const capsule = img ? capsulelandscape : capsulePortrait;
  const technologyFilter = technologyInfo.filter(({ id }) => id === value);

  React.useEffect(() => {
    const handleResize = () => {
      return window.innerWidth <= 1024 ? setImg(true) : setImg(false);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
 },[])



  return (
    <S.Container>
      <S.InfoContainer>
        <S.ButtonContainer>
          <S.Button className={value === '1' ? 'active': ''}
            onClick={({ currentTarget }) => setValue(currentTarget.innerText)}
          >
            1
          </S.Button>
          <S.Button className={value === '2' ? 'active': ''}
            onClick={({ currentTarget }) => setValue(currentTarget.innerText)}
          >
            2
          </S.Button>
          <S.Button className={value === '3' ? 'active': ''}
            onClick={({ currentTarget }) => setValue(currentTarget.innerText)}
          >
            3
          </S.Button>
        </S.ButtonContainer>
        {technologyFilter.map(({ id, title, paragraph }) => (
          <S.TechnologyContainer key={id}>
            <S.TechnologySpan>THE TERMINOLOGY…</S.TechnologySpan>
            <Title>{title}</Title>
            <Paragraph>{paragraph}</Paragraph>
          </S.TechnologyContainer>
        ))}
      </S.InfoContainer>
      <S.ImgContainer>
        {value === '1' && <Image src={vehicle} alt="image-launch-vehicle.jpg" />}
        {value === '2' && <Image src={spaceport} alt="image-launch-spaceport.jpg" />}
        {value === '3' && <Image src={capsule} alt="image-launch-capsule.jpg" />}
      </S.ImgContainer>
    </S.Container>
  );
};

export default TechnologyNav;
