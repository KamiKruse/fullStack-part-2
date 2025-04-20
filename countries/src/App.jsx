import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Display from "./Display";

const App = () => {
  const [countryName, setCountryName] = useState("");
  const [countries, setCountries] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => setCountries(response.data));
  }, []);

  const handleChange = (e) => {
    setCountryName(e.target.value);
    setIsTyping((prev) => !prev);
  };

  const country =
    countries &&
    countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(countryName.toLowerCase());
    });
  return (
    <>
      <form action="submit">
        <label htmlFor="countries">
          find countries
          <input
            type="text"
            name="countries"
            id="countries"
            value={countryName}
            onChange={handleChange}
          />
        </label>
      </form>
      <Display
        totalCountries={country?.length}
        country={country}
        isTyping={isTyping}
      />
    </>
  );
};
export default App;
