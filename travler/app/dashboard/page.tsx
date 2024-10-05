import Navbar from "../navbar/page";
import Triplist from "../lib/tripList/page";
//main dashboard of application renders navbar,triplist
export default async function Dashboard() {

    return (
        <>
            <Navbar />
            <Triplist />
            
        </>
    );
  }