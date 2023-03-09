import React, { useState } from "react";
import Button from "./Button";

const GuessControl = ({onGuess}) => {

  const [currentGuess, setCurrentGuess] = useState('')


  const handleInputChange = (event) => {
    setCurrentGuess(event.target.value);
  }

  const onSubmitGuess = (evt) => {
    // Since the values from an HTML input are strings by default,
    //  convert to a number for the returned guess value
    //  by passing in the string to the Number function.
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    evt.preventDefault();
    onGuess(Number(currentGuess));
    setCurrentGuess('')
  }

    return (
      <div>
        <form onSubmit={onSubmitGuess}>
        <input
          type="number"
          value={currentGuess}
          onChange={handleInputChange}
          />
          <input type="submit" />
          </form>
      </div>
    );
}

export default GuessControl;
