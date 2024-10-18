import { Tripcard } from "./action";

export default async function GetSingleTrip(formData: FormData) {

    return (
        <form action={Tripcard(searchCode)}>
            <label>search by code</label>
            <input type='text' name="searchCode" id="searchCode"></input>
        </form>
    )
}