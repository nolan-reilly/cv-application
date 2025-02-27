import { useState } from "react";

export default function Section({ title, children }) {
  const [isEditing, setIsEditing] = useState(false);

  function toggleEditing() {
    isEditing ? setIsEditing(false) : setIsEditing(true);
    console.log(isEditing);
  }

  return (
    <>
      <div className="flex flex-row content-center">
        <h1>{title}</h1>
        <button class="edit-btn ml-auto mr-8" onClick={toggleEditing}>
          Edit
        </button>
      </div>

      <hr />
      {children}
    </>
  );
}
