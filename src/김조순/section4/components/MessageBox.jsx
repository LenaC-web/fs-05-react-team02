import { Typo, typoStyles } from "../../../Typo/Typo";

export const MessageBox = ({ messages }) => {
  return (
    <div
      className={
        messages?.option === "send" ? "message-box-send" : "message-box-receive"
      }
    >
      <Typo
        className={`${
          messages.option === "send" ? "message" : "message-recieve"
        } ${typoStyles.textXsMedium}`}
        content={messages?.msg}
      />
    </div>
  );
};
