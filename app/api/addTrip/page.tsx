//==================================================================================================================
// Name        : addTrip/action.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : page compoenent to handle form input and then utilize action logic for post request to server
//====================================================================================================================
import Navbar from "@/app/navbar/page";

export default function addTripPage() {

    return (
        <div className="flex justify-center flex-col">
            <Navbar />
            <h1 className="text-6xl font-bold text-orange-400">Add Trip</h1>
            <form className='space-y-10 p-10 ' action=''>
                <div className="flex space-x-10 justify-center">
                    <label htmlFor='code' className='text-orange-400 font-bold'>Code</label>
                    <input type="text" id="code" name="code" className="border-2 border-orange-400"></input>
                </div>
                <div className="flex space-x-10 justify-center">
                    <label className='text-orange-400 font-bold' htmlFor='name'>Name</label>
                    <input type="text" id="name" name="name" className="border-2 border-orange-400"></input>
                </div>
                <div className="flex space-x-10 justify-center">
                    <label htmlFor='resort' className='text-orange-400 font-bold'>resort</label>
                    <input type="text" id="resort" name="resort" className="border-2 border-orange-400"></input>
                </div>
                <div className="flex space-x-2 justify-center">
                    <label htmlFor='perPerson' className='text-orange-400 font-bold'>perPerson</label>
                    <input type="text" id="perPerson" name="perPerson" className="border-2 border-orange-400"></input>
                </div>
                <div className="flex space-x-10 justify-center">
                    <label htmlFor='image' className='text-orange-400 font-bold'>image</label>
                    <input type="text" id="image" name="image" className="border-2 border-orange-400"></input>
                </div>
                <div className="flex justify-center">
                <input type="submit" value='Submit' className="border-2 border-orange-400 p-2 font-bold text-orange-400 hover:text-2xl"/>
                </div>
            </form>
        </div>
    )
}
