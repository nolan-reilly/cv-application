export default function ExperienceInfo() {
    return (
        <div>
        <h2>Experience</h2>

        <hr/>

        <div className="flex">
            <div className="row">
                <label htmlFor="company">Company</label>
                <input id="company" type="text" placeholder="McDonald's"/>
            </div>

            <div className="row">
                <label htmlFor="positionTitle">Position Title</label>
                <input id="positionTitle" type="text" placeholder="Manager"/>
            </div>

            <div className="row">
                <label htmlFor="datesWorked">Dates Worked</label>
                <input id="datesWorked" type="text" placeholder="1/1/23 - 6/1/23"/>
            </div>
        </div>
        
    </div>
    )
}