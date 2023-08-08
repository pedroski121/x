import { useRouter } from "next/router"


/* hook to get the exact dynamic path and
 redirects if the path is wrong */

export const useDynamicPath = ()=>{
    const router = useRouter();
    const currentPagePath:string = router.asPath;
    let pages:string[] = currentPagePath.split('/').slice(2);
    return {pages, currentPagePath}
}
