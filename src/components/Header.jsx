import { useState } from "react";

import Content from "./HeaderContent";

export default function Header() {
  const [info, setInfo] = useState({
    name: "Name",
    email: "test@email.com",
    number: "123-456-7890",
  });

  const [isEditing, setIsEditing] = useState(false);

  function toggleEditing() {
    isEditing ? setIsEditing(false) : setIsEditing(true);
    console.log(isEditing);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInfo({
      name: e.target.name.value,
      email: e.target.email.value,
      number: e.target.number.value,
    });

    console.log(e.target);
  }

  // I think the plan would be to display a default resume first with edit buttons
  // on the top right in which we click and a form will display to edit that section
  if (isEditing) {
    return (
      <>
        <div className="flex">
          <button className="edit-btn" onClick={toggleEditing}>
            Exit
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>

          <div>
            <label htmlFor="number">Number</label>
            <input id="number" type="text" />
          </div>

          <input type="submit" value="submit" />
        </form>

        <Content name={info.name} email={info.email} number={info.number} />
      </>
    );
  }

  // We could take in some props such as section title
  // Need to add some form of edit and submit button
  return (
    <>
      <div className="flex">
        <button className="edit-btn" onClick={toggleEditing}>
          Edit
        </button>
      </div>

      <Content name={info.name} email={info.email} number={info.number} />
    </>
  );
}
