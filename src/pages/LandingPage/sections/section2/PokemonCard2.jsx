// PokemonCard.jsx
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./Good.css";

const CARD_THEMES = {
  fire: {
    gradient: `linear-gradient(135deg, 
      rgba(255, 67, 54, 0.9),
      rgba(233, 30, 99, 0.8),
      rgba(156, 39, 176, 0.9))`,
    accent: "rgba(255, 67, 54, 0.3)",
    statFill: "linear-gradient(90deg, #F44336, #E91E63)",
  },
  water: {
    gradient: `linear-gradient(135deg, 
      rgba(33, 150, 243, 0.9),
      rgba(3, 169, 244, 0.8),
      rgba(0, 188, 212, 0.9))`,
    accent: "rgba(33, 150, 243, 0.3)",
    statFill: "linear-gradient(90deg, #2196F3, #03A9F4)",
  },
  grass: {
    gradient: `linear-gradient(135deg, 
      rgba(76, 175, 80, 0.9),
      rgba(139, 195, 74, 0.8),
      rgba(205, 220, 57, 0.9))`,
    accent: "rgba(76, 175, 80, 0.3)",
    statFill: "linear-gradient(90deg, #4CAF50, #8BC34A)",
  },
  electric: {
    gradient: `linear-gradient(135deg,
      rgba(255, 193, 7, 0.9),
      rgba(255, 235, 59, 0.8),
      rgba(255, 152, 0, 0.9))`,
    accent: "rgba(255, 193, 7, 0.3)",
    statFill: "linear-gradient(90deg, #FFC107, #FFEB3B)",
  },
  psychic: {
    gradient: `linear-gradient(135deg,
      rgba(233, 30, 99, 0.9),
      rgba(156, 39, 176, 0.8),
      rgba(233, 30, 99, 0.9))`,
    accent: "rgba(233, 30, 99, 0.3)",
    statFill: "linear-gradient(90deg, #E91E63, #9C27B0)",
  },
  default: {
    gradient: `linear-gradient(135deg, 
      rgba(123, 31, 162, 0.9),
      rgba(103, 58, 183, 0.8),
      rgba(244, 143, 177, 0.9))`,
    accent: "rgba(123, 31, 162, 0.3)",
    statFill: "linear-gradient(90deg, #7B1FA2, #9C27B0)",
  },
};

const getRandomTheme = () => {
  const themes = Object.keys(CARD_THEMES);
  const randomIndex = Math.floor(Math.random() * themes.length);
  return CARD_THEMES[themes[randomIndex]];
};

function PokemonCard2({ pokemonId = 413 }) {
  // State management
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonStats, setPokemonStats] = useState(null);
  const [pokemonImage, setPokemonImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cardTheme] = useState(getRandomTheme()); // Fixed theme per component instance

  // Data fetching
  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const [speciesResponse, pokemonResponse] = await Promise.all([
          axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`),
          axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`),
        ]);

        setPokemonData(speciesResponse.data);
        setPokemonImage(pokemonResponse.data.sprites.front_default);
        setPokemonStats({
          hp:
            pokemonResponse.data.stats.find((stat) => stat.stat.name === "hp")
              ?.base_stat || 50,
          speed:
            pokemonResponse.data.stats.find(
              (stat) => stat.stat.name === "speed"
            )?.base_stat || 50,
          types: pokemonResponse.data.types.map((type) => type.type.name),
        });
      } catch (error) {
        console.error("포켓몬 데이터 로딩 에러:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, [pokemonId]);

  // Mouse event handlers
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePosition({ x, y });

    const el = e.currentTarget;
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Utility functions
  const getPokemonName = (names) => {
    const nameObj =
      names?.find((name) => name.language.name === "ko") ||
      names?.find((name) => name.language.name === "en");
    return nameObj ? nameObj.name : "Unknown";
  };

  const getKoreanFlavorText = (flavorTextEntries) => {
    const koreanEntry = flavorTextEntries?.find(
      (entry) => entry.language.name === "ko"
    );
    return koreanEntry ? koreanEntry.flavor_text : "설명 없음";
  };

  // Memoized type calculations
  const pokemonTypes = useMemo(() => {
    if (!pokemonStats?.types) return [];
    return pokemonStats.types;
  }, [pokemonStats?.types]);

  // Loading and error states
  if (loading) {
    return <div className="pokemon-card loading">로딩중...</div>;
  }

  if (!pokemonData || !pokemonImage) {
    return <div className="pokemon-card error">포켓몬을 찾을 수 없습니다</div>;
  }

  // Render
  return (
    <div
      className="card-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="card-inner"
        style={{
          transform: `
            rotateY(${isFlipped ? "180deg" : "0"}) 
            rotateX(${mousePosition.y * 20}deg) 
            rotateY(${mousePosition.x * 20}deg)
          `,
        }}
      >
        {/* Front of card */}
        <div
          className="card-front"
          style={{
            background: cardTheme.gradient,
            boxShadow: `0 0 30px ${cardTheme.accent}`,
          }}
        >
          <div className="pokemon-image-container">
            <img
              src={pokemonImage}
              alt={getPokemonName(pokemonData.names)}
              className="pokemon-image"
            />
          </div>
          <div className="pokemon-info">
            <h2 className="pokemon-name">
              {getPokemonName(pokemonData.names)}
            </h2>
            <p className="pokemon-number">No. {pokemonData.id}</p>

            <div className="stats-container">
              <div className="stat-bar">
                <span className="stat-label">타입</span>
                <p className="type-text">{pokemonTypes.join(", ")}</p>
              </div>

              <div className="stat-bar">
                <span className="stat-label">
                  HP
                  <span className="stat-value">{pokemonStats?.hp || 0}</span>
                </span>
                <div className="stat-background">
                  <div
                    className="stat-fill"
                    style={{
                      width: `${(pokemonStats?.hp || 0) / 2}%`,
                      background: cardTheme.statFill,
                    }}
                  />
                </div>
              </div>

              <div className="stat-bar">
                <span className="stat-label">
                  Speed
                  <span className="stat-value">{pokemonStats?.speed || 0}</span>
                </span>
                <div className="stat-background">
                  <div
                    className="stat-fill"
                    style={{
                      width: `${(pokemonStats?.speed || 0) / 2}%`,
                      background: cardTheme.statFill,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="card-back"
          style={{
            background: cardTheme.gradient,
            boxShadow: `0 0 30px ${cardTheme.accent}`,
          }}
        >
          <div className="description">
            <h3 className="description-title">특성</h3>
            <p>{getKoreanFlavorText(pokemonData.flavor_text_entries)}</p>

            <div className="attribute-section">
              <h4 className="attribute-title">포켓몬 정보</h4>
              <p className="attribute-content">
                세대: {pokemonData.generation.name}
                <br />
                {pokemonData.is_legendary && "전설의 포켓몬"}
                {pokemonData.is_mythical && "신화의 포켓몬"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard2;
