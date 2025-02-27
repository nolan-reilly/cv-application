import Header from "./components/Header";
import Section from "./components/Section";

export default function Resume() {
  return (
    <>
      <div className="border container">
        <Header />

        <div className="flex flex-col gap-16">
          <Section title="Education" />
          <Section title="Work Experience" />
        </div>
      </div>
    </>
  );
}
