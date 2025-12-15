import React from 'react'
import Video from '../components/Home/Video'
import HomeTopText from '../components/Home/HomeTopText'
import HomeBottom from '../components/Home/HomeBottom'

const Home = () => {
  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <HomeTopText />
        <HomeBottom />
      </div>
    </div>
  )
}

export default Home
