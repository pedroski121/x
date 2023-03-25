import { NavBar } from "@components/navbar";

import { ProductCard } from "@components/product-card";
import { Footer } from "@components/footer";

const CategoryProducts = () => {
  return (
    <>

      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <ProductCard title="Brown Shoe" price={4000} imgURL="/men/shoes.jpg" />
          <ProductCard title="White senator" price={6000} imgURL='/men/senator.jpg' />
          <ProductCard title="Casio Watch" price={6000} imgURL='/men/watches.jpg' />
          <ProductCard title="Black Suit" price={6000} imgURL='/suit.jpg' />
          <ProductCard title="Face" price={6000} imgURL='/face.jpg' />

        </div>
      </div>
      <Footer />
    </>
  )
}
export default CategoryProducts