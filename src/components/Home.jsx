import React from 'react'
import image from '../../public/image.jpg'
import { BiLogoFacebook, BiLogoGithub, BiLogoLinkedin, BiLogoYoutube } from 'react-icons/bi'

const Home = () => {
  return (
    <div id='home' className='flex min-h-screen w-full items-center justify-center'>
      
      <div className='flex flex-col items-center justify-center gap-8 p-5 text-center'>
        
        <img src={image} alt="" className='w-250px sm:300px rounded-full'/>

        <div className='space-y-1 sm:space-y-3'>
          <h1 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-4xl font-semibold text-transparent md:text-4xl lg:text-5xl'>Kushal Neupane</h1>
          <h3 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-xl font-light text-transparent md:text-2xl lg:text-3xl' >Hella Lazy!</h3>
          <p className='max-w-[550px] text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam suscipit nesciunt saepe numquam beatae, earum repellat blanditiis. Neque, sint.</p>
        </div>

        <div className="flex gap-3">
          <a href="https://github.com/Undefile/" target='_blank' rel='noreferrer'>
          <BiLogoGithub className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/>
          </a>

          <BiLogoLinkedin className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/>

          <BiLogoFacebook className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/>

          <BiLogoYoutube className='h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-12 md:w-12'/>

        </div>
      </div>
    </div>
  )
}

export default Home