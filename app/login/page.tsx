//===========================================================================================
// Name        : login/page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : future functionality for login POST request to server function. Login page
//===========================================================================================
import Image from "next/image";
import Link from 'next/link';
//FUTURE IMPLEMENTATION FOR USER ACCESS
//login page will incorperate logic to allow user access to account
//eventually aim to incoperate register user button for new user form
export default function Login() {
    "use server"
    //server componet to handle login request
    //trasition to form dynamic and implement zod for parsing user input from form
    return (
        <div className=" flex-col grid justify-center space-y-20 min-w-max">
            <div className="flex-col justify-center">
                <div className='flex justify-center'><Image src='/logo.png' height={400} width={300} alt="logo" /></div>
                <div className='flex justify-center'><h1 className="text-6xl text-orange-400">Login</h1></div>
            </div>
            <div className="space-y-10">
                <div className="flex justify-center">
                    <input className="fill-slate-400 text-xl" type="email" placeholder="username"></input>
                </div>
                <div className="flex justify-center">
                    <input className='fill-slate-400 text-xl' type="password" placeholder="password"></input>
                </div>
                <div className="flex justify-center">
                    <button className="text-orange-400 text-3xl justify-center rounded-md hover:text-white hover:underline" type="submit">Login</button>
                </div>
                <div className="flex justify-center">
                    <Link href='/registerUser'><h1 className="text-orange-400 hover:underline hover:text-white text-xl">New User?</h1></Link>
                </div>
                <div className="flex justify-center">
                    {/*find different arrow to use*/}
                    <Link href='/'><Image src="/back.jpg" height={30} width={30} alt="back arrow" className="opacity-30 bg-blue-400 hover:outline-2" /></Link>
                </div>
            </div>
        </div>
    );
}