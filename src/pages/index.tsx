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
  // return (<div className="overflow-hidden">
  //   <NavBar />
  //   <div className="row">
  //     <div className="p-5 mb-3  bg-body-tertiary  border border-dark">
  //       <h1 className="display-5 fw-bold">X</h1>
  //       <p className="col-md-12 fs-4">
  //         Find your Perfect Style and Fit.
  //       </p>
  //     </div>


  //     <HomePageCard name="MEN" imageURL="/suit.jpg" link="/categories/men" altText="men card" />

  //     <HomePageCard name="WOMEN" imageURL="/african-women.jpg" link="/categories/women" altText="women card" />

  //     <HomePageCard name="UNISEX" imageURL="/men/all.jpg" link="/categories/unisex" altText="unisex card" />

  //   </div>
  //   <Footer />
  // </div>
  // )
}


export default Home