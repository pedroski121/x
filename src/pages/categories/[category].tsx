import { NextPage } from "next";
import useSWR from 'swr';
import { NavBar } from "@components/navbar";
import { Footer } from "@components/footer";
import { CategoryCard } from "@components/category";
import { BreadCrumbNav } from "@components/BreadCrumbNav";
import { useDynamicPath } from "@hooks/useDynamicPath";
import { GrowingSpinner } from "@components/spinner";
import { axiosInstance } from "@utils/axiosInstance";


interface IPath {
  _id: string;
  name: string;
  imgURL: string;
  subCategories: { _id: string; name: string; imgURL: string }[];
}


const fetchCategories = async (url: string) => await axiosInstance.get(url).then((res) => res.data);

const Category: NextPage = () => {
  const { data, error, isLoading } = useSWR(`/api/category/all`, fetchCategories);
  // Get  the exact page your on
  const pages = useDynamicPath();

  //show an error page or loading page depending on the exact state of SWR
  if (error) return <p>An error has occured</p>;
  if (isLoading) return (<GrowingSpinner />);


  const currentPageName = pages[pages.length - 1];
  //filter the data from your database and get the available sub-categories for the exact page you on 
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
