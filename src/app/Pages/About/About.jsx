import React from 'react'
import Card from '@/app/Components/Card/Card'

const About = () => {

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
    <div className='About h-screen text-white grid items-center justify-center' id='About'>
        <h1 className='text-center font-extrabold text-4xl'>about</h1>
        <div className="cards-containe grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card,index) => (
            <Card
              key={index} imageUrl={card.imageUrl} name={card.name} quote={card.quote}
            />
          ))}
        </div>
    </div>
  )
}

export default About;