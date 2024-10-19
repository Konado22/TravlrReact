//============================================================================
// Name        : tripCard/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : search componenet for searching for a trip by trip.code
//============================================================================
import { searchCode } from "./action";
//import functionality from action file
export default async function GetSingleTrip() {
"use server"
//async to allow search in database
//use functionality found in action file

    return (
        <form action={searchCode(searchCode)}>
            <label>search by code</label>
            <input type='text' name="searchCode" id="searchCode" formAction={searchCode}></input>
            <input type="submit">Submit</input>
        </form>
    )
}