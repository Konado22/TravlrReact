//============================================================================
// Name        : dashboard/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Copyright   : Copyright © 2017 SNHU COCE
// Description : Render of dashboard page with components
//============================================================================
import Navbar from "../navbar/page";
import TripList from "../lib/tripList/page";
//main dashboard of application renders navbar component as well as server-call to get tripList
export default async function Dashboard() {
    //use server call allows for accessing server in static component
    "use server"
    return (
        <>
            <Navbar />

            <TripList />
            <div className="flex justify-around">
                <button className='border text-white rounded hover:bg-blue-300'>Add Trip</button>
                <button className="border text-white rounded hover:bg-blue-300">Edit Trip</button>
            </div>

        </>
    );
}