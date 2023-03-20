import { NextPage } from "next";
import { NavBar } from "@components/navbar";
import { Footer } from "@components/footer";
import {CategoryCard, BreadCrumbNav } from "@components/category";
import { useDynamicPath } from "@hooks/useDynamicPath";
import { GetStaticPaths, GetStaticProps } from "next";

interface paths {
  _id:string,
  name:string,
  imgURL:string,
  subCategories:{_id:string,name:string, imgURL:string}[],
}

interface ICategory {
  categoriesPaths:paths[]
}

const Category:NextPage<ICategory> = ({categoriesPaths}) => {
    const pages = useDynamicPath(); 
    const currentPageName = pages[pages.length - 1]
    const currentCategory = categoriesPaths.filter(path => path.name == currentPageName)[0]
    const subCategories = currentCategory.subCategories
    
    return (
        <>
          <NavBar/>
          <div className="container-fluid">
          <BreadCrumbNav pages={pages}/>
            <div className="row mt-1 mb-4">
               { subCategories.map((category)=>{
                  return <CategoryCard key={category._id} imgSrc="/men/all.jpg" queryString={category.name} subCategoryName={category.name} categoryName={currentCategory.name}/>
                })
              }
           </div>
          </div>
          <Footer/>
        </>
    )
}

const getStaticProps:GetStaticProps<ICategory> = async () =>  {
  const res:paths[] = await fetch(`${process.env.SERVER}/api/category/all`)
                .then((res)=>{ return res.json();})
                .catch((err)=>{console.log(err)})
   return { props: {categoriesPaths:res} }
 }

const getStaticPaths:GetStaticPaths = async () =>{
    const res = await fetch(`${process.env.SERVER}/api/category/all`);
    const categories:paths[] = await res.json();
    const categoriesPath = categories.map((category:paths)=>({
      params:{category:category.name}
    }));
  return { paths: categoriesPath, fallback:false}
}


export {getStaticPaths, getStaticProps}
export default Category