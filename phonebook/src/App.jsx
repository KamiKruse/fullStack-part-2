import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "hi" }]);
  const [newName, setNewName] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    let test = persons.filter((person) => {
      return person.name === newName;
    });
    if (test.length > 0) {
      alert(`${newName} is already added in the phonebook`);
      setNewName("");
    } else {
      setPersons((prevPersons) => [...prevPersons, { name: newName }]);
      setNewName("");
    }
  };
  
  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button onClick={handleClick} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map((person) => (
        <li key={person.name} style={{ listStyle: "none" }}>
          {person.name}
        </li>
      ))}
    </div>
  );
};

export default App;
