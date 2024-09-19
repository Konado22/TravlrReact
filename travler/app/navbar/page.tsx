import Image from "next/image";
import Link from "next/link";
//navbar for main dashboard page, future functionality to incoperate categories and blog stories
export default function Navbar() {
    return (
        <div className="flex container flex-row gap-x-6 bg-orange-200 justify-between size-full">
            <div className="flex"><Link href='/'><Image height={400} width={400} alt="logo" className="hover:border-2 rounded-md hover:bg-orange-300" src="/logo.png" /></Link></div>
            <div className="flex flex-row space-x-10">
                <div className="flex"><Link href=''><h1 className="text-xl hover:border-2 rounded-md hover:bg-orange-300">Travel</h1></Link></div>
                <div className="flex"><Link href=''><h1 className="text-xl hover:border-2 rounded-md hover:bg-orange-300">Entertainment</h1></Link></div>
                <div className="flex"><Link href='/login'><h1 className="text-xl hover:border-2 rounded-md hover:bg-orange-300">Login</h1></Link></div>
            </div>

        </div>

    );
}