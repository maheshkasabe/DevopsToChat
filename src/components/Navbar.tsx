import React from 'react'
import img from "../../public/Logo.png"

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center border-1 border-black rounded-3xl shadow-xl mr-20 ml-20 mt-10 h-20 w-svh' style={{"boxShadow": "0px 3px 8px rgba(0, 0, 0, 0.2)"}}>
        <img src={img.src} alt="logo" className='w-45 h-20 rounded-full' /> 
        <div className='flex flex-row justify-center items-center'>
          <button className='whitespace-nowrap display-inline text-xl font-semibold border-2 pr-4 p-2 pl-4 m-3 w-1/2 h-1/2 rounded-3xl shadow-lg'>Log in </button>
          <button className='whitespace-nowrap display-inline text-xl font-semibold border-2 pr-4 p-2 pl-4 m-3 w-1/2 h-1/2 rounded-3xl shadow-lg bg-black text-white'>Sign up</button>
        </div>

    </div>
  )
}

export default Navbar