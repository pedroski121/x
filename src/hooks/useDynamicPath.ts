import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring";

import { AVAILABLE_CATEGORIES } from "@components/category";

interface CurrentCategoryPage extends ParsedUrlQuery {
  category?:string,
}

/* hook to get the exact dynamic path and
 redirects if the path is wrong */

export const useDynamicPath = ()=>{
    const router = useRouter();
    const currentPagePath:string = router.asPath;
    const dynamicpages = router.query as CurrentCategoryPage
    let exactPath:string[] = currentPagePath.split('/')
    let pages:string[] = exactPath.slice(2);

    if (dynamicpages.category && !Object.values(AVAILABLE_CATEGORIES).includes(pages[pages.length-1] as AVAILABLE_CATEGORIES)) {
        console.log('Page not found');
        router.push('/404')
    } 
    return pages
}
