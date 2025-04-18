import List from "./List.jsx";
const Display = (props) => {
  return props.persons.map(
    (person) =>
      person.name.toLowerCase().includes(props.filter.toLowerCase()) && (
        <>
          <List id={person.id} key={person.id} name={person.name} number={person.number} />
          {/* <li key={person.id} style={{ listStyle: "none" }}>
            {person.name} {person.number}
          </li> */}
        </>
      )
  );
};
export default Display;
