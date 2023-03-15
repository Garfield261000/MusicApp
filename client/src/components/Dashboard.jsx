import React from 'react'
import Navbar from './Navbar'

const Dashboard = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center bg-primary '>
        <Navbar/>
        <div className='w-[60%] my-2 bg-blue-500 p-4 flex items-center justify-evenly'></div>
    </div>
  )
}

export default Dashboard