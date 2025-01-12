// eggGroups에 해당하는 SVG 이미지를 정의한 객체
const eggGroupImages = {
  bug: "./PokemonType/bug.svg", // 실제 경로로 수정
  grass: "/images/grass.svg", // 실제 경로로 수정
  fairy: "/images/fairy.svg", // 실제 경로로 수정
  // 추가적인 eggGroups를 여기에 추가 가능
};

const getType = (eggGroups) => {
  // eggGroups 배열의 각 요소에 맞는 이미지 반환
  if (eggGroups && eggGroups.length > 0) {
    return eggGroups.map((group) => {
      const imageSrc = eggGroupImages[group.name];
      if (imageSrc) {
        return (
          <div key={group.name}>
            <img
              src={imageSrc}
              alt={group.name}
              style={{ width: "50px", height: "50px" }}
            />
            <span>{group.name}</span>
          </div>
        );
      }
      return null; // 해당 이미지가 없으면 렌더링하지 않음
    });
  }
  return "알 수 없음";
};
