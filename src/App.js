import React from "react";
import Die from "./components/Die.jsx";

function App() {

  const [dice, setDice] = React.useState(allNewDice());

  console.log(setDice);

  function allNewDice(){
    let diceNum = [];
    for(let i= 0; i<10; i++){
      diceNum.push(Math.ceil(Math.random() * 6));
    }
    return diceNum;
  }

  const diceElement = dice.map(die=> <Die value={die} />)

  return (
    <main className="main">
      <div className="main__dice-container">
       {diceElement}
      </div>
      <button className="main__btn" >Roll</button>
    </main>
  );
}

export default App;
