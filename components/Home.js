'use client'
import React, {useRef, useEffect} from 'react';

const Home = () => {
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const heightRef = useRef(0);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const viewport = window.visualViewport;
      const input = inputRef.current;
      const button = buttonRef.current;

      const inputBlur = () => {
        input?.blur();
      };

      const resizeHandler = () => {
        if (viewport) {
          if (!/iPhone|iPad|iPod/.test(window.navigator.userAgent)) {
            heightRef.current = viewport.height;
          }
          if (button) {
            button.style.bottom = `${heightRef.current - viewport.height + 10}px`;
          }
        }
      };

      const blurHandler = () => {
        if (button) {
          button.style.bottom = "10px";
        }
      };

      // Add event listeners
      window.addEventListener("scroll", inputBlur);
      viewport?.addEventListener("resize", resizeHandler);
      input?.addEventListener("blur", blurHandler);

      // Cleanup event listeners
      return () => {
        window.removeEventListener("scroll", inputBlur);
        viewport?.removeEventListener("resize", resizeHandler);
        input?.removeEventListener("blur", blurHandler);
      };
    }
  }, []);


  return (
    <div className='bg-gray-400 max-w-[480px] w-full  h-[100%] mx-auto  relative overflow-hidden'>
      <p className='mt-1 text-white absolute top-1 left-0 max-w-[480px] w-full text-[20px] font-bold text-center'> Version 6 (ref with custom fun)  </p>

      <div className='flex flex-col gap-y-1 w-full px-1 mt-12 overflow-scroll h-[calc(100%-40px)]'>
        {Array.from({ length: 50 }, (_, index) => (
          <div key={index} className="bg-green-800 h-[50px] grid place-content-center text-white">
            Chats #{index + 1}
          </div>
        ))}
      </div>

      <div ref={buttonRef} className='fixed bottom-0 w-full custom-class '>
        <input
          className='w-full  p-4 text-black rounded-lg'
          type='text'
          ref={inputRef}
          placeholder='enter something'
        />
      </div>

    </div>
  )
}

export default Home

//version 2 result
// scroll still open, but 