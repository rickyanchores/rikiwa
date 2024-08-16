import React from 'react'

const WatchCard = ({title,model,reference,movement,glass,price}) => {
  return (
    <div className='WatchCard grid grid-cols-1 md:grid-cols-2 items-center justify-around gap-4 p-4'>
        <img src="https://images.unsplash.com/photo-1642025421684-7881ee163b59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw2fHxzZWlrbyUyMGJsYWNrfGVufDB8fHx8MTcyMzgwNDU3N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="watchImage" />
        <div className="watchDescription">
            <h1 className="title text-4xl font-extrabold">Seiko {title}</h1>
            <div className="infoList font-semibold">
                <h3>Model: Seiko Presage {model}</h3>
                <h3>Reference: SPB03 {reference}</h3>
                <h3>Movement: Automati {movement}</h3>
                <h3>Glass: Sapphire {glass}</h3>
                <br />
                <h2>Price: 450 £{price}</h2>
            </div>
            <button className='btn bg-orange-600 p-4 text-white'>VISIT</button>
        </div>
    </div>
  )
}

export default WatchCard;