'use client'
import React from 'react';

const Home = () => {
  return (
    <div className='bg-gray-400 max-w-[480px] w-full  h-[100%] mx-auto  relative overflow-hidden'>
      <p className='mt-1 text-white absolute top-1 left-0 max-w-[480px] w-full text-[20px] font-bold text-center'> Version 5 (safe-area-inset-bottom)  </p>

      <div className='flex flex-col gap-y-1 w-full px-1 mt-12 overflow-scroll h-[calc(100%-40px)]'>
        {Array.from({ length: 50 }, (_, index) => (
          <div key={index} className="bg-green-800 h-[50px] grid place-content-center text-white">
            Chats #{index + 1}
          </div>
        ))}
      </div>

      <div className='fixed bottom-0 w-full custom-class '>
        <input
          className='w-full  p-4 text-black rounded-lg'
          type='text'
          placeholder='enter something'
        />
      </div>

    </div>
  )
}

export default Home

//version 2 result
// scroll still open, but 