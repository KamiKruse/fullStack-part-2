import { useState, useEffect } from "react";
import networkCalls from "./services/axios";
import Form from "./Form";
import Filter from "./Filter";
import Display from "./Display";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPhoneUpdated, setIsPhoneUpdated] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [notifiedName, setNotifiedName] = useState("");

  useEffect(() => {
    networkCalls.getReq().then((initialData) => setPersons(initialData));
  }, []);
  useEffect(() => {
    if (errorState || isSuccess || isPhoneUpdated) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setIsPhoneUpdated(false);
        setErrorState(false);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess, isPhoneUpdated, errorState]);

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
        networkCalls
          .updateReq(id, updatedObj)
          .then((updatedResponse) => {
            setPersons((prevPersons) =>
              prevPersons.map((person) =>
                person.id === id ? updatedResponse : person
              )
            );
          })
          .catch(() => {
            setIsSuccess(false);
            setErrorState((prev) => !prev);
            setPersons((prevPersons) =>
              prevPersons.filter((person) => person.id !== id)
            );
          });
        setIsPhoneUpdated((prev) => !prev);
      }
    } else {
      const obj = {
        name: newName,
        number: newPhone,
      };
      const addedName = newName;
      networkCalls.postReq(obj).then((updatedData) => setPersons(updatedData));
      setNotifiedName(addedName);
      setNewName("");
      setNewPhone("");
      setIsSuccess((prev) => !prev);
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
        .catch(() => {
          setErrorState((prev) => !prev);
          setPersons((prevPersons) =>
            prevPersons.filter((person) => person.id !== id)
          );
        });
    } else {
      console.log(`Deletion cancelled for ID: ${id}`);
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        isSuccess={isSuccess}
        notifiedName={notifiedName}
        isPhoneUpdated={isPhoneUpdated}
        newPhone={newPhone}
        errorState={errorState}
      />
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
      <Display persons={persons} filter={filter} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
