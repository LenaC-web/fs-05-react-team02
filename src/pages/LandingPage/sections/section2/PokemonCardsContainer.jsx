import { useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { typoStyles } from "../../../../utils/Typo/Typo";
import PokemonCard2 from "./PokemonCard2";
import "./Sejeong.css";

export function PokemonCardsContainer() {
  const [peopleData, setPeopleData] = useState([
    { name: "김조순", intro: "나는 날 수 있다!", pokemonId: 149 },
    { name: "박세정", intro: "코딩을 썰어버리겠다!", pokemonId: 152 },
    { name: "유호은", intro: "코딩을 불태우겠다!", pokemonId: 37 },
    { name: "최수빈", intro: "코딩은 내 먹잇감이다!", pokemonId: 69 },
    { name: "봉재완", intro: "코딩은 머리 아프다!", pokemonId: 54 },
    { name: "윤민호", intro: "나에게 코딩은 꿀이다!", pokemonId: 216 },
    { name: "나의 포켓몬은?", intro: "클릭!", pokemonId: 1 },
  ]);

  const getRandomPokemonId = () => {
    return Math.floor(Math.random() * 493) + 1;
  };

  const handleIntroClick = (index) => {
    if (peopleData[index].name === "나의 포켓몬은?") {
      const newPeopleData = [...peopleData];
      newPeopleData[index].pokemonId = getRandomPokemonId();
      setPeopleData(newPeopleData);
    }
  };

  return (
    <div id="PokemonCardWrapper">
      {peopleData.map((person, index) => (
        <PokemonCard2
          key={index}
          name={person.name}
          intro={person.intro}
          pokemonId={person.pokemonId}
          isLastCard={person.name === "나의 포켓몬은?"}
          onClick={() => handleIntroClick(index)}
        />
      ))}
    </div>
  );
}
