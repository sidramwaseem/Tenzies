import React from "react";
import Die from "./components/Die.jsx";

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function rollDice() {
    setDice(allNewDice());
  }

  function allNewDice() {
    let diceNum = [];
    for (let i = 0; i < 10; i++) {
      diceNum.push({ value: Math.ceil(Math.random() * 6), isHeld: false });
    }
    return diceNum;
  }

  const diceElement = dice.map((die) => <Die value={die.value} />);

  return (
    <main className="main">
      <div className="main__dice-container">{diceElement}</div>
      <button onClick={rollDice} className="main__btn">
        Roll
      </button>
    </main>
  );
}

export default App;
