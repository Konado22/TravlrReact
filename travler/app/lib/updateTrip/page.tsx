import { db } from "@vercel/postgres";

export default async function UpdateTrip() {
    const client = await db.connect();
    const updateQuery = client.sql`INSERT INTO TABLE trip ()`
}