import React from 'react';
import Link from 'next/link';

function Page() {
  return (
    <main>

    <section className='flex justify-around items-center md w-screen overflow-x-hidden xsm:flex-col ssm:flex-col msm:flex-col sm:flex-col md:h-screen lg:h-screen'>
        <div className='w-[300px] '>
            <h1 className='text-[30px] font-bold text-blue-900'>server side data fetching</h1>
            <ul className='list-disc xsm:text-sm'>
                <li className='list-disc'>Data is fetched before the page loads, during the server rendering process.</li>
                <li className='list-disc'>Hence, it provides Better SEO as content is present in initial HTML.</li>
                <li className='list-disc'>server side data fetching allows faster initial page load.</li>
                <li className='list-disc'>It is good for static data that doesn't change often.</li>
            </ul>
        </div>
        <div className='w-[300px]'>
            <h1 className='text-[30px] font-bold text-blue-900'>Client side data fetching</h1>
            <ul className='list-disc xsm:text-sm'>
                <li className='list-disc'>Data is fetched after the page loads, in the browser.</li>
                <li className='list-disc'>Hence, it is better for real time and interactive data.</li>
                <li className='list-disc'>Client side data fetching allows frequent data updations.</li>
                <li className='list-disc'>It is good for dynamic data that changes often.</li>
            </ul>
        </div>
    </section>
    <div className='text-center'>
        <Link href={"/"} className='font-bold text-[22px] text-slate-500 '>Back to Home</Link>
        </div>
    </main>
  )
}

export default Page;