import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <img className="justify-start"></img>
      <div>
        <div className="flex">
          <Image src="/logo.png" width={400} height={400} alt='logo' />
        </div>
        <div className="flex justify-center">
          <h1 className="text-9xl text-orange-400">Welcome to Travler</h1>
        </div>
      </div>
      <div className="flex justify-center">
        image here
      </div>
      <div className="flex justify-evenly gap-5">
        <Link href='/dashboard'><button className=" text-orange-400 bg-blue-500 text-5xl border-spacing-y-1 border-blue-800 hover:text-white rounded-md align-bottom"> Browse</button></Link>
        <Link href='/login'><button className="text-orange-400 bg-blue-500 text-5xl border-5 border-spacing-y-1 border-blue-800 hover:text-white rounded-md align-bottom"> Login</button></Link>
      </div>
    </div>
  );
}
