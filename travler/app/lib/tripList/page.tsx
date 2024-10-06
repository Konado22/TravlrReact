import { sql } from "@vercel/postgres";
//loop to iterate over data from seed file until database integration, will integrate with backend
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