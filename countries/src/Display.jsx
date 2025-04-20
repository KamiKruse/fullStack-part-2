const Display = (props) => {
  const countries = props?.country?.map((item) => {
    return (
      <li style={{ listStyle: "none" }} key={item.ccn3}>
        {item.name.common}
      </li>
    );
});
console.log(countries)
  const totalMessage =
    props?.totalCountries > 10 && props.isTyping
      ? "Too many matches, specify another filter"
      : props?.totalCountries < 10 &&
        props?.totalCountries > 1
      ? countries
      : countries;



  return totalMessage ? <div>{totalMessage}</div> : null;
};
export default Display;
