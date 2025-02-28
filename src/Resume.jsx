import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";

export default function Resume() {
  return (
    <>
      <div className="border container resume-padding flex flex-col gap-16">
        <Header />
        <Education />
        <Experience />
      </div>
    </>
  );
}
