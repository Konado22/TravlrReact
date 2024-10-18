//============================================================================
// Name        : updateTrip/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : Logic for updating a trip by trip.code through form
//============================================================================
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import {z} from 'zod';

//imports sql functionality from vercel NextJS packages


export default async function UpdateTrip(formData:FormData) {
    "use server"
    const schema = z.object({
        code:z.string().min(1),
        name:z.string().min(1),
        resort:z.string().min(1),
        perPerson:z.string().min(1),
        image:z.string().min(1),
    })
    //zod to confirm schema against requirements of database
     //parses the formData against the schema
     const parse = schema.safeParse({
        code: formData.get('code'),
        name: formData.get('name'),
        resort: formData.get('resort'),
        perPerson: formData.get('perPerson'),
        image:formData.get('image')
    })
    //if successful parse the results and insert into sql statement
    if (!parse.success) {
        console.log("SUCCESSFUL UPDATE")
    }
    const data=parse.data
        try {
            //try to update by code with sql request and validation by zod/form
            const update = await sql`UPDATE trip SET name=${data.name}, resort=${data.resort}, perperson= ${data.perPerson}, image = ${data.image} WHERE code = ${data.code}`;
            const result = update.rows;
            revalidatePath('/api/tripList');
            return console.log('SUCCESS',result);
            
        }
        catch (error) {
            console.log(error);
        }
    }
    //allows for server request in component. Update trip by code revalidate dashboard component on submit