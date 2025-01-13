import React, { useState } from "react";
import "../../../styles/color.css";

const Container = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "300px",
  minHeight: "120px",
  backgroundColor: "var(--gray900)",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  padding: "20px",
  gap: "15px",
  zIndex: 1000,
};

const Title = {
  color: "white",
  fontSize: "2rem",
  textAlign: "center",
};

const InputWrapper = {
  display: "flex",
  width: "100%",
  position: "relative",
};

const Input = {
  width: "100%",
  padding: "12px",
  paddingRight: "60px",
  border: "1px solid var(--gray600)",
  borderRadius: "5px",
  outline: "none",
  fontSize: "1.1rem",
};

const Button = {
  position: "absolute",
  right: "0",
  top: "0",
  height: "100%",
  padding: "0 15px",
  backgroundColor: "var(--primary100)",
  color: "white",
  border: "none",
  borderTopRightRadius: "5px",
  borderBottomRightRadius: "5px",
  cursor: "pointer",
  fontSize: "1rem",
};

const StatusMessage = (success) => ({
  marginTop: "10px",
  fontSize: "1rem",
  color: success ? "green" : "var(--error)",
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

function DiscordSend() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isCooldown, setIsCooldown] = useState(false);

  const MAX_LENGTH = 100;
  const COOLDOWN_TIME = 3000;

  const sendMessage = async () => {
    if (isCooldown) {
      setStatus("⏳ 잠시 후 다시 시도해주세요!");
      return;
    }
    if (message.trim() === "") {
      setStatus("⚠️ 메시지를 입력해주세요!");
      return;
    }
    if (message.length > MAX_LENGTH) {
      setStatus(`⚠️ 메시지는 ${MAX_LENGTH}자 이내로 입력해주세요.`);
      return;
    }

    try {
      await fetch(process.env.REACT_APP_DISCORD_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: message }),
      });
      setStatus("✅ 메시지가 성공적으로 전송되었습니다!");
      setMessage("");
      setIsCooldown(true);
      setTimeout(() => setIsCooldown(false), COOLDOWN_TIME);
    } catch (error) {
      console.error("전송 실패:", error);
      setStatus("❌ 메시지 전송에 실패했습니다.");
    }
  };

  return (
    <div style={Container}>
      <h1 style={Title}>디스코드 문의봇 💬</h1>
      <div style={InputWrapper}>
        <input
          type="text"
          placeholder="문의할 내용을 입력하세요"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={MAX_LENGTH}
          style={Input}
        />
        <button style={Button} onClick={sendMessage} disabled={isCooldown}>
          {isCooldown ? "대기 중..." : "전송"}
        </button>
      </div>
      {status && <p style={StatusMessage(status.includes("성공"))}>{status}</p>}
    </div>
  );
}

export default DiscordSend;
