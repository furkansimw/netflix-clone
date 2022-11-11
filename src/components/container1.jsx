import React, { useState } from "react";

const Container1 = () => {
  const [focus, setFocus] = useState(false);

  const _focus = () => setFocus(true);

  const _blur = () => setFocus(false);

  return (
    <div className="container1">
      <div className="header">
        <img src="/icons/netflix.svg" />
        <div className="right">
          <select name="languages" id="languages">
            <option value="English">English</option>
            <option value="Turkish">Turkish</option>
          </select>
          <button>Sign In</button>
        </div>
      </div>
      <div className="content">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <form>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="input-box">
            <input type="text" id="email" onFocus={_focus} onBlur={_blur} />
            <label className={focus ? "active" : ""} htmlFor="email">
              Email address
            </label>
            <button>
              <p>Get Started</p>
              <img src="/icons/rightarrow.svg" alt="right-icon" />
            </button>
          </div>
        </form>
      </div>
      <div className="layer"></div>
    </div>
  );
};

export default Container1;
