import { useState } from "react";

export default function Section({ title, children }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>

      <hr />
      {children}
    </>
  );
}
