//============================================================================
// Name        : tripCard/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : Implement logic for singular trip component
//============================================================================
import { sql } from "@vercel/postgres";
//imports sql functionality from vercel

 export default async function Tripcard () {
    //get singular trip by code
    const getATrip = await sql`SELECT * from trip WHERE code = $ `;
    const result= getATrip.fields;
  }