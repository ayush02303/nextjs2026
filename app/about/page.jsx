import Image from 'next/image'
import React from 'react'
import cat from "../../public/kitty.jpeg"
import {Roboto} from "next/font/google"

const page = () => {
  return (
    <div>
      <p className='hello'>Hello from About to begin</p>

      <Image src={"/kitty.jpeg"} width={500} height={500} alt='sample image'/>
    </div>
  )
}

export default page
