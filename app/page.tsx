//===============================================================================
// Name        : page.tsx
// Author      : Jesse Draper
// Version     : 1.0
// Description : main root component. Landing page with redirects for application
//===============================================================================
import Image from "next/image";
import Link from "next/link";
//homepage, utilize Image for nextjs image formatting and link to route browser
export default function Home() {
  return (
    <div className="flex flex-col gap-y-5">
      <img className="justify-start"></img>
      <div>
        <div className="flex">
          <Image src="/logo.png" width={400} height={400} alt='logo' />
        </div>
        <div className="flex justify-center">
          <h1 className="transition-opacity text-8xl text-orange-400 font-mono">Welcome to Travlr</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src='/deluxe.jpg' height={500} width={500} alt="vacation" />
      </div>
      <div className="flex justify-evenly">
        <Link href='/dashboard'><button className=" text-orange-400 text-5xl hover:underline  rounded-md align-bottom font-mono"> Browse</button></Link>
        <Link href='/login'><button className="text-orange-400 text-5xl hover:underline  rounded-md align-bottom font-mono"> Login</button></Link>
      </div>
    </div>
  );
}
// root directory page