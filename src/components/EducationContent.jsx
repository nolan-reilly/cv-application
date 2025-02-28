export default function EducationContent({ institution, study, date }) {
  return (
    <>
      <div className="flex flex-row justify-between">
        <p>
          {institution}, {study}
        </p>
        <p>{date}</p>
      </div>
    </>
  );
}
