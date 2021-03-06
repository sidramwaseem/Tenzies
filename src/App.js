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
    }
  }, [dice]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  const [count, setCount] = React.useState(0);

  var highscore = localStorage.getItem("highscore");

  function rollDice() {
    if (!tenzies) {
      setCount((prevCount) => prevCount + 1);
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      if (highscore !== null) {
        if (count < highscore) {
          localStorage.setItem("highscore", count);
        }
      } else {
        localStorage.setItem("highscore", count);
      }
      setCount(0);
      setTenzies(false);
      setDice(allNewDice());
    }
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
      <p className="main__para">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
      <div className="main__dice-container">{diceElement}</div>
      <button onClick={rollDice} className="main__btn">
        {tenzies ? "New Game" : "Roll"}
      </button>
      <h4>No of Rolls: {count} </h4>
      <h5>Lowest Number of Rolls: {highscore} </h5>
    </main>
  );
}

export default App;
