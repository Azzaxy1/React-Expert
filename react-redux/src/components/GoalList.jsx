// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import GoalInput from "./GoalInput";
import GoalItem from "./GoalItem";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncAddGoal,
  asyncDeleteGoal,
  asyncReceiveGoal,
} from "../redux/goals/action";

function GoalsList() {
  const goals = useSelector((states) => states.goals); // TODO: Get goals from store;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveGoal());
  }, [dispatch]);

  function onAddGoal(text) {
    // TODO: dispatch action ADD_GOAL
    dispatch(asyncAddGoal(text));
  }

  function onDeleteGoal(id) {
    // TODO: dispatch action DELETE_GOAL
    dispatch(asyncDeleteGoal(id));
  }

  return (
    <div>
      <h3>My Goals</h3>
      <GoalInput addGoal={onAddGoal} />

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <GoalItem {...goal} deleteGoal={onDeleteGoal} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalsList;
