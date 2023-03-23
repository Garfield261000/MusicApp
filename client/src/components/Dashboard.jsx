import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import {IoHome} from 'react-icons/io5'
import { isActiveStyles, isNotActiveStyles } from '../utils/styles'
import { DashboardHome,DashboardAlbums, DashboardArtists,DashboardUsers,DashboardSongs,DashboardNewSong } from './index'




const Dashboard = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center bg-[#790252] '>
        <Navbar/>
        <div className='w-[60%] my-2 p-4 flex items-center justify-evenly'>
          <NavLink to={"/dashboard/home"} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}>
            <IoHome className='text-2xl text-white'></IoHome>
          </NavLink>
          <NavLink to={"/dashboard/user"} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}> 
          Users
          </NavLink>
          <NavLink to={"/dashboard/songs"} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}> 
          Songs
          </NavLink>
          <NavLink to={"/dashboard/artist"} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}> 
          Artists
          </NavLink>
          <NavLink to={"/dashboard/albums"} className={({isActive})=>isActive?isActiveStyles:isNotActiveStyles}> 
          Albums
          </NavLink>
        </div>

        <div className='my-4 w-full h-800 p-4 '>
          <Routes>
            <Route path='/home' element={<DashboardHome/>}/>
            <Route path='/user' element=
            {<DashboardUsers/>}/>
            <Route path='/songs' element={<DashboardSongs/>}/>
            <Route path='/artist' element={<DashboardArtists/>}/>
            <Route path='/albums' element={<DashboardAlbums/>}/>
            <Route path='/newSong' element={<DashboardNewSong/>}/>
          </Routes>
        </div>
    </div>
  )
}

export default Dashboard