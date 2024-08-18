import WatchCard from '@/app/Components/WatchCard/WatchCard';
import React from 'react'

const Gallery = () => {
  return (
    <div className='Gallery min-h-screen text-white grid items-center justify-center p-4' id="Gallery">
        <h1 className='text-center font-extrabold text-4xl'>gallery</h1>
        <div className="grid-container grid grid-cols-1 md:grid-cols-3">
          <WatchCard />
          <WatchCard />
          <WatchCard />
        </div>
    </div>
  )
}

export default Gallery;