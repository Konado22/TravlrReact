//============================================================================
// Name        : addTrip/action.ts
// Author      : Jesse Draper
// Version     : 1.0
// Description : Backend logic to create a new trip in trip database table
//============================================================================
"use server"
import { z } from "zod";
import { sql } from "@vercel/postgres";
//imports sql functionality from vercel
export async function createTrip (data) {
    let code = data.get('code')?.valueOf();
    let name = data.get('name')?.valueOf();
    let resort = data.get('resort')?.valueOf();
    let perPerson = data.get('perPerson')?.valueOf();
    let image = data.get('image')?.valueOf();
    //post request to add a new trip on click (FORM) TRIP(code, name, resort, perPerson, image) 

    //const insertTrip = await sql`INSERT INTO trip (code, name, resort, perPerson, image) VALUES ()`;
    //const data = insertTrip.fields;
    return 
}