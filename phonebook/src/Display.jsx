import List from "./List.jsx";
const Display = (props) => {
  const filtered = props.persons.map((person) => {
    const filteredName =
      props.filter.length !== 0 &&
      person.name.toLowerCase().includes(props.filter.toLowerCase());
    return (
      filteredName && (
        <List
          id={person.id}
          key={person.id}
          name={person.name}
          number={person.number}
          handleDelete={props.handleDelete}
        />
      )
    );
  });
  return props.filter.length !== 0
    ? filtered
    : props.persons.map((person) => (
        <List
          id={person.id}
          key={person.id}
          name={person.name}
          number={person.number}
          handleDelete={props.handleDelete}
        />
      ));
};
export default Display;
