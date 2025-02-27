import Header from "./components/Header";
import Section from "./components/Section";

export default function Resume() {
  return (
    <>
      <div className="border container">
        <Header />
        <Section title="Education" />
        <Section title="Work Experience" />
      </div>
    </>
  );
}
