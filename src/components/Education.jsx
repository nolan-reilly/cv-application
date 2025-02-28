import { useState } from "react";
import EducationContent from "./EducationContent";

export default function Education() {
  const [info, setInfo] = useState({
    institution: "College",
    study: "Bachelors",
    date: "Jan 1",
  });
  const [isEditing, setIsEditing] = useState(false);

  function toggleEditing() {
    {
      isEditing ? setIsEditing(false) : setIsEditing(true);
    }
    console.log(isEditing);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInfo({
      institution: e.target.institution.value,
      study: e.target.study.value,
      date: e.target.date.value,
    });
  }

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1>Education</h1>

        {isEditing ? (
          <button className="edit-btn" onClick={toggleEditing}>
            Exit
          </button>
        ) : (
          <button className="edit-btn" onClick={toggleEditing}>
            Edit
          </button>
        )}
      </div>

      <hr />

      {isEditing ? (
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <label htmlFor="institution">Institution</label>
          <input name="institution" type="text" />

          <label htmlFor="study">Study</label>
          <input name="study" type="text" />

          <label htmlFor="date">date</label>
          <input name="date" type="text" />

          <input type="submit" />
        </form>
      ) : null}

      <EducationContent
        institution={info.institution}
        study={info.study}
        date={info.date}
      />
    </>
  );
}
