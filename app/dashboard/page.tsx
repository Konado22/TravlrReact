//==================================================================================================
// Name        : dashboard/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : Render of dashboard page with navbar, triplist server call, and link to addTrip page
//===================================================================================================
import Navbar from "../navbar/page";
import TripList from "../api/tripList/page";
import React from "react";
import Link from "next/link";
//main dashboard of application renders navbar component as well as server-call to get tripList
export default async function Dashboard() {

//dashboard has no methodology built into it, future realease aims to implement state
    return (
        <>
            <Navbar />
                <div className="space-y-10">
                    <TripList />
                    <div className="flex justify-around">
                        <Link href={'/api/addTrip'} ><button className='shadow-lg border-2 border-spacing-3 border-orange-400 bg-wite rounded text-orange-400 p-2 hover:border-white hover:text-white'>Add Trip</button></Link>
                    </div>
                </div>
        </>
    );
}