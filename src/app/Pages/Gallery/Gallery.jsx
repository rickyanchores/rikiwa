import WatchCard from '@/app/Components/WatchCard/WatchCard';
import React from 'react'

const Gallery = () => {
  return (
    <div className='Gallery min-h-screen text-white grid items-center justify-center p-4' id="Gallery">
        <h1 className='text-center font-extrabold text-6xl'>Watch Gallery</h1>
        <WatchCard />
        <WatchCard />
        <WatchCard />
    </div>
  )
}

export default Gallery;