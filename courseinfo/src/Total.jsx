const Total = (props) => {
  return (
    <p>
      <b>
        total of{" "}
        {props.total.reduce((acc, part) => acc + part.exercises, 0)}{" "}
        exercises
      </b>
    </p>
  );
};
export default Total;
