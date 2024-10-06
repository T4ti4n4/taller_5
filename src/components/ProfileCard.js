import React from "react";
import "../style/ProfileCard.Style.css";
import img from "../assets/IMG.jpeg";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img src={img} alt="Profile" />
      <h2 className="profile-name">Tatiana Barco Gonzalez</h2>
      <p className="profile-description">
        Estudiante (Mujeres digitales 2024){" "}
      </p>
    </div>
  );
};

export default ProfileCard;
