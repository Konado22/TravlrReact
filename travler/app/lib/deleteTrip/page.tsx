import { sql } from "@vercel/postgres"

export default async function DeleteTrip () {
    //delete trip(code) TRIP(code, name, resort, perPerson, image)
    const delTrip = await sql`DELETE FROM TRIP WHERE code = code `;

}