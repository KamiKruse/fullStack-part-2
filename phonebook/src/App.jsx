import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

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
      setPersons((prevPersons) => [
        ...prevPersons,
        { name: newName, phone: newPhone },
      ]);
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

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange} />
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
          {person.name} {person.phone}
        </li>
      ))}
    </div>
  );
};

export default App;
