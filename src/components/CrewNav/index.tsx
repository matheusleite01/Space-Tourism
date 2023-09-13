import React from 'react'
import Image from "next/image";
import * as S from './styled';
import DouglasImg from "../../assets/crew/image-douglas-hurley.png";
import Radio from '../Form/Radio';



const CrewNav = () => {
  const [value,setValue] = React.useState('Commander');

  return (
    <S.Container>
      <S.InfoContainer>
        <div>
        <S.SubTitle>Commander</S.SubTitle>
        <S.Title>Douglas Hurley</S.Title>
        <S.Paragraph>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</S.Paragraph>
        </div>
        <S.NavInput>
          <Radio options={["Commander", "Mission Specialist", "PILOT", "Flight Engineer"]} value={value} setValue={setValue}/>
        </S.NavInput>      
      </S.InfoContainer>
      <S.ImgContainer>
        <Image src={DouglasImg} alt='image-douglas-hurle'/>
      </S.ImgContainer>
    </S.Container>
  )
}

export default CrewNav