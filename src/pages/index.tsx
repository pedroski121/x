import { NavBar } from "@components/navbar"
import { HomePageCard } from "@components/home-page-card"
import { Footer } from "@components/footer"

const Home = () => {
  return (<div className="overflow-hidden">
    <NavBar/>
<div className="row">
  <div className="col-xs-12 col-sm-6 p-4">
    <HomePageCard name="MEN" imageURL="/suit.jpg" link="/categories/men" altText="men card"/>
  </div>
  <div className="col-xs-12 col-sm-6 p-4">
    <HomePageCard name="WOMEN" imageURL="/african-women.jpg" link="/" altText="women card"/>
  </div>
  <div className="col-xs-12 col-sm-6 p-4">
    <HomePageCard name="CHILDREN" imageURL="/child.jpg" link="/" altText="children card"/>
  </div>
  <div className="col-xs-12 col-sm-6 p-4">
    <HomePageCard name="OKIRIKA" imageURL="/okirika.jpg" link="/" altText="okirika card"/>
  </div>
  </div>
  <Footer/>
  </div>
)
}

export default Home