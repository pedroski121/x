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
          An online beauty and fashion store that offers a broad range of choices, from chic to casual, from bold to mild.
          Our collections are always up-to-date and cater to every need, from shoes to bags, from dresses to coats.
          We strive to be a shopping shrine for every fashionista, offering a kaleidoscope of colors, fabrics, and styles.
        </p>
      </div>

      <div className="col-xs-12 col-sm-6 pe-1 mt-3 ">
        <HomePageCard name="MEN" imageURL="/suit.jpg" link="/categories/men" altText="men card" />
      </div>
      <div className="col-xs-12 col-sm-6 pe-1 mt-3">
        <HomePageCard name="WOMEN" imageURL="/african-women.jpg" link="/categories/women" altText="women card" />
      </div>
      <div className="col-xs-12 col-sm-6 mt-3 pe-1">
        <HomePageCard name="UNISEX" imageURL="/men/all.jpg" link="/categories/unisex" altText="unisex card" />
      </div>
      <div className="col-xs-12 col-sm-6 mt-3 pe-1">
        <HomePageCard name="OKRIKA" imageURL="/okirika.jpg" link="/categories/okrika" altText="okrika card" />
      </div>
    </div>
    <Footer />
  </div>
  )
}


export default Home