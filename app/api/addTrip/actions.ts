//============================================================================
// Name        : addTrip/action.ts
// Author      : Jesse Draper
// Version     : 1.0
// Description : Backend logic to create a new trip in trip database table
//============================================================================
"use server"
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import { redirect } from "next/dist/server/api-utils";
//imports sql functionality from vercel
export async function createTrip (formData:FormData) {
    "use server"
    //use zod to test input against schema requirements for Trip
    const schema = z.object({
        code:z.string().min(1),
        name:z.string().min(1),
        resort:z.string().min(1),
        perPerson:z.string().min(1),
        image:z.string().min(1),
    })
    const parse = schema.safeParse({
        code: formData.get('code'),
        name: formData.get('name'),
        resort: formData.get('resort'),
        perPerson: formData.get('perPerson'),
        image:formData.get('image')
    })
    if (!parse.success) {
        console.log("SUCCESS")
    }
    const data=parse.data
    try {
        await sql`INSERT INTO trip(code,name,resort,perperson,image)
        VALUES(${data.code},${data.name}, ${data.resort}, ${data.perPerson}, ${data.image})`
        revalidatePath('/tripList');
        
        
        return{message: "Successfully created Trip"}
    } catch (e) {
        console.log("UNSUCCESSFUL");
      }
    }
    //gather form data
    //post request to add a new trip on click (FORM) TRIP(code, name, resort, perPerson, image) 

    //const insertTrip = await sql`INSERT INTO trip (code, name, resort, perPerson, image) VALUES ()`;
    //const data = insertTrip.fields;
  
