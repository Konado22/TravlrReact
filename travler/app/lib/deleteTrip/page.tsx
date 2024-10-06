//============================================================================
// Name        : deleteTrip/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : Logic for deleting a trip based upon trip.code
//============================================================================
import { sql } from "@vercel/postgres"

export default async function DeleteTrip () {
    //delete trip by code(code) TRIP(code, name, resort, perPerson, image)
    const delTrip = await sql`DELETE FROM TRIP WHERE code = code `;

}