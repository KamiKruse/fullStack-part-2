import List from "./List.jsx";
const Display = (props) => {
  return props.persons.map((person) => {
    return (
      <List
        id={person.id}
        key={person.id}
        name={person.name}
        number={person.number}
        handleDelete={props.handleDelete}
      />
    );
  });
  // return props.persons.map((person) =>
  //   (props.filter && person.name.toLowerCase().includes(props.filter.toLowerCase())) ? (
  //     <List
  //       id={person.id}
  //       key={person.id}
  //       name={person.name}
  //       number={person.number}
  //       handleDelete={props.handleDelete}
  //     />
  //   ) : (
  //     <List
  //       id={person.id}
  //       key={person.id}
  //       name={person.name}
  //       number={person.number}
  //       handleDelete={props.handleDelete}
  //     />
  //   )
  // );
};
export default Display;
