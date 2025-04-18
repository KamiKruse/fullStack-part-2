const List = (props) => {
  return (
    <li key={props.id} style={{ listStyle: "none" }}>
      {props.name} {props.number}
      <button onClick={() => props.handleDelete(props.id)}>delete</button>
    </li>
  );
};
export default List;
