import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength="5"
        maxLength="5"
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.substr(0, 5).toUpperCase());
        }}
        pattern="[A-Z]{5}"
      />
    </form>
  );
}

export default GuessInput;
