import { useState } from "react";

export default function Section() {
  const [isEditing, setIsEditing] = useState(false);
  // const [submit, setSubmit] = useEffect(false);

  function toggleEditing() {
    isEditing ? setIsEditing(false) : setIsEditing(true);
    console.log(isEditing);
  }

  // We could take in some props such as section title
  // Need to add some form of edit and submit button
  return (
    <>
      <button >submit</button>   
      <button onClick={toggleEditing}>Edit</button>

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
        <input id="phone" type="phone" />
      </div>

    </>
  )
}