import { FC } from "react"
import Link from "next/link"
import { USER_LINKS } from "@lib/types/admin"
import { useRouter } from "next/router"
import { useFetchUserPageCount } from "@hooks/useFetchUserPageCount"

const UserPagination: FC<{limit:number}> = ({limit}) => {
    const router = useRouter()
    const {data} = useFetchUserPageCount(limit)
    const currentPage = router.query.page

    // create an array for the number of pages 
    const userCountData = Array(data?.pages).fill(0).map((_, i) => i + 1);
    return  (
    <nav aria-label="Admin Userpage navigation" className="d-flex justify-content-center mt-4">
    <ul className="pagination">
            {
             userCountData?.map((pageNumber)=>{
                return ( <li className="page-item" key={pageNumber}> 
                             <Link href={`${USER_LINKS.BASE_LINK}/${pageNumber}`} className={`page-link shadow-none ${Number(currentPage)==pageNumber ? 'bg-dark text-light' : 'text-dark'}`}>{pageNumber}</Link>
                        </li>
                )
            })
        }
    </ul>
    </nav>
    )}

export { UserPagination }