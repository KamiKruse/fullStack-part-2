import Header from "./Header";
import Content from "./Content";
import Total from "./Total";
const Courses = (props) => {
  return (
    <>
      {props.courses.map((course) => {
        return (
          <>
            <Header name={course.name} />
            <Content part={course.parts} />
            <Total total={course.parts} />
          </>
        );
      })}

      {/* {props.courses.map((course) => (
        <Total total={course.courses} />
      ))} */}
    </>
  );
};
export default Courses;
