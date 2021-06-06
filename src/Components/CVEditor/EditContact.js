import { useState } from "react";

function EditContact({ setContact, toggleVisibility }) {
  //Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setContact ({
      name,
      email,
      phoneNumber
    });

    toggleVisibility('contact'); // Hide the contact question.

  }

  function handleChange(target) {
    const element = target.name;
    const value = target.value;

    switch (element) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhoneNumber(value);
        break;
      default:
        console.log("The gods must be crazy");
        break;
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p>Name:</p>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              handleChange(e.target);
            }}
          />
        </label>
        <label htmlFor="email">
          <p>Email:</p>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              handleChange(e.target);
            }}
          />
        </label>
        <label htmlFor="phone">
          <p>Phone Number:</p>
          <input
            type="text"
            name="phone"
            id="phone"
            value={phoneNumber}
            onChange={(e) => {
              handleChange(e.target);
            }}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default EditContact;
