import { PokemonCardsContainer } from "./PokemonCardsContainer";
import "./Sejeong.css";
import { typoStyles } from "../../../../utils/Typo/Typo";

export function Section2() {
  return (
    <div id="SejeongWrapper">
      <div id="SejeongSmallTitle" className={typoStyles.textXlBold}>
        나와라 2팀
      </div>
      <div id="SejeongTitle" className={typoStyles.text3xlBold}>
        코딩에 몸통박치기
      </div>
      <PokemonCardsContainer />
    </div>
  );
}
