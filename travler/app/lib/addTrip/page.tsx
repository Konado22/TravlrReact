//============================================================================
// Name        : addTrip/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Copyright   : Copyright © 2017 SNHU COCE
// Description : Backend logic to create a new trip in trip database table
//============================================================================
import { sql } from '@vercel/postgres';
//imports sql functionality from vercel
export default async function addTrip () {
    //post request to add a new trip on click (FORM) TRIP(code, name, resort, perPerson, image) 
     const insertTrip = await sql`INSERT INTO TABLE trip (code, name, resort, perPerson, image) VALUES ()`;
    return (
        <>
        
        </>
    )
}