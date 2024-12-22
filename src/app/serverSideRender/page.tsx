import React from 'react';
import Link from 'next/link';

async function Page() {
    interface Datatype {
        id:number,
        name:string,
        type:string,
        available:boolean
    }
    const data = await fetch("https://simple-books-api.glitch.me/books/");
    const dataresponse:Datatype[] = await data.json()
    console.log("books >>>", dataresponse)

  return (
    <section >
        <div className='grid grid-cols-3 grid-rows-2 h-screen text-center'>
        {dataresponse.map((data,index)=>(
           <div className='w-full flex justify-center items-center rounded-sm'>
             <div className='h-[200px] w-[250px] flex justify-center items-center flex-col bg-indigo-50 shadow-lg'key={data.id}>
              <h1 className='text-[22px] font-bold text-blue-900'>{data.name}</h1>
              <p className='text-slate-600 text-[18px]'>{data.type}</p>
              <p className={`${data.available? "text-emerald-600":"text-red-600"}`}>
              {`${data.available ? "In Stock" : "Out off Stock"}`}
            </p>
            <button className='h-[30px] w-[100px] bg-black text-white rounded-sm'>Add to cart</button>
            </div>
           </div>
        ))}
        </div>
        <div  className='text-center'>
        <Link href={"/"} className='font-bold text-[22px] text-slate-500 '>Back to Home</Link>
        </div>
    </section>
  )
}

export default Page