import Navbar from "../navbar/page";
import TripList from "../lib/tripList/page";
//main dashboard of application renders navbar,triplist
export default async function Dashboard() {
"use server"
    return (
        <>
            <Navbar />
            
`            <TripList />
            <div className="flex justify-around">
                <button className='border text-white rounded hover:bg-blue-300'>Add Trip</button>
                <button className="border text-white rounded hover:bg-blue-300">Edit Trip</button>
            </div>
            
        </>
    );
  }