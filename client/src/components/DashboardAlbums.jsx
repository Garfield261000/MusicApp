import React, { useEffect } from 'react'
import { getAllAlbums } from '../api';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider'
import SongCard from './SongCard';

const DashboardAlbums = () => {
  
  const [{allAlbums} ,dispatch] = useStateValue();
  
  useEffect(() => {
    if (!allAlbums){
      getAllAlbums().then((data)=>{
        dispatch({
          type : actionType.SET_ALL_ALBUMS,
          allAlbums : data.data
        })
      })
    }
  }, [])
  return (
    <div className='w-full p-4 flex flex-col items-center justify-center'>
       <div className='relative w-full my-4 p-4  border border-gray-300 rounded-md'>
       <div>
          <AlbumContainer data={allAlbums}></AlbumContainer>
       </div>
      </div>
    </div>
  )
}

export const AlbumContainer = ({data}) =>{
  return (
    <div className='w-full flex flwx-wrap gap-3 items-center justify-evenly'>
      {data && data.map((album ,i) =>(
        <SongCard key={album._id} data={album} index={i} type={"album"}/>
      ))}
    </div>
  )
};

export default DashboardAlbums