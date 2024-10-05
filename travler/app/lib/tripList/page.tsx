import { sql } from "@vercel/postgres";

//loop to iterate over data from seed file until database integration, will integrate with backend
export default async function Triplist(req, res) {
    "use server"
    try {
        const {rows,fields} = await sql`SELECT * FROM trip`;
        console.log('connected');
    }
    catch (err) {
        console.error("FETCH DATA ERROR");
        return console.log(err)

    }
    return res

    
} 