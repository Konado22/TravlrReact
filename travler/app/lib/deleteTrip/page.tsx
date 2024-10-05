import { db } from "@vercel/postgres";

export default async function DeleteTrip () {
    const client = await db.connect();
    const deleteQuery = client.sql`IF EXISTS DELETE FROM trip ()`
}