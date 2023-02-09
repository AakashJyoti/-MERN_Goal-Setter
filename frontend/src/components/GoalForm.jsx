import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

const GoalForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      dispatch(createGoal({ text }));
      setText("");
    }
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Enter your Goal</label>
          <input
            placeholder="Enter goal"
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
};
export default GoalForm;
