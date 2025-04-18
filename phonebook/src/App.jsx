import { useState, useEffect } from "react";
import networkCalls from "./services/axios";
import Form from "./Form";
import Filter from "./Filter";
import Display from "./Display";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    networkCalls.getReq().then((initialData) => setPersons(initialData));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const test = persons.filter((person) => {
      return person.name === newName;
    });
    if (test.length > 0 && !newPhone) {
      alert(`${newName} is already added in the phonebook`);
      setNewName("");
      setNewPhone("");
    } else if (test.length > 0 && newPhone) {
      const name = test[0].name;
      const id = test[0].id;
      if (
        window.confirm(
          `${name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedObj = { ...test[0], number: newPhone };
        console.log("updateObj: ", updatedObj, "id: ", id);
        networkCalls.updateReq(id, updatedObj).then((updatedResponse) => {
          console.log("updatedResponse: ", updatedResponse);
          setPersons((prevPersons) =>
            prevPersons.map((person) =>
              person.id === id ? updatedResponse : person
            )
          );
        });
        console.log(persons);
      }
    } else {
      const obj = {
        name: newName,
        number: newPhone,
        id: persons[persons.length - 1].id + 1,
      };
      networkCalls
        .postReq(obj)
        .then((updatedData) =>
          setPersons((prevPersons) => [...prevPersons, updatedData])
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

  const handleDelete = (id) => {
    if (
      window.confirm(`Are you sure you want to delete the entry with ID ${id}?`)
    ) {
      networkCalls
        .delReq(id)
        .then((delId) => {
          setPersons((prevPersons) =>
            prevPersons.filter((person) => person.id !== delId)
          );
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            setPersons((prevPersons) =>
              prevPersons.filter((person) => person.id !== id)
            );
          } else {
            alert(
              `An error occurred while deleting: ${
                error.message || "Unknown error"
              }`
            );
          }
        });
    } else {
      console.log(`Deletion cancelled for ID: ${id}`);
    }
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
      {console.log(persons)}
      <Display persons={persons} filter={filter} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
