export const InputBox = ({ newMessage, setNewMessage, createNewMessage }) => {
  return (
    <div className="input-box">
      <input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={createNewMessage}>send</button>
    </div>
  );
};
