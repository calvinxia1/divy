import React from "react";
import "./styles/ProfileButton.css"
import dara from "./img/dara.jpg"

const ProfileButton = () => {
  return (
    <div>
      <div className="dropdown">
        <button
          className="profile-button"
          type="button"
          id="book-dropdown"
          data-bs-toggle="dropdown"

        >
        <img src= {dara} alt="Profile Pic" className="profile-pic"/>
        </button>
      </div>
    </div>
  );
};

export default ProfileButton;
