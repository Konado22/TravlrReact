import Image from "next/image";
import Link from "next/link";
//navbar for main dashboard page, future functionality to incoperate categories and blog stories
export default function Navbar() {
    return (
        <div>
            <div className="flex flex-row gap-x-6 bg-orange-200 justify-between ">
                <div className="flex"><Link href='/'><Image height={400} width={400} alt="logo" className="hover:border-2 border-black rounded-md hover:bg-orange-300" src="/logo.png" /></Link></div>
                <div className="flex flex-row space-x-10 pr-5">
                    <div className="flex items-end"><Link href=''><h1 className="text-xl hover:border-2 border-black rounded-md hover:bg-orange-300 hover:text-2xl">Travel</h1></Link></div>
                    <div className="flex items-end"><Link href=''><h1 className="text-xl hover:border-2 border-black rounded-md hover:bg-orange-300 hover:text-2xl">Entertainment</h1></Link></div>
                    <div className="flex items-end"><Link href='/login'><h1 className="text-xl hover:border-2 border-black rounded-md hover:bg-orange-300 hover:text-2xl">Login</h1></Link></div>
                </div>
            </div>
        </div>
    );
}