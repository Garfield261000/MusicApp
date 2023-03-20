import React, { useEffect } from 'react'
import { getAllArtist } from '../api';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider'
import SongCard from './SongCard';

const DashboardArtists = () => {
  
  const [{allArtists} ,dispatch] = useStateValue();
  
  useEffect(() => {
    if (!allArtists){
      getAllArtist().then((data)=>{
        dispatch({
          type : actionType.SET_ALL_ARTISTS,
          allArtists : data.data
        })
      })
    }
  }, [])
  return (
    <div className='w-full p-4 flex flex-col items-center justify-center'>
       <div className='relative w-full my-4 p-4  border border-gray-300 rounded-md'>
       <div>
          <ArtistContainer data={allArtists}></ArtistContainer>
       </div>
      </div>
    </div>
  )
}

export const ArtistContainer = ({data}) =>{
  return (
    <div className='w-full flex flwx-wrap gap-3 items-center justify-evenly'>
      {data && data.map((artist ,i) =>(
        <SongCard key={artist._id} data={artist} index={i} type={"artist"}/>
      ))}
    </div>
  )
};

export default DashboardArtists