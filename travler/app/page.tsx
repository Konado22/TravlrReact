import Image from "next/image";
import Link from "next/link";
//homepage
export default function Home() {
  return (
    <div className="flex flex-col gap-y-5">
      <img className="justify-start"></img>
      <div>
        <div className="flex">
          <Image src="/logo.png" width={400} height={400} alt='logo' />
        </div>
        <div className="flex justify-center">
          <h1 className="text-9xl text-orange-300 font-mono ease-in">Welcome to Travlr</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src='/deluxe.jpg' height={500} width={500} alt="vacation" />
      </div>
      <div className="flex justify-evenly">
        <Link href='/dashboard'><button className=" text-orange-300 text-5xl hover:underline hover:text-white rounded-md align-bottom font-mono"> Browse</button></Link>
        <Link href='/login'><button className="text-orange-300 text-5xl hover:underline hover:text-white rounded-md align-bottom font-mono"> Login</button></Link>
      </div>
    </div>
  );
}
