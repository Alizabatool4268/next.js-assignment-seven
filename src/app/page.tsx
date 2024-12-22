import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen">
      <section className="mt-11 w-screen">
         <h1 className="text-center font-bold text-[28px]">Assignment seven</h1>
        <div className="flex justify-evenly items-center">
         <div className="w-[400px] flex flex-col items-center ">
          <h2 className="font-bold text-[26px] text-blue-900">Introduction</h2>
          <ul className="text-center">
            <li> This assignment is based on the concept of server side and client side data fetching. </li>
            <li>Each way has its pros and cons. This assignment portraites both the concepts in a simplified manner</li>
            <li>Both the ways are equally important. Read more to find out the minor differences between server and client side data fetching </li>      
          </ul>
          <Link href={"/"} className="h-[40px] w-[100px] mt-2 bg-blue-900 text-white flex justify-center items-center rounded-md">Know more</Link>
         </div>
         <Image height={400} width={400} src={"/Images/contact-page-img.png"} alt="heroImage"></Image>
        </div>  
      </section>
      <section className="mt-11 w-screen">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-[30px] font-bold">Diving in to the world of Data fetching</h1>
           <div className="bg-indigo-200 text-black w-[450px] h-[300px] flex justify-center items-center flex-col">
             <h3 className="font-bold text-[24px]">Explore</h3>
             <p className="text-[20px]">Explore server side and client side rendering</p>
             <span className="flex gap-1 flex-col">
             <Link href={"/"} className="bg-black text-white h-[40px] w-[320px] rounded-sm flex justify-center items-center">Server side rendering</Link>
             <Link href={"/"} className="bg-black text-white h-[40px] w-[320px] rounded-sm flex justify-center items-center">Client side rendering</Link>
             </span>
           </div>
        </div>
      </section>
    </main>
  );
}
