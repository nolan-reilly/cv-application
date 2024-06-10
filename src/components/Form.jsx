import Card from "./Card";
import GeneralInfo from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";

export default function Form() {
    return (
        <form>
            <Card className="container card">
                <GeneralInfo/>
                <EducationInfo/>
                <ExperienceInfo/>

                <button type="submit">Submit</button>
            </Card>
        </form>
    );
}