const Filter = (props) => {
  return (
    <div>
      <label htmlFor="filter">
        filter shown with
        <input
          type="text"
          id="filter"
          name="filter"
          value={props.filter}
          onChange={props.handleFilter}
        />
      </label>
    </div>
  );
};
export default Filter;
