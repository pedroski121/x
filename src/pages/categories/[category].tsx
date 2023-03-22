import { NextPage } from "next";
import { NavBar } from "@components/navbar";
import { Footer } from "@components/footer";
import { CategoryCard, BreadCrumbNav } from "@components/category";
import { useDynamicPath } from "@hooks/useDynamicPath";
import { GetStaticPaths, GetStaticProps } from "next";
import { getStaticPaths as getStaticPathsFn, getStaticProps as getStaticPropsFn } from "@lib/categoryPageDataFetch";


interface paths {
  _id: string;
  name: string;
  imgURL: string;
  subCategories: { _id: string; name: string; imgURL: string }[];
}

interface ICategory {
  categoriesPaths: paths[];
}



const Category: NextPage<ICategory> = ({ categoriesPaths }) => {
  const pages = useDynamicPath();
  const currentPageName = pages[pages.length - 1];
  const currentCategory = categoriesPaths.filter(
    (path) => path.name == currentPageName
  )[0];
  const subCategories = currentCategory.subCategories;

  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <BreadCrumbNav pages={pages} />
        <div className="row mt-1 mb-4">
          {subCategories?.map((category) => {
            return (
              <CategoryCard
                key={category._id}
                imgSrc={category.imgURL}
                queryString={category.name}
                subCategoryName={category.name}
                categoryName={currentCategory.name}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};
const getStaticPaths: GetStaticPaths = getStaticPathsFn;
const getStaticProps: GetStaticProps = getStaticPropsFn;

export { getStaticPaths, getStaticProps };
export default Category;
