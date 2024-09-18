//import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-600 flex-auto">
      <img></img>
      <div className="flex justify-items-center">
        <img src="/logo.png" />
        <h1 className="text-9xl text-orange-700 justify-center">Welcome to Travler</h1>
      </div>
      <div className="flex justify-evenly gap-5">
        <Link href='/dashboard'><button className="text-6xl  shadow-emerald-600 shadow-md hover:bg-slate-400 align-bottom"> Browse</button></Link>
        <Link href='/login'><button className="text-6xl shadow-emerald-600 shadow-md hover:bg-slate-400 align-bottom"> Login</button></Link>
      </div>
    </div>
  );
}
