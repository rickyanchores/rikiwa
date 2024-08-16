import React from 'react'

const WatchCard = ({title,model,reference,movement,glass,price}) => {
  return (
    <div className='WatchCard w-auto grid grid-cols-1 md:grid-cols-2 items-center justify-around gap-4 p-4'>
        <img className='watchImage w-[420px]' src="https://images.unsplash.com/photo-1596460107916-430662021049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0Nzg3MDV8MHwxfHNlYXJjaHw3fHxzZWlrbyUyMGJsYWNrfGVufDB8fHx8MTcyMzgwNDU3N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="watchImage" />
        <div className="watchDescription grid justify-center items-center">
            <h1 className="title text-3xl font-extrabold">Seiko {title}</h1>
            <div className="infoList font-semibold">
                <h3>Model: Seiko Presage {model}</h3>
                <h3>Reference: SPB03 {reference}</h3>
                <h3>Movement: Automatic {movement}</h3>
                <h3>Glass: Sapphire {glass}</h3>
                <br />
                <h2>Price: 450 £{price}</h2>
            </div>
            <button className='btn bg-red-700 p-4 text-white'>VISIT</button>
        </div>
    </div>
  )
}

export default WatchCard;