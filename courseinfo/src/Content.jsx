import Part from "./Part";
const Content = (props) => {
  return (
    <div>
      {props.part.map((part) => (
        <Part part={part.name} exercise={part.exercises} />
      ))}
    </div>
  );
};
export default Content;
