import React from 'react'
import Video from './Video'

const HomeTopText = () => {
  return (
    <div className='font-[Lausanne] mt-72 lg:mt-0 pt-5 text-center'>
      <div className='lg:text-[8vw] text-[9vw] justify-center flex items-center uppercase lg:leading-[6vw] leading-[8vw]'>personal</div>
      <div className='lg:text-[7vw] text-[9vw] justify-center flex items-center uppercase lg:leading-[6vw] leading-[8vw]'>p
         <div className='h-[5vw] w-[5vw] rounded-full mt-3 overflow-hidden '>
                    <Video />
                </div>
        rtfolio</div>
      <div className='lg:text-[8vw] text-[9vw] justify-center flex items-center uppercase lg:leading-[6vw] leading-[8vw]'>website</div>
    </div>
  )
}

export default HomeTopText
