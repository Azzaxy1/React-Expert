/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function GoalInput({ addGoal }) {
  const [text, setText] = useState("");

  const onTextChangeHandler = ({ target }) => setText(target.value);

  return (
    <div>
      <input type="text" value={text} onChange={onTextChangeHandler} />
      <button onClick={() => addGoal(text)}>Add goal</button>
    </div>
  );
}

export default GoalInput;
