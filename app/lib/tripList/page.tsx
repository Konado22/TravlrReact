//=================================================================================
// Name        : tripList/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : Logic to get all trips from trip table and load as JSX component
//=================================================================================
import { sql } from "@vercel/postgres";
import React from "react";
import Image from 'next';
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
        <h1 className='text-6xl font-mono'>Current Trips</h1>
      </div>
      <div className="flex grid-flow-row justify-around align-middle">
        {tripResults.map((trip) => {
          return (
            <div key={trip.code} className="border-4 border-orange-300 rounded-lg shadow-sm hover:shadow-2xl">
              <img src={trip.image}/>
              <div className="flex grid-flow-row justify-between bg-orange-300">
                <div>
                  <h1>{trip.name}</h1>
                  <h2>{trip.resort}</h2>
                  <h2>${trip.perperson}</h2>
                </div>
                <div className='flex'>
                  <img className='hover:shadow-xl hover:bg-orange-400' src="/edit.png" width='60px'/>
                  <img className='hover:shadow-xl hover:bg-orange-400'src="/trash.png" width='60px'/>
                </div>
              </div>
            </div>)
        })}
      </div>
    </>
  )
}
export default TripList;