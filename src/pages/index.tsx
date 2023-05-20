import { NavBar } from "@components/navbar"
import { HomePageCard } from "@components/home-page"
import { Footer } from "@components/footer"

const Home = () => {
  return (<div className="overflow-hidden">
    <NavBar />
    <div className="row">
      <div className="p-5 mb-3  bg-body-tertiary  border border-dark">
        <h1 className="display-5 fw-bold">X</h1>
        <p className="col-md-12 fs-4">
          Find your Perfect Style and Fit.
        </p>
      </div>


      <HomePageCard name="MEN" imageURL="/suit.jpg" link="/categories/men" altText="men card" />

      <HomePageCard name="WOMEN" imageURL="/african-women.jpg" link="/categories/women" altText="women card" />

      <HomePageCard name="UNISEX" imageURL="/men/all.jpg" link="/categories/unisex" altText="unisex card" />

      <HomePageCard name="OKRIKA" imageURL="/okirika.jpg" link="/categories/okrika" altText="okrika card" />
    </div>
    <Footer />
  </div>
  )
}


export default Home