import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeedback = good * 1
  const neutralFeedback = neutral * 0;
  const badFeedback = bad * -1;
  const total = good + bad + neutral
  const positive = total === 0 ? 0 : (goodFeedback * 100) / total;
  const average = total === 0 ? 0 : (goodFeedback + neutralFeedback + badFeedback)/total

  function handleClickGood() {
    setGood((prev) => prev + 1);
  }
  function handleClickNeutral() {
    setNeutral((prev) => prev + 1);
  }
  function handleClickBad() {
    setBad((prev) => prev + 1);
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleClickGood} text="good" />
      <Button onClick={handleClickNeutral} text="neutral" />
      <Button onClick={handleClickBad} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} average={average} positive={positive} />
    </div>
  );
};

export default App;
