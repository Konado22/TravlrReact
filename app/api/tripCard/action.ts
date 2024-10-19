//============================================================================
// Name        : tripCard/page.ts
// Author      : Jesse Draper
// Version     : 1.0
// Description : Implement logic for singular trip component get request
//============================================================================
"use server"
import { sql } from "@vercel/postgres";
//imports sql functionality from vercel

export async function searchCode(trip) {
  try {
    //get singular trip by code based upon input in page file
    const getThisCard = await sql`GET * FROM trip WHERE code = ${trip.code}`;
    const data =getThisCard.rows;
    //return object for iteration
    return {data}
  }
  //catch and return error with returning data
  catch (error) {
    return error;
  }
}