//============================================================================
// Name        : updateTrip/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : Logic for updating a trip by trip.code
//============================================================================
import { sql } from "@vercel/postgres";
import {z} from 'zod';

//imports sql functionality from vercel


export default async function UpdateTrip(formData:FormData) {
    "use server"
    confirm('Are you sure');

    //allows for server request in component. Update trip by code

    try {

    } catch (error) {
       return 
    }
}