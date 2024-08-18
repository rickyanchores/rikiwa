import React from 'react'
import Navbar from './Components/Nav/Navbar';
import Hero from './Pages/Hero/Hero';
import Gallery from './Pages/Gallery/Gallery';
import About from './Pages/About/About';
import WatchNews from './Pages/WatchNews/WatchNews';


//IMPORTS


const Home = () => {

  return (
    <div className='Home min-h-screen'>
      <Navbar />
      <Hero />
      <Gallery />
      <WatchNews />
      <About />
    </div>
  )
}

export default Home;