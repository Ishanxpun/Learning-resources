"use client"
import React, { useState } from 'react'

const page = () => {
  const [val , setVal] = useState("")
  const clear =()=>{
    setVal("")
  }
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-4'>
       {val}
       <input type="text" placeholder='type anything' value={val} onChange={(event)=>setVal(event?.target.value)} className='border px-4 py-2'/>
       <button onClick={clear} className='border text-black bg-white cursor-pointer px-4 py-2 rounded-2xl'>clear</button>
    </div>
    //withour input value clear garda clear hunxa but input ko clear hudaina
  )
}

export default page