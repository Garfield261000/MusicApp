import React from 'react'
import { useState,useEffect } from 'react'
import { Route,Routes, useNavigate } from 'react-router-dom'
import {Home, Login, MusicPlayer,ContactUs, Premium, Musics} from './components'
import { app } from './config/firebase.config'

import {AnimatePresence, motion} from 'framer-motion'

import { getAuth } from 'firebase/auth'
import { validateUser } from './api'
import { useStateValue } from './context/StateProvider'
import { actionType } from './context/reducer'
import Dashboard from './components/Dashboard'
import UserProfile from './components/UserProfile'

const App = () => {
    const firebaseAuth = getAuth(app);
    const navigate = useNavigate();

    const [{user,isSongPlaying}, dispatch] = useStateValue();

    const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true")

    useEffect(() => {
        firebaseAuth.onAuthStateChanged((userCred)=>{
            if(userCred){
                userCred.getIdToken().then((token)=>{
                    // console.log(token)
                    validateUser(token).then((data)=>{
                        dispatch({
                            type: actionType.SET_USER,
                            user: data
                        })
                    })
                })
            }else{
                setAuth(false);
                window.localStorage.setItem("auth","false");
                dispatch({
                    type : actionType.SET_USER,
                    user : null,
                })
                navigate("/login")
            }
        })
    },[])
    
  return (
    <AnimatePresence mode='wait'>
        <div className='h-full min-w-[680px] bg-[white] flex justify-center items-center'>
            <Routes>
                <Route path='/login' element={<Login setAuth={setAuth}/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/musics' element={<Musics/>}/>
                <Route path='/premium' element={<Premium/>}/>
                <Route path='/contact' element={<ContactUs/>}/>
                <Route path='/dashboard/*' element={<Dashboard/>}/>
                <Route path="/userProfile" element={<UserProfile/>} />
            </Routes>
            {isSongPlaying && (
                <motion.div
                    initial={{opacity:0 , y:50}}
                    animate={{opacity:1 , y:0}}
                    exit={{ opacity: 0, y: 50 }}
                    className={`fixed min-w-[700px] h-50 inset-x-0 bottom-0  bg-[#AF0171] drop-shadow-2xl backdrop-blur-md flex items-center justify-center`}>
                    <MusicPlayer/>
                </motion.div>
            )}
        </div>
    </AnimatePresence>
  )
}

export default App