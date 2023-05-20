import { NextPage } from "next";
import useSWR from 'swr';
import axios from "axios";
import { NavBar } from "@components/navbar";
import { Footer } from "@components/footer";
import { CategoryCard } from "@components/category";
import { BreadCrumbNav } from "@components/BreadCrumbNav";
import { useDynamicPath } from "@hooks/useDynamicPath";


interface IPath {
  _id: string;
  name: string;
  imgURL: string;
  subCategories: { _id: string; name: string; imgURL: string }[];
}


const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);

const Category: NextPage = () => {
  const { data, error, isLoading } = useSWR(`${process.env.SERVER}/api/category/all`, fetcher);
  if (error) return <p>An error has occured</p>;
  if (isLoading) return <p>loading...</p>;

  // Get  the exact page your on
  const pages = useDynamicPath();
  const currentPageName = pages[pages.length - 1];

  //filter the data from your database and get the available categories for the exact page you on 
  const currentCategory = data.filter(
    (path: IPath) => path.name == currentPageName
  )[0];
  const subCategories = currentCategory?.subCategories;

  return (
    <>
      <NavBar />
      <div className="container-fluid">

        <BreadCrumbNav pages={pages} />
        <div className="row mt-1 mb-4">
          {subCategories?.map((category: any) => {
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

export default Category;
