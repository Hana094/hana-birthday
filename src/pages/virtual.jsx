import React from "react";
import "../css/home.css";
import "../css/main.css";
const Virtual = () => {
  const handleClick = () => {
    const discordInviteUrl = "Link"; // Replace with your Discord invite link
    window.open(discordInviteUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="main-container">
      <div className="secondary-container">
        <div className="glowing-secondary">"Hana, I can't make it"</div>
        <div className="normal">No worries, sugar!</div>
        <div className="secondary-text">
          You can always be part of the remote celebration!
        </div>
        <div className="secondary-text">
          It will take place on DST, join the kawaiijus and I in an intense game
          of Don't Starve together.
        </div>
        <div className="secondary-text">
          We'll be waiting for you on our Discord on september 27 at 7pm.
        </div>
        <div className="outrun">One of us</div>
        <button className="glass-button" onClick={handleClick}>
          Join
        </button>
      </div>
    </div>
  );
};

export default Virtual;
