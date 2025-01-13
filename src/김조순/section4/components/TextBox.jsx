import { Typo, typoStyles } from "../../../Typo/Typo";

export const TextBox = () => {
  return (
    <div className="text-box">
      <Typo
        className={`${"title-text"} ${typoStyles.text3xlBold}`}
        content={"함께하는 코딩!"}
      ></Typo>
      <Typo
        className={`${"description-text"} ${typoStyles.text2xlMedium}`}
        content={"재미있는 코딩"}
      ></Typo>
      <Typo
        className={`${"footer-text"} ${typoStyles.text3xlBold}`}
        content={"모두 화이팅!"}
      ></Typo>
    </div>
  );
};
