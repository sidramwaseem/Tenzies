import React from "react";
import Die from "./components/Die.jsx";

function App() {
  return (
    <main class="main">
      <div className="main__dice-container">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
      </div>
    </main>
  );
}

export default App;
