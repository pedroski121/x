import { NextPage } from "next";
import { Footer } from "@general-components/footer";
import { CategoryCard } from "@components/category";
import { BreadCrumbNav } from "@general-components/BreadCrumbNav";
import { useDynamicPath } from "@hooks/useDynamicPath";
import { GrowingSpinner } from "@components/general/spinners";
import Custom404 from "../404";
import { IPath } from "@lib/types/category";
import { useFetch } from "@hooks/general/useFetch";

const Category: NextPage = () => {
  // Get  the exact page your on
  const {pages} = useDynamicPath();
  const {data, error, isLoading} = useFetch(`/api/category/all`)

  //show an error page or loading page depending on the exact state of SWR
  if (error) return <Custom404 />;
  if (isLoading) return (<GrowingSpinner />);

  const currentPageName = pages[pages.length - 1];

  //filter the data from your database and get the available sub-categories for the exact page you on 
  const currentCategory = data.filter((path: IPath) => path.name == currentPageName)[0];
  const subCategories = currentCategory?.subCategories;

  return (
    <>
      <div className="container-fluid">

        <BreadCrumbNav pages={pages} />
        <div className="row mt-1 mb-4">
          {subCategories?.map((category: { name: string, imgURL: string, _id: string }) => {
            return (
              <CategoryCard
                key={category._id}
                _id={category._id}
                imgURL={category.imgURL}
                name={category.name}
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

export default Category;
