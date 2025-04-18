import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import Filter from "./Filter";
import Display from "./Display";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    let test = persons.filter((person) => {
      return person.name === newName;
    });
    if (test.length > 0) {
      alert(`${newName} is already added in the phonebook`);
      setNewName("");
      setNewPhone("");
    } else {
      const obj = {
        name: newName,
        number: newPhone,
        id: persons[persons.length - 1].id + 1,
      };
      axios
        .post("http://localhost:3001/persons/", obj)
        .then((response) =>
          setPersons((prevPersons) => [...prevPersons, response.data])
        );
      setNewName("");
      setNewPhone("");
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>add a new</h2>
      <Form
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
        handleClick={handleClick}
      />
      <h2>Numbers</h2>
      <Display persons={persons} filter={filter} />
    </div>
  );
};

export default App;
