import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
const Course = (props) => {
     
  return (
    <>
      <Header name={props.course.name} />
      <Content part={props.course.parts}/>
      <Total total={props.course} />
    </>
  );
};
export default Course;
