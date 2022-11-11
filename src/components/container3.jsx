import React from "react";

const Container3 = () => {
  return (
    <div className="container3">
      <div className="ctx">
        <div className="left">
          <div className="phone">
            <img src="/phone.jpg" alt="phone" className="phone" />
            <div className="card">
              <img className="st" src="/stranger-things.png" alt="ci" />
              <div className="text">
                <p>Stranger Things</p>
                <p className="status">Downloading...</p>
              </div>
              <img className="gif" src="/icons/downland.gif" alt="gif" />
            </div>
          </div>
        </div>
        <div className="right">
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favorites easily and always have something to watch.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Container3;
