import Part from "./Part";
const Content = (props) => {
  return (
    <div>
      {props.part.map((part) => (
        <Part
          key={part.id}
          id={part.id}
          part={part.name}
          exercise={part.exercises}
        />
      ))}
    </div>
  );
};
export default Content;
