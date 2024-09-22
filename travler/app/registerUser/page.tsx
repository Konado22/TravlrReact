import Image from "next/image"
import Link from "next/link"
//register new user page
export default async function RegisterUser() {

    return (
        <div className=" flex-col grid justify-center space-y-20 min-w-max">
            <div className="justify-items-center">
                <div className='flex justify-center'><Image src='/logo.png' height={400} width={300} alt="logo" /></div>
                <div className='flex justify-center'><h1 className="text-6xl text-orange-400">Register New User</h1></div>
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
                    <Link href='/login'><h1 className="text-orange-400 hover:underline hover:text-white text-xl">Already have an account?</h1></Link>
                </div>
                <div className="flex justify-center">
                    {/*find different arrow to use*/}
                    <Link href='/'><Image src="/back.jpg" height={30} width={30} alt="back arrow" className="opacity-30 bg-blue-400 hover:outline-2" /></Link>
                </div>
            </div>
        </div>
    )
}