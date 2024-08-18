import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='Dashboard grid justify-center items-center min-h-screen '>
        <div className="">
           <h1 className='text-4xl md:text-8xl'>this is Dashboard</h1>
           <Link href="/">Go back to Homepage</Link>
        </div>
       
    </div>
  )
}

export default page