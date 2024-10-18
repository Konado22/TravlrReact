import Navbar from "@/app/navbar/page";
import UpdateTrip from "./action";

export default function UpdateTripPage(trip) {
    //import props from component to populate values of the form
    return(
    <div className="flex justify-center flex-col">
        <Navbar />
        <h1  className="p-10 font-mono text-6xl font-bold text-orange-400">Update Trip</h1>
        <form className='space-y-10 p-10 ' action={UpdateTrip}>
            <div className="flex space-x-10 justify-center">
                <label htmlFor='code' className='text-orange-400 font-bold'>Code</label>
                <input required type="text" id="code" name="code" className="border-2 border-orange-400"></input>
            </div>
            <div className="flex space-x-10 justify-center">
                <label className='text-orange-400 font-bold' htmlFor='name'>Name</label>
                <input required type="text" id="name" name="name" className="border-2 border-orange-400"></input>
            </div>
            <div className="flex space-x-10 justify-center">
                <label htmlFor='resort' className='text-orange-400 font-bold'>resort</label>
                <input required type="text" id="resort" name="resort" className="border-2 border-orange-400"></input>
            </div>
            <div className="flex space-x-2 justify-center">
                <label htmlFor='perPerson' className='text-orange-400 font-bold'>perPerson</label>
                <input required type="text" id="perPerson" name="perPerson" className="border-2 border-orange-400"></input>
            </div>
            <div className="flex space-x-10 justify-center">
                <label htmlFor='image' className='text-orange-400 font-bold'>image</label>
                <input required type="text" id="image" name="image" className="border-2 border-orange-400"></input>
            </div>
            <div className="flex justify-center">
                <input type="submit" value='Submit' className="border-2 border-orange-400 p-2 font-bold text-orange-400 hover:text-2xl" />
            </div>
        </form>
    </div>
)}