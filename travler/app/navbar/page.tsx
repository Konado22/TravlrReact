import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex container mx-auto flex-row">
            <div><Link href='/'><img src="/logo.png" /></Link></div>
            <div><Link href='/tripList'><h1 className="">Trips</h1></Link></div>
            <div><Link href='/login'><h1 className="">Login</h1></Link></div>

        </div>

    );
}