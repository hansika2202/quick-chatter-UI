import React, { useState } from "react";
import "./ChatWindow.css";

function ChatWindow({ chatName, username, messages, onSendMessage, onExit }) {
  const [msg, setMsg] = useState("");

  const send = () => {
    if (msg.trim()) {
      onSendMessage(msg);
      setMsg("");
    }
  };

  return (
    <div className="chat-window">
      {}
   <div className="chat-header">
  <h3>Chat Name: {chatName}</h3>
  <div className="header-right">
    <span className="logged-in">Logged in as: {username}</span>
    <button className="exit-button" onClick={onExit}>Exit</button>
  </div>
</div>


      <div className="chat-messages">
        {messages.length > 0 ? (
          messages.map((m, idx) => (
            <div
              key={idx}
              className={`chat-message ${m.sender === username ? "own-message" : ""}`}
            >
              <strong>{m.sender}:</strong> {m.text}
            </div>
          ))
        ) : (
          <p className="no-messages">No messages yet.</p>
        )}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
