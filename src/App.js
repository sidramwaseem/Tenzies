import React from "react";
import Die from "./components/Die.jsx";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  // const [tenzies, setTenzies] = React.useState(false);

  // React.useEffect(){}

  function generateNewDie(){
    return {
      value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
    }
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die =>{
      return die.isHeld ? die : generateNewDie()
    }));
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
      <div className="main__dice-container">{diceElement}</div>
      <button onClick={rollDice} className="main__btn">
        Roll
      </button>
    </main>
  );
}

export default App;
