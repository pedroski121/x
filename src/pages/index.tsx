import { NavBar } from "@components/navbar"
import { HomePageCard } from "@components/home-page-card"
import { Footer } from "@components/footer"

const Home = () => {
  return (<div className="overflow-hidden">
    <NavBar />
    <div className="row">
      <div className="col-xs-12 col-sm-6 p-4">
        <HomePageCard name="MEN" imageURL="/suit.jpg" link="/categories/men" altText="men card" />
      </div>
      <div className="col-xs-12 col-sm-6 p-4">
        <HomePageCard name="WOMEN" imageURL="/african-women.jpg" link="/categories/women" altText="women card" />
      </div>
      <div className="col-xs-12 col-sm-6 p-4">
        <HomePageCard name="UNISEX" imageURL="/child.jpg" link="/categories/children" altText="children card" />
      </div>
      <div className="col-xs-12 col-sm-6 p-4">
        <HomePageCard name="OKRIKA" imageURL="/okirika.jpg" link="/categories/okrika" altText="okrika card" />
      </div>
    </div>
    <Footer />
  </div>
  )
}


export default Home