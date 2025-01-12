import axios from "axios";
import { useState, useEffect } from "react";
import { typoStyles } from "../Typo/Typo";

export function PokemonGet({ pokemonId = 413 }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);

  // 포켓몬 api 가져오기
  const fetchPokemonData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
      );
      setPokemonData(response.data);
      // console.log("Pokemon Data 확인용", response.data);
    } catch (error) {
      console.error("설명 에러", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, [pokemonId]);

  // 한국어 이름을 찾고, 없으면 영어 이름 사용
  const getPokemonName = (names) => {
    const nameObj =
      names.find((name) => name.language.name === "ko") ||
      names.find((name) => name.language.name === "en");
    return nameObj ? nameObj.name : "Unknown";
  };

  //egg_groups에서 가져온 속성값
  const getType = (eggGroups) => {
    // eggGroups 배열의 첫 번째 요소에서 name 값 추출
    return eggGroups && eggGroups.length > 0
      ? eggGroups.map((group) => group.name).join(", ")
      : "알 수 없음";
  };

  //한국어로 된 flavor text 가져오기
  const getKoreanFlavorText = (flavorTextEntries) => {
    const koreanEntry = flavorTextEntries.find(
      (entry) => entry.language.name === "ko"
    );
    return koreanEntry ? koreanEntry.flavor_text : "설명 없음";
  };

  if (loading) return <div>로딩중!</div>;
  if (!pokemonData) return <div>포켓몬 없음</div>;
  return (
    <div id="pokemonTextZone">
      <p id="pokemonId" className={typoStyles.textLgBold}>
        no. {pokemonData.id}
      </p>
      <p className={typoStyles.textLgBold}>
        {getPokemonName(pokemonData.names)}
      </p>
      {/* <p>Base Happiness: {pokemonData.base_happiness}</p>
      <p>Is Legendary: {pokemonData.is_legendary ? "Yes" : "No"}</p> */}
      <p id="pokemonType" className={typoStyles.textMdBold}>
        #속성
      </p>
      <p id="pokemonTypeText" className={typoStyles.textMdRegular}>
        {getType(pokemonData.egg_groups)}
      </p>
      <p id="pokemonFlavor" className={typoStyles.textMdBold}>
        #특성
      </p>
      <p id="pokemonFlavorText" className={typoStyles.textMdRegular}>
        {getKoreanFlavorText(pokemonData.flavor_text_entries)}
      </p>
    </div>
  );
}
