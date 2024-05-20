/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

function GoalItem({ id, text, deleteGoal }) {
  return (
    <div>
      <span>{text}</span>
      <button onClick={() => deleteGoal(id)}>x</button>
    </div>
  );
}

export default GoalItem;
