import React from "react";

const Container2 = () => {
  return (
    <div className="container2">
      <div className="ctx">
        <div className="left">
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h2>
        </div>
        <div className="right">
          <div className="tv">
            <img src="/tv.png" alt="tv" />
            <video
              src="/video.m4v"
              autoPlay
              type="video/mp4"
              playsInline
              muted
              loop
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container2;
