import Image from "next/image";
import React from "react";
import * as S from "./style";
import moon from "../../assets/destination/image-moon.png";
import mars from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";



const planetsInfo = [
  {
    title: "MOON",
    subtitle:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    title: "MARS",
    subtitle:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    travel: "9 months",
  },
  {
    title: "EUROPA",
    subtitle:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    travel: "3 years",
  },
  {
    title: "TITAN",
    subtitle:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    travel: "7 years",
  },
];

const DestinationNav = () => {
  const [data, setData] = React.useState("MOON");
  const arrPlanetsInfo = planetsInfo.filter(({ title }) => title === data);

  return (
    <S.Container>
      <S.Img>
        {data === "MOON" && <Image src={moon} alt="image-moon" />}
        {data === "MARS" && <Image src={mars} alt="image-mars" />}
        {data === "EUROPA" && <Image src={europa} alt="image-europa" />}
        {data === "TITAN" && <Image src={titan} alt="image-titan" />}
      </S.Img>
      <div>
        <S.List>
          <S.ListItem
            className={data === "MOON" ? "active" : ""}
            onClick={({ currentTarget }) => setData(currentTarget.innerText)}
          >
            MOON
          </S.ListItem>
          <S.ListItem
            className={data === "MARS" ? "active" : ""}
            onClick={({ currentTarget }) => setData(currentTarget.innerText)}
          >
            MARS
          </S.ListItem>
          <S.ListItem
            className={data === "EUROPA" ? "active" : ""}
            onClick={({ currentTarget }) => setData(currentTarget.innerText)}
          >
            EUROPA
          </S.ListItem>
          <S.ListItem
            className={data === "TITAN" ? "active" : ""}
            onClick={({ currentTarget }) => setData(currentTarget.innerText)}
          >
            TITAN
          </S.ListItem>
        </S.List>
        {arrPlanetsInfo.map(({ title, subtitle, distance, travel }) => (
          <div className="active" key={title}>
            <S.TitleDestination>{title}</S.TitleDestination>
            <S.PhraseDestination>{subtitle}</S.PhraseDestination>
            <S.ListContainer>
              <div>
                <span>AVG. DISTANCE</span>
                <p>{distance}</p>
              </div>
              <div>
                <span>Est. travel time</span>
                <p>{travel}</p>
              </div>
            </S.ListContainer>
          </div>
        ))}
      </div>
    </S.Container>
  );
};

export default DestinationNav;
