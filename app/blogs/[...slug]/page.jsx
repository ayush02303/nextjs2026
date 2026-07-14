import React from 'react'

const page = async ( props ) => {

  const { slug} = await props.params; 
  console.log(slug)
  return (
    <div>
      <h1>Hii from blog</h1>
    </div>
  )
}

export default page




farce