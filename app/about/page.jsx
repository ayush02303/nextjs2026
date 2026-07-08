import Image from 'next/image'
import React from 'react'
import cat from "../../public/kitty.jpeg"
import {Roboto} from "next/font/google"

export const metadata = {
  title : "service page", 
  description : " this is page ", 
  authors : [
    { name : "ayush "}, {
      name : "badola"
    }
    
  ], 
  keywords : ["nextjs" , "react js" , "fullstack"] 

} 

const page = () => {
  return (
    <div>
      <p className='hello'>Hello from About to begin too with a message</p>

      <Image src={"/kitty.jpeg"} width={500} height={500} alt='sample image'/>
    </div>
  )
}

export default page
