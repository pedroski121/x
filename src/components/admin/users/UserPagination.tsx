import { axiosInstance } from "@utils/axiosInstance"
import { AxiosResponse } from "axios"
import { FC } from "react"
import useSWR from 'swr'
import Link from "next/link"
import { USER_LINKS } from "@lib/types/admin"
import { useRouter } from "next/router"

const UserPagination: FC<{limit:number}> = ({limit}) => {
   const router = useRouter()
    const userCount = async (url: string) => await axiosInstance.get(url).then((userNumbers: AxiosResponse<{ userCount: number }>): number => {
        const { userCount } = userNumbers.data
        const pages = Math.ceil(userCount / limit)
        return pages
    })
    const fetchUserCount = useSWR('/api/user/count', userCount)
    // create an array for the number of pages 
    const userCountData = Array(fetchUserCount.data).fill(0).map((_, i) => i + 1);
    const currentPage = router.query.page
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