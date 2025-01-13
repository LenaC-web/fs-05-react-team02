import React, { useState, useEffect } from "react";
import { MessageBox } from "./MessageBox";
import { InputBox } from "./InputBox";
import { Speaker } from "./Speaker";

const messageList = [
  { msg: "Fs 5기 화이팅", option: "send" },
  { msg: "나는야 용감한 코딩 초보", option: "receive" },
  { msg: "나는야 코딩 고수!", option: "receive" },
  { msg: "불타는 코딩!", option: "receive" },
];

export const Cellphone = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([{}]);

  const createNewMessage = () => {
    if (newMessage) {
      setMessages((prev) => [...prev, { msg: newMessage, option: "send" }]);
      setNewMessage("");
    } else {
      alert("내용이 입력되지 않았습니다.");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < messageList.length) {
        setMessages((prev) => [...prev, messageList[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    setInterval(() => {
      setCurrentIndex(0);
    }, 60000);
  }, []);

  return (
    <div className="cellphone-out-box">
      <Speaker />
      <div className="cellphone-in-box">
        {messages.map((message, index) => (
          <MessageBox key={index} messages={message} />
        ))}
        <InputBox
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          createNewMessage={createNewMessage}
        />
      </div>
    </div>
  );
};
