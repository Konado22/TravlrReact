import { db } from "@vercel/postgres";
import { sql } from "@vercel/postgres";

//loop to iterate over data from seed file until database integration, will integrate with backend
export default async function Triplist(req, res) {
    try {
        console.log('awaiting request');
        const client = await db.connect();
        const tripListings = await client.sql`SELECT * FROM trip`;
        console.log('connected');
        return (

            tripListings.rows.map(trip => {
                    <>
                        <h1>{trip.name}</h1>
                        <h2>{trip.resort}</h2>
                        <h2>${trip.perPerson}</h2>

                    </>

                }))
            


        
    }
    catch (err) {
        console.error("FETCH DATA ERROR");
        return res.json(err)

    }
} 