import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='font-[Lausanne] flex items-center justify-center gap-2'>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-22 flex items-center px-4 py-2  border-white rounded-full uppercase'>
        <Link className='text-[4vw] ' to='/projects'>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-22 flex items-center px-4 py-2  border-white rounded-full uppercase'>
        <Link className='text-[4vw] ' to='/agence'>about</Link>
      </div>
    </div>
  )
}

export default HomeBottom
