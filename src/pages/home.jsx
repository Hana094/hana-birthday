import React, { useRef, useState } from "react";
import "../css/home.css";
import "../css/main.css";
const Home = () => {
  const videoRef = useRef(null);
  const [hideButton, setHideButton] = useState(false);

  const handlePlayVideo = () => {
    setHideButton(true);
    videoRef.current.play();
  };
  return (
    <div className="main-container">
      <div className="glowing">Hana</div>
      <div className="normal">into the:</div>
      <div className="outrun">Señoraverse</div>
      {!hideButton && (
        <button className="glass-button" onClick={handlePlayVideo}>
          Start
        </button>
      )}

      <div className="video-container">
        <video ref={videoRef} width="100%" controls hidden={!hideButton}>
          <source src="/videos/HanaBD.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
