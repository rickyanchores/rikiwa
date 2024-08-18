import NewsApi from '@/app/API/NewsApi/NewsApi';
import React from 'react'

const WatchNews = () => {
  return (
    <div className='WatchNews bg-red-700 p-4'>
        <h1>Watch News</h1>
        <p>This section will show latest news about watches thanks to watch API</p>
        <div className="newsApi-container">
          <NewsApi />
        </div>
    </div>
  )
}

export default WatchNews;