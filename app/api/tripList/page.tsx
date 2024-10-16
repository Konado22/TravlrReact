//=================================================================================
// Name        : tripList/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : Logic to get all trips from trip table and load as JSX component
//=================================================================================
import { sql } from "@vercel/postgres";
import React from "react";
import Image from 'next';
import DeleteTrip from "../deleteTrip/actions";
import UpdateTrip from "../updateTrip/action";
//imports sql functionality from vercel
//get ALL trips, pass to dashboard for rendering
const TripList = async () => {
  "use server"
  try {
    const res = await sql`SELECT * FROM trip`;
    const tripResults = res.rows;
    //console.log(tripResults)
    //map iteration return allows for creating individual card components
    //RETURN THE RESULT OF THE MAPPING EVERYTIME
    return (
      <>
        <div className="p-10">
          <h1 className='text-6xl font-mono text-orange-400'>Current Trips</h1>
        </div>
        <div className="flex grid-flow-row justify-around align-middle">
          {tripResults.map((trip) => {
            return (
              <div key={trip.code} className="border-4 border-orange-400 rounded shadow-sm hover:shadow-2xl">
                <img src={trip.image} />
                <div className="flex grid-flow-row justify-between bg-white">
                  <div className="p-5 space-y-2 font-bold text-orange-400">
                    <h1>{trip.name}</h1>
                    <h2>{trip.resort}</h2>
                    <h2>${trip.perperson}</h2>
                  </div>
                  <div className='flex p-5 justify-between'>
                    <img className='hover:shadow-md ' src="/edit.png" width='40px' />
                    <img className='hover:shadow-md ' src="/trash.png" width='40px' />
                  </div>
                </div>
              </div>)
          })}
        </div>
      </>
    )
  }
  catch (error) {
    return error(error);
  }
}
export default TripList;