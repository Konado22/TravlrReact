import Navbar from "../navbar/page";
import Triplist from "../tripList/page";
//main dashboard of application renders navbar,triplist
export default function Dashboard() {
    return (
        <>
            <Navbar />
            <Triplist />
            
        </>
    );
  }