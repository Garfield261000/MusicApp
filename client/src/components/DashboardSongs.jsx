import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {IoAdd,IoPause,IoPlay,IoTrash} from 'react-icons/io5'
import {AiOutlineClear} from 'react-icons/ai'
import {useStateValue} from '../context/StateProvider'
import {getAllSongs} from '../api/index'
import {actionType} from '../context/reducer'
import {SongCard} from './index'

const DashboardSongs = () => {

  const [songFilter, setSongFilter] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [{allSongs} , dispatch] = useStateValue();

  useEffect(() => {
    if (!allSongs){
      getAllSongs().then((data)=>{
        dispatch({
          type : actionType.SET_ALL_SONGS,
          allSongs : data.data
        })
      })
    }
  }, [])
  
  return (
    <div className='w-full p-4 flex flex-col items-center justify-center'>
      <div className='w-full flex justify-center items-center gap-20'>
        <NavLink to={"/dashboard/newSong"} className='flex items-center justify-center px-4 py-3 border rounded-md border-gray-300 hover:border-gray-500 shadow-md cursor-pointer'>
          <IoAdd/>
        </NavLink>
        <input 
        className={`w-50 px-4 py-2 border ${isFocus?'border-gray-500 shadow-md' : 'border-gray-300'} rounded-md bg-transparent outline-none duration-100 transition-all ease-in-out text-base text-textColor font-semibold`}
        type="text" 
        placeholder='Search Here..' 
        value={songFilter} 
        onChange={(e) => {setSongFilter(e.target.value)}}
        onBlur={()=>{setIsFocus(false)}}
        onFocus={()=>{setIsFocus(true)}}/>
        <i>
        <AiOutlineClear className='text-lg text-textColor cursor-pointer'/>
      </i>
      </div>

      {/* main container */}
      <div className='relative w-full my-4 p-4 py-16 border border-gray-300 rounded-md'>
       {/* the count */}
       <div className='absolute top-4 left-4'>
        <p className='text-xl font-bold'>
          <span className='text-sm font-semibold text-textColor'>Count : </span>
          {allSongs?.length}
        </p>
       </div>
       <div>
          <SongContainer data={allSongs}></SongContainer>
       </div>
      </div>
    </div>
  )
}

export const SongContainer = ({data}) =>{
  return (
    <div className='w-full flex flex-wrap gap-3 items-center justify-evenly'>
      {data && data.map((song ,i) =>(
        <SongCard key={song._id} data={song} index={i} type={"song"}/>
      ))}
    </div>
  )
};

export default DashboardSongs