import React from "react";

function Die(props) {
  // if(props.value === 1){
  //   return <div>sup</div>
  // }

  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF",
  };
  return (
    <div className="die" style={styles} onClick={props.holdDice}>
      <h3 className="die__number">{props.value}</h3>
    </div>
  );
}

export default Die;
