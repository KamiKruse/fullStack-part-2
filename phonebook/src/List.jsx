const List = (props) => {
  return (
    <li key={props.id} style={{ listStyle: "none" }}>
      {props.name} {props.number}
    </li>
  );
};
export default List;
