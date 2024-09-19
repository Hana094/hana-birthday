import React, { useRef, useState } from "react";
import "../css/home.css";
import "../css/main.css";
const Home = () => {
  const videoRef = useRef(null);
  const [hideButton, setHideButton] = useState(false);

  const handlePlayVideo = () => {
    videoRef.current.play();
    setHideButton(true);
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

      <div className="video-container" hidden={!hideButton}>
        <video ref={videoRef} width="500" controls>
          <source src="/video/HanaBD.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
