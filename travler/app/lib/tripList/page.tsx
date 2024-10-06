//=================================================================================
// Name        : tripList/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Copyright   : Copyright © 2017 SNHU COCE
// Description : Logic to get all trips from trip table and load as JSX component
//=================================================================================
import { sql } from "@vercel/postgres";
//imports sql functionality from vercel
//get ALL trips, pass to dashboard for rendering
  const TripList = async () => {
    const res = await sql`SELECT * FROM trip`;
    const tripResults = res.rows;

    return (
      <>
      {tripResults.map((trip) => {
            <div key={trip.code}>
                <h1>{trip.name}</h1>
            </div>
      })}
      </>
    )
}
export default TripList;