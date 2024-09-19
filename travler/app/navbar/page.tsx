import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex container flex-row gap-x-6 bg-orange-400">
            <div className="flex"><Link href='/'><Image height={400} width={400} alt="logo" className="hover:border-2 rounded-md hover:bg-orange-300" src="/logo.png" /></Link></div>
            <div className="flex"><Link href='/tripList'><h1 className="text-xl hover:border-2 rounded-md hover:bg-orange-300">Trips</h1></Link></div>
            <div className="flex"><Link href='/login'><h1 className="text-xl hover:border-2 rounded-md hover:bg-orange-300">Login</h1></Link></div>

        </div>

    );
}