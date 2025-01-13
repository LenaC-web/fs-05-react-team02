import { Chat } from "./chat.jsx";
import { useState } from "react";
import { Typo, typoStyles } from "../../../../../utils/Typo/Typo.jsx";
import "./chatRoom.css";
export function ChatRoom() {
  const [chatVisible, setChatVisible] = useState(false); // 채팅창 보이기/숨기기

  const handleChatButtonClick = () => {
    setChatVisible(true);
  };
  //버튼은 디자인 안했습니다 ㅎㅎ 안에는 기능이랑 디자인 했습니다
  return (
    <div>
      <button
        onClick={handleChatButtonClick}
        id="chatButton"
        className={typoStyles.text3xlBold}
      >
        비밀채팅방
      </button>
      <Chat chatVisible={chatVisible} setChatVisible={setChatVisible} />
    </div>
  );
}
