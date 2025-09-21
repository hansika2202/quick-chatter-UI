import React from "react";
import "./FeatureCard.css";

function FeatureCard({ title, description, icon, onClick }) {
  return (
    <div 
      className="card" 
      onClick={onClick} 
      style={{ cursor: onClick ? "pointer" : "default" }}  // ✅ clickable only if onClick exists
    >
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;
