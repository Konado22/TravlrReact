import { db } from "@vercel/postgres";
import { sql } from "@vercel/postgres";
import conn from "../dbConnect";

//loop to iterate over data from seed file until database integration, will integrate with backend
export default async function Triplist(req, res) {
    "use server"
    try {

        const tripListings = conn;
        console.log('connected');
        return (

            tripListings.rows.map(trip => {
                    <>
                        <h2>success</h2>
                        <h1>{trip.name}</h1>
                        <h2>{trip.resort}</h2>
                        <h2>${trip.perPerson}</h2>

                    </>

                }))
            


        
    }
    catch (err) {
        console.error("FETCH DATA ERROR");
        return console.log(err)

    }
} 