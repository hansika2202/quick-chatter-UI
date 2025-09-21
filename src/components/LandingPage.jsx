import React from "react";
import FeatureCard from "./FeatureCard";
import "./LandingPage.css";

function LandingPage({ setPage }) {
  const features = [
    {
      title: "No Authentication",
      description: "Create or join chat groups without login",
      icon: "👤",
      onClick: () => setPage("Login"),
    },
    {
      title: "Auto-Expiring Chats",
      description: "Chats automatically expire over time",
      icon: "⏰",
    },
    {
      title: "Bot Protection",
      description: "Prevent automated abuse and spam",
      icon: "🛡️",
    },
    {
      title: "Admin Controls",
      description: "Group creators can manage users",
      icon: "👨‍💼",
    },
  ];

  return (
    <div className="landing-container">
      <main className="main-content">
        <h1>Temporary Chat Made Simple</h1>
        <p className="subheading">
          Create or join chat groups without login requirements.
          <br />
          Chats automatically expire, ensuring security and preventing misuse.
        </p>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
