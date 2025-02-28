export default function UserInfo({ name, email, number }) {
  return (
    <>
      <div className="flex flex-col gap-16">
        <h1 className="mx-auto">{name}</h1>
        <div className="flex flex-row justify-around">
          <h3>{email}</h3>
          <h3>{number}</h3>
        </div>
      </div>
    </>
  );
}
