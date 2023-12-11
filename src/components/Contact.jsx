import { useState } from "react";
import ContactsList from "./ContactsList";
import inputs from "../constant/inputs";
import { v4 } from "uuid";

import styles from './Contact.module.css';

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const deleteHandler = id => {
    const newContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(newContacts)
  }

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setError("Please enter valid data!");
      return;
    }
    setError("");
    setContacts((contacts) => [...contacts, { ...contact, id: v4() }]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div className={styles.alert}>{error && <p>{error}</p>}</div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
};

export default Contact;
