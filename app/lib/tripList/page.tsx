//=================================================================================
// Name        : tripList/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : Logic to get all trips from trip table and load as JSX component
//=================================================================================
import { sql } from "@vercel/postgres";
import React from "react";
//imports sql functionality from vercel
//get ALL trips, pass to dashboard for rendering
const TripList = async () => {
  "use server"
  const res = await sql`SELECT * FROM trip`;
  const tripResults = res.rows;
  //console.log(tripResults)
  //map iteration return allows for creating individual card components
  return (
    <>
      <div>
        <h1 className='text-6xl font-mono text-white'>Current Trips</h1>
      </div>
      <div className="flex grid-flow-row justify-around align-middle">
        {tripResults.map((trip) => {
          return (
            <div key={trip.code} className="border-4 rounded-lg shadow-sm hover:shadow-2xl">
              <img src={trip.image} />
              <div>
                <h1 className="text-white">{trip.name}</h1>
                <h2 className="text-white">{trip.resort}</h2>
                <h2 className="text-white">${trip.perperson}</h2>
                <div>
                  {/* insert Link Image for edit page */}
                  {/* insert Link Image for delete request  */}
                </div>
              </div>
            </div>)
        })}
      </div>
    </>
  )
}
export default TripList;