//============================================================================
// Name        : deleteTrip/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : Logic for deleting a trip based upon trip.code
//============================================================================
import { sql } from "@vercel/postgres"

export default async function DeleteTrip() {
    try {
        //delete trip by Trip(code) TRIP(code, name, resort, perPerson, image)
        const delTrip = await sql`DELETE FROM trip WHERE trip.code = code `;
        return 'success'
    }
    catch (error) {
        return error(error);
    }
}