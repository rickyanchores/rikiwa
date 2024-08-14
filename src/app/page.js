import Image from "next/image";
import Card from "./Components/Card/Card";

export default function Home() {

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="Home">
        <h1 className="text-4xl font-bold">rikiwa</h1>
        <p>A place for watch enthusiast and collectors. Share your collection stories...</p>
        <div className="cards-container">
          {cards.map((card,index) => (
            <Card 
              key={index} imageUrl={card.imageUrl} name={card.name} quote={card.quote}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
