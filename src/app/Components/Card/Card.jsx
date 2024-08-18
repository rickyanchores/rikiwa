import React from 'react'

const Card = ({imageUrl,name,quote}) => {
  return (
    <div className='Card flex justify-around items-center p-4 mt-4'>
        <img className="watch Image size-64" src={imageUrl} alt="watch image"/>
        <div className="description mt-2 p-4">
          <h1 className='font-bold mb-2'>{name}</h1>
          <p>{quote}</p>
        </div>

    </div>
  )
}

export default Card;