export default function ExperienceContent({
  company,
  position,
  responsibilities,
  date,
}) {
  return (
    <>
      <div className="flex flex-row justify-between">
        <p>
          {company}, {position}
        </p>
        <p>{date}</p>
      </div>

      <ul>
        <li>{responsibilities}</li>
      </ul>
    </>
  );
}
