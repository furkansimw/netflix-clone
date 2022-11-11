import React from "react";
import Container1 from "./components/container1";
import Container2 from "./components/container2";
import Container3 from "./components/container3";
import Container4 from "./components/container4";
import Questions from "./components/questions.jsx";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="app">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Questions />
      <Footer />
    </div>
  );
};

export default App;
