import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Hero = () => {
  return (
    <div className='Hero min-h-screen grid justify-center items-center p-4 text-white' id='Hero'>
        <div className="title">
            <div className="main-title flex justify-center items-center">
             <h1 className='text-8xl'>rikiwa.</h1>
             <div className="logo bg-red-700 p-4 m-4"><AccessTimeIcon sx={{fontSize: 60}}/></div>
            </div>
            <p className='text-red-600 font-semibold'>watch enthusiast blog</p>
        </div>
    </div>
  )
}

export default Hero;