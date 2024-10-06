import { sql } from "@vercel/postgres";
import conn from "../dbConnect";

export default async function UpdateTrip(req,res) {
    "use server"
    try {

        const updateQuerry = await conn.sql`UPDATE trip where`

    } catch (error) {
       return res.json(error);
    }
}