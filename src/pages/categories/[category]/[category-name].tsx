import { NavBar } from "@components/navbar";
import { BreadCrumbNav } from "@components/category";
import { ProductCard } from "@components/product-card";
import { useDynamicPath } from "@hooks/useDynamicPath";
import { Footer } from "@components/footer";

const CategoryProducts = () => {
  const paths = useDynamicPath()
  return (
    <>

      <NavBar />
      <div className="container-fluid">
        <BreadCrumbNav pages={paths} />
        <div className="row">
          <ProductCard title="Brown leather Shoe" price={4000} imgURL="/men/shoes.jpg" />
          <ProductCard title="White senator" price={6000} imgURL='/men/senator.jpg' />
          <ProductCard title="Casio Watch" price={6000} imgURL='/men/watches.jpg' />
          <ProductCard title="Black Suit" price={6000} imgURL='/suit.jpg' />
        </div>
      </div>
      <Footer />
    </>
  )
}
export default CategoryProducts