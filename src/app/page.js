import Image from "next/image";
import Card from "./Components/Card/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="Home">
        <h1 className="text-4xl font-bold">rikiwa</h1>
        <p>A place for watch enthusiast and collectors. Share your collection stories...</p>
        <Card />
      </div>
    </main>
  );
}
