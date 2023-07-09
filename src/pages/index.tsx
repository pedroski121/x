import { NavBar } from "@general-components/navbar"
import { ExploreNav } from "@components/home/ExploreNav"
import { SideBar } from "@components/general/sidebar"
import { Body } from "@components/home/Body"
import { Footer } from "@components/general/footer"
const Home = () => {


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