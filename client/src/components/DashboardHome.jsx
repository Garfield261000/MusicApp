import React, { useEffect } from 'react'
import { getAllUsers,getAllAlbums, getAllArtist, getAllSongs} from '../api'
import { useStateValue } from '../context/StateProvider'
import { actionType } from "../context/reducer";
import { FaUsers } from "react-icons/fa";
import { GiLoveSong, GiMusicalNotes } from "react-icons/gi";
import { RiUserStarFill } from "react-icons/ri";
import { bgColors } from "../utils/styles";


export const DashboardCard = ({ icon, name, count }) => {

  const bg_color = bgColors[parseInt(Math.random() * bgColors.length)]

  return (
    <div className='p-4 w-40 gap-3 h-auto rounded-lg shadow-md bg-blue-500'
    style={{background: `${bg_color}`}}>
      {icon}
      <p className='text-xl text-textColor'>{name}</p>
      <p className='text-xl text-textColor'>{count}</p>
    </div>
  )
}

const DashboardHome = () => {

  const [{ allUsers, allSongs, allArtists, allAlbums }, dispatch] = useStateValue();

  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch({
          type: actionType.SET_ALL_USERS,
          allUsers: data.data,
        });
      })
    }
    if (!allSongs) {
      getAllSongs().then((data) => {
        dispatch({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.data,
        });
      });
    }

    if (!allArtists) {
      getAllArtist().then((data) => {
        dispatch({ type: actionType.SET_ALL_ARTISTS, allArtists: data.data });
      });
    }

    if (!allAlbums) {
      getAllAlbums().then((data) => {
        dispatch({ type: actionType.SET_ALL_ALBUMS, allAlbums: data.data });
      });
    }
  }, [])


  return (
    <div className='w-full p-6 flex items-center justify-evenly flex-wrap'>
      <DashboardCard icon={<FaUsers className="text-3xl text-textColor" />} name={"Users"} count={allUsers?.length > 0 ? allUsers?.length : 0} />

      <DashboardCard icon={<GiLoveSong className="text-3xl text-textColor" />} name={"Songs"} count={allSongs?.length > 0 ? allSongs?.length : 0} />

      <DashboardCard icon={<RiUserStarFill className="text-3xl text-textColor" />} name={"Artists"} count={allArtists?.length > 0 ? allArtists?.length : 0} />

      <DashboardCard icon={<GiMusicalNotes className="text-3xl text-textColor" />} name={"Albums"} count={allAlbums?.length > 0 ? allAlbums?.length : 0} />
    </div>
  );
};


export default DashboardHome 