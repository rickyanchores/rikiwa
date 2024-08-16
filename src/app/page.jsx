import React from 'react'
import Card from './Components/Card/Card';
import Navbar from './Components/Nav/Navbar';
import Hero from './Pages/Hero/Hero';
import Gallery from './Pages/Gallery/Gallery';
import About from './Pages/About/About';
import WatchNews from './Pages/WatchNews/WatchNews';

const Home = () => {

    let cards = [
        {
          imageUrl: "https://www.seikowatches.com/it-it/-/media/HtmlUploader/Italy/Seiko/Home/products/presage/special/rikiwatanabe/assets/img/index/profile/profile_img.jpg",
          name: "Riki Watanabe",
          quote: "We create watches to be able to see time..."
        },
        {
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Hans_Wilsdorf.jpg",
          name: "Hans Wilsdorf",
          quote: "My personal opinion ... is that pocket watches will almost completely disappear and that wrist watches will replace them definitively! I am not mistaken in this opinion and you will see that I am right"
        }
      ]

  return (
    <div className='Home min-h-screen'>
      <Navbar />
      <Hero />
        <div className="cards-containe grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card,index) => (
            <Card
              key={index} imageUrl={card.imageUrl} name={card.name} quote={card.quote}
            />
          ))}
        </div>
      <Gallery />
      <WatchNews />
      <About />
    </div>
  )
}

export default Home;