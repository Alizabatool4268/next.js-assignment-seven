"use client";
import React from 'react';
import { useEffect,useState } from 'react';
import Loader from '@/components/Loader';
import Image from 'next/image';
import { IoIosStar } from "react-icons/io";
import Link from 'next/link';

interface Clientdatatype {
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:{
    rate: number,
    count:number
  }
}
function Page() {
  const [Loading,setLoading] = useState(false)
  const [Data,setdata] = useState<Clientdatatype[]>([])
  useEffect(()=>{
    const fetchdata = async()=>{
      setLoading(true)
      try{
        const response = await fetch("https://fakestoreapi.com/products");
        const parsedResponse = await response.json();
        console.log("products>>>",parsedResponse)
        setdata(parsedResponse)
      }
      catch(error){
        console.log(error)
      }
      setLoading(false)
    }
    fetchdata()
  },[]);
  if(Loading===true){
    return(<Loader/>)
  }
  return (
    <section>
      <div className='grid grid-cols-3 grid-rows-7 gap-3'>
        {Data.map((productdetail)=>(
         
        <div className='flex justify-center items-center' key={productdetail.id}>
          <div className='w-[300px] shadow-lg flex flex-col justify-center items-center gap-1'>
            <Image height={120} width={120} src={productdetail.image} alt={productdetail.title}></Image>
            <h1 className='font-bold text-blue-900'>{productdetail.title}</h1>
            <span className='flex justify-between items-center'>
              <p className='flex'><IoIosStar className='text-yellow-500'/>{productdetail.rating.rate} </p>
              <p className='text-purple-500 mr-8'>{productdetail.rating.count} left</p>
            </span>
            <p className='text-pink-500 font-bold'>{productdetail.category}</p>
            <p>{`${productdetail.description.slice(0,100)}...`}</p>
            <button className='h-[30px] w-[100px] bg-black text-white rounded-md'>Add to cart</button>
          </div>
          </div>
        ))}
      </div>
        <div className='text-center'>
        <Link href={"/"} className='font-bold text-[22px] text-slate-500 '>Back to Home</Link>
        </div>
    </section>
  )
}

export default Page;