export default function GeneralInfo() {
    return (

        <div>
            <h2>General Information</h2>

            <hr/>

            <div className="flex">
                <div className="row">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="john doe"/>
                </div>

                <div className="row">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" placeholder="name@email.com"/>
                </div>

                <div className="row">
                    <label htmlFor="number">Number</label>
                    <input id="number" type="text" placeholder="xxx-xxx-xxxx"/>
                </div>
            </div>
        </div>
    );
}

