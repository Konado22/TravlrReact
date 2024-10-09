//============================================================================
// Name        : updateTrip/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : Logic for updating a trip by trip.code
//============================================================================
import { sql } from "@vercel/postgres";
//imports sql functionality from vercel


export default async function UpdateTrip(req,res) {
    "use server"
    alert('are you sure you want to edit this trip');

    //allows for server request in component. Update trip by code

    try {

    } catch (error) {
       return res.json(error);
    }
}