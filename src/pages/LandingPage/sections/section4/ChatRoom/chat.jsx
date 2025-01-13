import { useState, useEffect } from "react";
import { typoStyles } from "../../../../../utils/Typo/Typo";
import "./chat.css";

export function Chat({ chatVisible, setChatVisible }) {
  const dateData = new Date();
  const currentTime = dateData.getHours() + ":" + dateData.getMinutes(); // 현재 시간
  const [inputValue, setInputValue] = useState(""); // 채팅 입력 값
  const [chatHistory, setChatHistory] = useState([]); // 채팅 내용 모아둔 저장소

  // 엔터 누르면 보내기 전송 기능
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      saveUserText();
    }
  };

  // 채팅 내용 저장소에 있는 데이터 가져오는 놈
  useEffect(() => {
    const savedChat = localStorage.getItem("chatRoom");
    if (savedChat) {
      setChatHistory(JSON.parse(savedChat));
    }
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // 보내기버튼 클릭 시 채팅 내용 저장
  const saveUserText = () => {
    if (inputValue === "") {
      console.log("돌아가 값이 없군");
      return;
    }
    const newChatHistory = [
      ...chatHistory,
      { text: inputValue, time: currentTime },
    ];
    setChatHistory(newChatHistory);
    localStorage.setItem("chatRoom", JSON.stringify(newChatHistory));
    setInputValue("");
  };

  // x버튼 클릭 시 채팅창 닫기
  const handleCloseChat = () => {
    setChatVisible(false);
  };

  return (
    <div id="chat" style={{ display: chatVisible ? "block" : "none" }}>
      <div className="chatBox">
        <div className="chatHeader">
          <div className={typoStyles.text4xlMedium}>비밀채팅방</div>
          <button className={typoStyles.text4xlBold} onClick={handleCloseChat}>
            x
          </button>
        </div>
        <div className="chattingBox">
          {chatHistory.map((chat, index) => (
            <div key={index} className="chatBubbleBox">
              <div id="chatBubble" className={typoStyles.text4xlMedium}>
                {chat.text}
              </div>
              <div className={typoStyles.text3xlMedium}>{chat.time}</div>
            </div>
          ))}
        </div>
        <div className="chatInputBox">
          <input
            value={inputValue}
            onKeyDown={(e) => activeEnter(e)}
            onChange={handleInputChange}
            id="chatInput"
            type="text"
            className={typoStyles.text4xlMedium}
          />
          <button
            onClick={saveUserText}
            id="chatInputButton"
            className={typoStyles.text4xlSemibold}
          >
            보내기
          </button>
        </div>
      </div>
    </div>
  );
}
