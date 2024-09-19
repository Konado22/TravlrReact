import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <img className="justify-start gap-x-10"></img>
      <div className="flex justify-center">
        <Image src="./logo.png" width= {30} alt='logo'/>
        <h1 className="text-9xl text-orange-700">Welcome to Travler</h1>
      </div>
      <div className="flex justify-evenly gap-5">
        <Link href='/dashboard'><button className=" text-orange-700 bg-blue-500 text-5xl border-spacing-y-1 border-blue-800 hover:text-white rounded-md align-bottom"> Browse</button></Link>
        <Link href='/login'><button className="text-orange-700 bg-blue-500 text-5xl border-5 border-spacing-y-1 border-blue-800 hover:text-white rounded-md align-bottom"> Login</button></Link>
      </div>
    </div>
  );
}
