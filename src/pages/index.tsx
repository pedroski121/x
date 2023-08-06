import { ExploreNav } from "@components/home/ExploreNav"
import { SideBar } from "@components/general/sidebar"
import { Body } from "@components/home/Body"
import { Footer } from "@components/general/footer"
import { IUser } from "@lib/types/current-user"
import { CurrentUserContext} from "@contexts/CurrentUserContext"
import { useContext, useState } from "react"
import { UserSessionAction } from "@lib/enums"
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
       dispatch({type:UserSessionAction.SET_USER, payload:{user:currentUser}})   
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
        <ExploreNav />
        <SideBar />
        <Body />

      </div>
      <Footer />
    </>
  )
}





export default Home
