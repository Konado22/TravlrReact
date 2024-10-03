import { db } from "@vercel/postgres";
import { sql } from "@vercel/postgres";

//loop to iterate over data from seed file until database integration, will integrate with backend
export default async function Triplist() {
    
   const client = await db.connect();
   await client.sql`SELECT * FROM trip`;

   try {
   }
   catch(err) {
    console.error("FETCH DATA ERROR");

   }

    return (
       /*tripFetch.map(() => {
        <>
            <h1>trip name</h1>
            <h2>trip cost</h2>
            <h3>trip per person</h3>
        </>
       })
    */
    <>
    inprogress
    </>
    )
}