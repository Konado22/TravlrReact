import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <Link href='/'><img src="../public/logo.png"/></Link>
            <Link href='/tripList'><h1>Trips</h1></Link>
            <Link href='/login'><h1>Login</h1></Link>
        </>
    );
  }