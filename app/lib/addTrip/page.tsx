//============================================================================
// Name        : addTrip/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : Backend logic to create a new trip in trip database table
//============================================================================

import Navbar from '../../navbar/page';
import { sql } from '@vercel/postgres';
import React from 'react';
//imports sql functionality from vercel
export default async function addTrip () {

    //post request to add a new trip on click (FORM) TRIP(code, name, resort, perPerson, image) 

    //const insertTrip = await sql`INSERT INTO trip (code, name, resort, perPerson, image) VALUES ()`;
    //const data = insertTrip.fields;
    return (
        <>
           <h1>SUCCESS</h1>
      
        </>
    )
}