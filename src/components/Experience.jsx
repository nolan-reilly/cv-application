import { useState } from "react";

import ExperienceContent from "./ExperienceContent";

export default function Experience() {
  const [info, setInfo] = useState({
    company: "Cleaners Co.",
    position: "Team Memeber",
    responsibilities: "Cleaner",
    date: "Jan-Dec",
  });
  const [isEditing, setIsEditing] = useState(false);

  function toggleEditing() {
    isEditing ? setIsEditing(false) : setIsEditing(true);
    console.log(isEditing);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInfo({
      company: e.target.company.value,
      position: e.target.position.value,
      responsibilities: e.target.responsibilities.value,
      date: e.target.date.value,
    });
  }

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1>Experience</h1>

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
          <label htmlFor="company">Company</label>
          <input name="company" type="text" />

          <label htmlFor="position">Position</label>
          <input name="position" type="text" />

          <label htmlFor="responsibilities">Responsibilities</label>
          <input name="responsibilities" type="text" />

          <label htmlFor="date">Date</label>
          <input name="date" type="text" />

          <input type="submit" />
        </form>
      ) : null}

      <ExperienceContent
        company={info.company}
        position={info.position}
        responsibilities={info.responsibilities}
        date={info.date}
      />
    </>
  );
}
