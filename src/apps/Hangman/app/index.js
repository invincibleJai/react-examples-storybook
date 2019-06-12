import React, { useState } from "react";

import { hangman, getNewGame } from "../logic";

import { UI } from "./components/UI";

export const Hangman = props => {
  const [state, setState] = useState(
    getNewGame({
      answer: props.answer
    })
  );

  const makeGuess = guess => setState(hangman(guess, state));

  return (
    <div>
      <UI state={state} makeGuess={makeGuess} />
    </div>
  );
};
