import { useState } from "react";

export default function FormName() {
  const [firstName, setFirstName] = useState("Mary");
  const [lastName, setLastName] = useState("Poppins");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <div className="flex flex-col mt-6">
        <label>
          First name:
          <input className="border" value={firstName} onChange={handleFirstNameChange} />
        </label>
        <label>
          Last name:
          <input value={lastName} onChange={handleLastNameChange} />
        </label>
        <p>
          <b>
            Good morning, {firstName} {lastName}.
          </b>
        </p>
      </div>
    </>
  );
}
