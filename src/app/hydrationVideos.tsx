"use client"
import { useTheme } from 'next-themes'
import React from 'react'

const page = () => {
  const {theme}=useTheme()
  //to prevent hydration i.e server ma localstorage hunna so usetheme is undefined and client ma user le choose gareko hunxa dark
  //dark doesnt= undefined so hydration mismatch
  
    if (!theme) return null;
  //server tries to render usetheme but cant render so return undefined and null is returned to server so sever stop rendering
  //client ko theme is used
  return (
    <div>
    <div className='flex pt-40    '>
       <video src={theme === "dark" ? "antiquefire.mp4" : "antiquefirewhite.mp4"} muted autoPlay loop className='w-1/2   [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]'></video>
       
      <div className='w-1/2'>IshanxPun <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta facilis deleniti saepe impedit? Eaque beatae temporibus corporis quae, eos mollitia quia expedita ad repudiandae vitae quaerat earum, deserunt blanditiis molestiae reiciendis saepe enim officiis voluptates, officia nesciunt ducimus natus nulla aliquam inventore. Fuga omnis voluptatibus, obcaecati similique ipsa amet ab?</div></div>
    </div>
    </div>
  )
}

export default page
