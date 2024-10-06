//=================================================================================
// Name        : tripList/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : Logic to get all trips from trip table and load as JSX component
//=================================================================================
import { sql } from "@vercel/postgres";
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
      <div className="flex grid-flow-row justify-around align-middle">
      {tripResults.map((trip) => {
        return (
            <div key={trip.code} className="border-black shadow-lg w-max hover:text-2xl hover:shadow-2xl">
              <img src={trip.image} />
                <h1>{trip.name}</h1>
                <h2>{trip.resort}</h2>
                <h2>${trip.perperson}</h2>
            </div>)
      })}
      </div>
      </>
    )
}
export default TripList;