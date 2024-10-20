//============================================================================
// Name        : deleteTrip/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : Logic for deleting a trip based upon trip.code
//============================================================================
import { sql } from "@vercel/postgres";
//import sql from vercel
export default async function DeleteTrip() {
    //use params to access trip information from card and use for button method
    try {
        //delete trip by Trip(code) TRIP(code, name, resort, perPerson, image)
        //try statements to test logic
        const delTrip = await sql`DELETE FROM trip WHERE trip.code = ${this.code} `;
        return console.log(delTrip);
    }
    //return error 
    catch (error) {
        return console.log(error);
    }
}