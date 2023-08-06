import { NavBar } from "@general-components/navbar"
import { ExploreNav } from "@components/home/ExploreNav"
import { SideBar } from "@components/general/sidebar"
import { Body } from "@components/home/Body"
import { Footer } from "@components/general/footer"
import { CurrentUserContext, IUser } from "@contexts/CurrentUserContext"
import { useContext, useState } from "react"
import { UserAction } from "@contexts/CurrentUserContext"
import { TUserSession } from "@lib/types/current-user"
import { NextPage } from "next/types"
import { useEffect } from "react"
import { axiosInstance } from "@utils/axiosInstance"
import { AxiosResponse } from "axios"

const Home:NextPage = () => {
  const [currentUser, setCurrentUser] = useState<IUser>()
  const {dispatch} = useContext(CurrentUserContext)
  const callDispatch = () =>{
    if(!!currentUser && dispatch){
       dispatch({type:UserAction.SET_USER, payload:{user:currentUser}})   
    }
  }


  const getCurrentUser = async () =>{
    const userID = await axiosInstance.get('/api/auth/current-user', {
      withCredentials: true,
    }).then((user:AxiosResponse<TUserSession>)=>{
        const userID = user?.data[0].currentUser._id
        return userID
    }).catch((err)=>{
      return undefined
    }); 
    if(userID) {
      const userDetails = (await axiosInstance.get(`/api/user/${userID}`)).data
      setCurrentUser(userDetails)
    }

  }
useEffect(()=>{
  getCurrentUser()
},[])

useEffect(()=>{
  callDispatch()
}, [currentUser])

  return (
    <>
      <div className="overflow-hidden">
        <NavBar />
        <ExploreNav />
        <SideBar />
        <Body />

      </div>
      <Footer />
    </>
  )
}





export default Home
