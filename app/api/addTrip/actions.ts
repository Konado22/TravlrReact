//====================================================================================================
// Name        : addTrip/action.ts
// Author      : Jesse Draper
// Version     : 1.0
// Description : Backend logic to create a new trip in trip database table and utilize in addTripPage
//======================================================================================================
"use server"
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
//imports sql functionality from vercel as well
//as pathvalidation tools and zob to test form against table schema
export async function createTrip (formData:FormData) {
    "use server"
    //use zod to test input against schema requirements for Trip can declare expected inputs through zod
    const schema = z.object({
        code:z.string().min(1),
        name:z.string().min(1),
        resort:z.string().min(1),
        perPerson:z.string().min(1),
        image:z.string().min(1),
    })
    //parses the formData against the schema with conditional catch statement to return successful parse
    const parse = schema.safeParse({
        code: formData.get('code'),
        name: formData.get('name'),
        resort: formData.get('resort'),
        perPerson: formData.get('perPerson'),
        image:formData.get('image')
    })
    //if successful parse the results and insert into sql statement
    if (!parse.success) {
        console.log("SUCCESS")
    }
    const data=parse.data
    try {
        //try to insert new trip into database using form information(form already contains validation for containing value as additional security)
        await sql`INSERT INTO trip(code,name,resort,perperson,image)
        VALUES(${data.code},${data.name}, ${data.resort}, ${data.perPerson}, ${data.image})` 
            revalidatePath('/api/tripList');
            revalidatePath('/dashboard');
            redirect('/dashboard');
        //revalidate path clears cache for nextjs rendering to utilize new fetch rather than previously cached fetch
        return{message: "Successfully created Trip"}
    } catch (e) {
        //catch error from POST request
        return{message: "FAIL"}
      }
    }  
