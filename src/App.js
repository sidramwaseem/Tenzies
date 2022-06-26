import React from "react";
import Die from "./components/Die.jsx";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld === true);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);

    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("You Won!");
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDie();
      })
    );
  }

  function allNewDice() {
    let diceNum = [];
    for (let i = 0; i < 10; i++) {
      diceNum.push(generateNewDie());
    }
    return diceNum;
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElement = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main className="main">
    {tenzies && <Confetti />}
      <h1 className="main__heading">Tenzies</h1>
      <p className="main__para" >
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
      <div className="main__dice-container">{diceElement}</div>
      <button onClick={rollDice} className="main__btn">
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
