import React from 'react'
import InteractiveMernIcons from './mernIcons'

export const Footer = () => {
  return (

   <div className='border-t-2 border-theme-secondary'>

    <div className="px-4 md:px-8 lg:px-20  bg-theme-background  w-full ">
        <div className='pt-10  my-5'>

            <div className='flex flex-col gap-2 sm:flex-row justify-between '>

                {/* Footer left */}
                <div className='flex flex-col gap-2 sm:gap-4'>
                    <div className='flex gap-10'>
                        <div className='flex gap-2 items-center'>
                            <img src="./whitelogo.png" alt="logo" className='h-5 w-5' />
                            <span className='text-xl font-medium'>Alex</span>
                        </div>
                        <div className='text-theme-secondary'>
                            <a href="mailto:abc@gmail.com">alex@gmail.com</a>
                        </div>
                    </div>

                    <div className='text-theme-primary'>
                        Mern Stack Developer
                    </div>

                </div>

                


                 {/* Footer right */}

                <div className='flex flex-col gap-4'>
                    <div className='text-xl font-medium'>
                        Media
                    </div>
                    <div>
                        Socail Media
                    </div>
                </div>
            </div>

            <div className='-mt-5 sm:-mt-15'>

                 <InteractiveMernIcons/>
                </div>


            <div className='flex justify-center items-center mt-10 '>
                <div className='text-theme-secondary'>
                    &copy; Copyright 2025 . Made By "M.Umar" 
                </div>
            </div>

        </div>



    </div>
   </div>
    
  )
}
