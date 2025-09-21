import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import ChatManager from "./components/ChatManager";
import logo from "./assests/logo.png";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app-container">
      <header className="nav-header">
        <img
          src={logo}
          alt="Quick Chatter Logo"
          className="nav-logo"
          onClick={() => setPage("home")} // ✅ logo redirects home
          style={{ cursor: "pointer" }}
        />
        <nav className="nav-links">
          <span
            className={`nav-link ${page === "home" ? "active" : ""}`}
            onClick={() => setPage("home")}
          >
            Home
          </span>
          <span
            className={`nav-link ${page === "Login" ? "active" : ""}`}
            onClick={() => setPage("Login")}
          >
            Login
          </span>
        </nav>
      </header>

      <main>
        {page === "home" && <LandingPage setPage={setPage} />}  {/* ✅ pass setPage */}
        {page === "Login" && <ChatManager />}
      </main>
    </div>
  );
}

export default App;
