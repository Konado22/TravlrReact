import Image from "next/image";
import Link from "next/link";

//login page will incorperate logic to allow user access to account
//eventually aim to incoperate register user button for new user form
export default function Login() {
    return (
        <div className=" flex-col grid justify-center space-y-20 min-w-max">
            <div className="flex-col justify-center">
                <Image src='/logo.png' height={400} width={300} alt="logo" />
                <h1 className="text-6xl text-orange-400">Login Page</h1>
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
                    <h1 className="text-orange-400 hover:underline hover:text-white text-2xl">New user? Register here</h1>
                </div>
                <div className="flex justify-center">
                    {/*find different arrow to use*/}
                    <Link href='/'><Image src="/back.jpg" height={30} width={30} alt="back arrow" className="opacity-30 bg-blue-400 hover:outline-2" /></Link>
                </div>
            </div>
        </div>
    );
}