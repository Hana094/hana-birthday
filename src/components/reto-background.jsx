import React from "react";
import "../css/retro-styles.css";

const RetroBackground = (props) => {
  return (
    <div className="retro-background">
      <div className="glow" />
      <div className="inner-wrapper">
        <div className="retro-landscape" />
      </div>
      {props.children}
    </div>
  );
};

export default RetroBackground;
