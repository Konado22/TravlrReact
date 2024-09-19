import Image from "next/image";
import Link from "next/link";


export default function Login() {
    return (
        <div className=" flex-col grid justify-center space-y-20">
            <h1 className="text-9xl text-orange-450">Login Page</h1>
            <div className="space-y-4">
                <div className="flex justify-center">
                    <input className="fill-slate-400 text-xl" type="email" placeholder="username"></input>
                </div>
                    <div className="flex justify-center">
                        <input className='fill-slate-400 text-xl' type="password" placeholder="password"></input>
                    </div>
                    <div className="flex justify-center">
                        <button className="text-orange-400 text-3xl justify-center bg-blue-500 rounded-md hover:text-white" type="submit">Login</button>
                    </div>
                    <div className="flex justify-center">
                        <h1 className="text-orange-500 hover:underline text-2xl">New user?Register here</h1>
                    </div>
                    <div className="flex justify-center">
                        {/*find different arrow to use*/ }
                       <Link href='/'><Image src="/back.jpg" height={30} width={30} alt="back arrow" className="opacity-30 bg-blue-400"/></Link> 
                    </div>
            </div>
        </div>
    );
}