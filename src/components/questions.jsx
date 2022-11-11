import React, { useState } from "react";

const Questions = () => {
  const questions = [
    {
      id: 1,
      title: " What is Netflix?",
      content:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      id: 2,
      title: "How much does Netflix cost?",
      content:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 45.99 TL to 93.99 TL a month. No extra costs, no contracts.",
    },
    {
      id: 3,
      title: "Where can I watch?",
      content:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      id: 4,
      title: "How do I cancel?",
      content:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      id: 5,
      title: "What can I watch on Netflix?",
      content:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      id: 6,
      title: "Is Netflix good for kids?",
      content:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\n\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];
  const [activeId, setActiveId] = useState();

  const _tap = (id) => setActiveId((prev) => (prev === id ? undefined : id));
  const [focus, setFocus] = useState(false);

  const _focus = () => setFocus(true);

  const _blur = () => setFocus(false);
  return (
    <div className="questions">
      <div className="ctx">
        <h1>Frequently Asked Questions</h1>
        <ul>
          {questions.map((que) => {
            const open = activeId === que.id;
            return (
              <li key={que.id} className={open ? "open" : "close"}>
                <button onClick={() => _tap(que.id)}>
                  <p>{que.title}</p>
                  <img src="/icons/close.svg" alt="close" />
                </button>
                <div className="content">
                  <p>{que.content}</p>
                </div>
              </li>
            );
          })}
        </ul>
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
    </div>
  );
};

export default Questions;
