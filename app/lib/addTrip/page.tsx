//============================================================================
// Name        : addTrip/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : Backend logic to create a new trip in trip database table
//============================================================================
import Navbar from '@/app/navbar/page';
import { sql } from '@vercel/postgres';
//imports sql functionality from vercel
export default async function addTrip () {
    //post request to add a new trip on click (FORM) TRIP(code, name, resort, perPerson, image) 
    const insertTrip = await sql`INSERT INTO trip (code, name, resort, perPerson, image) VALUES ()`;
    return (
        <>
            <Navbar />
            <form method='post'>
            <label></label>
            <input type='text'id='code'></input>
            <label></label>
            <input type='text'id='name'></input>
            <label></label>
            <input type='text'id='resort'></input>
            <label></label>
            <input type='text'id='perPerson'></input>
            <label></label>
            <input type='text'id='image'></input>
            <input type='submit' value='Submit'/>
            </form>
        </>
    )
}