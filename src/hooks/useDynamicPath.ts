import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring";

import { AVAILABLE_CATEGORIES } from "@components/category";

interface CurrentCategoryPage extends ParsedUrlQuery {
  category?:string
}
/* hook to get the exact dynamic path and
 redirects if the path is wrong */

export const useDynamicPath = ()=>{
    const router = useRouter();
    const currentPagePath:string = router.asPath;
    const {category} = router.query as CurrentCategoryPage
    let exactPath:string[] = currentPagePath.split('/')
    let currentPage:string = exactPath[exactPath.length - 1];

    if (category && !Object.values(AVAILABLE_CATEGORIES).includes(currentPage as AVAILABLE_CATEGORIES)) {
        console.log('Page not found');
        router.push('/')

    } 
    return currentPage
}
