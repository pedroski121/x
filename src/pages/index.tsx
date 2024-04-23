import { ExploreNav } from "@components/home/ExploreNav"
import { Body } from "@components/home/Body"
import { Footer } from "@components/general/footer"
import { NextPage } from "next/types"

const Home: NextPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <ExploreNav />
        {/* <SideBar /> */}
        <Body />

      </div>
      <Footer />
    </>
  )
}





export default Home
