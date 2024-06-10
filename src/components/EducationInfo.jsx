export default function EducationInfo() {
    return (
        <div>
            <h2>Education</h2>

            <hr/>

            <div className="flex">
                <div className="row">
                    <label htmlFor="institution">Institution</label>
                    <input id="institution" type="text" placeholder="Harvard University"/>
                </div>

                <div className="row">
                    <label htmlFor="study">Title of Study</label>
                    <input id="study" type="text" placeholder="Cybersecurity"/>
                </div>

                <div className="row">
                    <label htmlFor="graduationDate">Graduation Date</label>
                    <input id="graduationDate" type="text" placeholder="5/13/25"/>
                </div>
            </div>
            
        </div>
    )
}