import "./CharProfile.css";
import { typoStyles } from "../../../../../utils/Typo/Typo";
import { CHAR_LEVEL } from "../../../utils/constants";

export function CharProfile({ userLv }) {
  //레벨 4,5에서 버블 css 달라져서 클래스로 관리
  const msgBubbleClassName = `text lv${userLv}`;

  const charMsg = CHAR_LEVEL[userLv].msgBubble;
  const charImg = CHAR_LEVEL[userLv].imgSrc;
  const charTitle = `Lv.${userLv} ${CHAR_LEVEL[userLv].title}`;

  return (
    <div id="char-profile">
      <p className={msgBubbleClassName} id="msg-bubble">
        {charMsg}
      </p>
      <div id="char-box">
        <img id="char-img" src={charImg} alt="유저 캐릭터" />
        <p className={`title ${typoStyles.textXlBold}`} id="char-lv">
          {charTitle}
        </p>
      </div>
    </div>
  );
}
