import { NavBar } from "@general-components/navbar"
import { ExploreNav } from "@components/home/ExploreNav"
import { SideBar } from "@components/general/sidebar"
import { Body } from "@components/home/Body"
import { Footer } from "@components/general/footer"
import { GetServerSideProps } from "next/types"
import { axiosInstance } from "@utils/axiosInstance"
const Home = (props:any) => {

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



// export const getServerSideProps:GetServerSideProps = async  (ctx) => {
//   const currentUser = await axiosInstance.get('/api/auth/current-user', {
//     withCredentials:true,
//      headers:{
//         Cookie:ctx.req.headers.cookie
//     }
//   }).then((res)=>{
//       console.log(res.data)
//   }).catch((err)=>{
    
//   })

//   return {props:{ 
//     message:'testing the waters'
//   }}
// }

export default Home
