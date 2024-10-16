//============================================================================
// Name        : dashboard/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : Render of dashboard page with components
//============================================================================
import Navbar from "../navbar/page";
import TripList from "../api/tripList/page";
import React from "react";
//main dashboard of application renders navbar component as well as server-call to get tripList
export default async function Dashboard() {
    //use server call allows for accessing server in static component
    "use client"
    //return navbar component, and Triplist get request from server
    return (
        <>
            <Navbar />
                <div className="space-y-10">
                    <TripList />
                    <div className="flex justify-around">
                        <button className='shadow-lg border-2 border-spacing-3 border-orange-300 bg-orange-300 rounded hover:text-white'>Add Trip</button>
                    </div>
                </div>
        </>
    );
}