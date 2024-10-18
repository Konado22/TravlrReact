//============================================================================
// Name        : tripCard/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : Implement logic for singular trip component get request
//============================================================================
"use server"
import { sql } from "@vercel/postgres";
//imports sql functionality from vercel

export async function Tripcard(trip) {
  try {
    //get singular trip by code

  }
  catch (error) {
    return error;
  }
}