import { sql } from '@vercel/postgres';

export default async function addTrip () {
    //post request to add a new trip on click (FORM) TRIP(code, name, resort, perPerson, image)
     const insertTrip = await sql`INSERT INTO TABLE trip (code, name, resort, perPerson, image) VALUES ()`;
    return (
        <>
        
        </>
    )
}