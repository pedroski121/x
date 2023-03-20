import Link from "next/link";
import { FC } from "react";

interface IBreadCrumbNav {
  pages: string[]
}

const BreadCrumbNav:FC<IBreadCrumbNav> = ({pages}) => {
    return (
        <>
           <header className="d-flex flex-wrap justify-content-center py-2 border-bottom ">
           <div className=" mb-1 mb-md-0 me-auto text-dark text-decoration-none">
           <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/" className="link-dark">Home</Link></li>
                {
                  pages.map((page,index)=>{
                    
                    // check if this is the current page you are on
                    const activePage = pages[pages.length - 1] == page;
                
                    // use the list of dynamic pages upto the current page and turns it into a string, that the Link tag can easily navigates to 
                    let currentRoute = pages.slice(0,index+1).toString().replace(',','/')
                    console.log(currentRoute)
                    // breadcrumb dynamic links for pages visited in order
                    return <Link href={`/categories/${currentRoute}`} key={`${index}${page}`} className={`breadcrumb-item ${activePage ? 'active text-decoration-none': 'link-dark'} text-capitalize `} aria-current="page">{page}</Link>
                  })
                }
              </ol>
            </nav>
      </div>

    </header>
        </>
    )
}
export {BreadCrumbNav}