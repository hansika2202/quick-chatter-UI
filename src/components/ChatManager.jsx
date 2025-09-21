import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ChatWindow from "./ChatWindow";
import "./ChatManager.css";

function ChatManager() {
  const [step, setStep] = useState("choose"); // choose | admin | create | join | chat
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [chatName, setChatName] = useState("");
  const [messages, setMessages] = useState([]);

  // Admin login
  const handleAdminLogin = () => {
    if (username && password) {
      setStep("create");
    } else {
      alert("Enter username and password!");
    }
  };

  // Create chat
  const handleCreateChat = () => {
    if (!chatName.trim()) {
      alert("Enter chat name!");
      return;
    }
    uuidv4(); // just generate id, not used here
    setStep("chat");
  };

  // Join chat
  const handleJoinChat = () => {
    if (!username || !chatName) {
      alert("Enter name and chat name!");
      return;
    }
    setStep("chat");
  };

  // Send message
  const handleSendMessage = (msg) => {
    if (msg.trim()) {
      setMessages((prev) => [...prev, { sender: username, text: msg }]);
    }
  };

  // Exit chat
  const handleExitChat = () => {
    setUsername("");
    setPassword("");
    setChatName("");
    setMessages([]);
    setStep("choose");
  };

  // ---------------- UI ----------------
  if (step === "choose") {
    return (
      <div className="chat-manager">
        <h2>Login</h2>
        <div className="button-row">
          <button onClick={() => setStep("admin")}>Admin Controls</button>
          <button onClick={() => setStep("join")}>Join Chat</button>
        </div>
      </div>
    );
  }

  if (step === "admin") {
    return (
      <div className="chat-manager">
        <h2>Admin Controls</h2>
        <input
          type="text"
          placeholder="Admin username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleAdminLogin}>Login</button>
      </div>
    );
  }

  if (step === "create") {
    return (
      <div className="chat-manager">
        <h2>Create Chat</h2>
        <input
          type="text"
          placeholder="Enter Chat Name"
          value={chatName}
          onChange={(e) => setChatName(e.target.value)}
        />
        <button onClick={handleCreateChat}>Create</button>
      </div>
    );
  }

  if (step === "join") {
    return (
      <div className="chat-manager">
        <h2>Join Chat</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Chat Name"
          value={chatName}
          onChange={(e) => setChatName(e.target.value)}
        />
        <button onClick={handleJoinChat}>Join</button>
      </div>
    );
  }

  if (step === "chat") {
    return (
      <ChatWindow
        chatName={chatName}
        username={username}
        messages={messages}
        onSendMessage={handleSendMessage}
        onExit={handleExitChat}
      />
    );
  }

  return null;
}

export default ChatManager;
