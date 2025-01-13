import { PokemonGet } from "./PokemonGet";
import { PokemonImageGet } from "./PokemonImageGet";
import "./Sejeong.css";
import { typoStyles } from "../../../../utils/Typo/Typo";
import PokemonCard2 from "./PokemonCard2";

export function PokemonCard({ pokemonId }) {
  return (
    <div id="PokemonCardZone">
      <PokemonCard2 pokemonId={pokemonId} />
    </div>
  );
}
