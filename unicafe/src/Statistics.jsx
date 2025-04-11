import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
  let isFeedbackGiven = props.good || props.bad || props.neutral ? true : false;

  return (
    <>
      <h1>statistics</h1>
      <div>
        {isFeedbackGiven ? (
          <table>
            <tbody>
              <StatisticLine text="good" value={props.good} />
              <StatisticLine text="neutral" value={props.neutral} />
              <StatisticLine text="bad" value={props.bad} />
              <StatisticLine text="total" value={props.total} />
              <StatisticLine text="average" value={props.average} />
              <StatisticLine text="positive" value={props.positive} />
            </tbody>
          </table>
        ) : (
          "No feedback given"
        )}
      </div>
    </>
  );
};

export default Statistics;
