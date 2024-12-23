'use client'
import React from 'react';

const Home = () => {
  return (
    <div className='bg-gray-400 max-w-[480px] w-full  h-[100vh] mx-auto  relative overflow-hidden'>
      <p className='mt-1 text-white absolute top-1 left-0 max-w-[480px] w-full text-[20px] font-bold text-center'> Version 3  </p>

      <div className='flex flex-col gap-y-1 w-full px-1 mt-12 overflow-scroll h-[calc(100%-40px)]'>
      {Array.from({ length: 50 }, (_, index) => (
        <div key={index} className="bg-green-800 h-[50px] grid place-content-center text-white">
          Chats #{index + 1}
        </div>
      ))}
      </div>

      <input
        className='absolute w-full h-10 bottom-0 border border-black p-4 text-black rounded-lg'
        type='text'
        placeholder='enter something'
      />
    </div>
  )
}

export default Home

//version 2 result
// scroll still open, but 