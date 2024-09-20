import React from "react";
import "../css/home.css";
import "../css/main.css";
const Virtual = () => {
  const handleClick = () => {
    const discordInviteUrl = "https://discord.gg/ycWj6JMy"; // Replace with your Discord invite link
    window.open(discordInviteUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="main-container">
      <div className="secondary-container">
        <div className="glowing-secondary">"Hana, I can't make it"</div>
        <div className="normal">No worries sugar!</div>
        <div className="secondary-text">
          You can always be part of the remote celabration!
        </div>
        <div className="secondary-text">
          It will take place in dst, join us and the kawaiijus to an intense
          session of dst, we will be wating over our discord
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
