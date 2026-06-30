import Image from 'next/image'
import React from 'react'
import cat from "../../public/kitty.jpeg"

const page = () => {
  return (
    <div>
      <p className='hello'>Hello from About</p>

      <Image src={"/kitty.jpeg"} width={500} height={500} alt='sample image'/>
    </div>
  )
}

export default page
