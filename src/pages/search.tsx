import { Footer } from "@components/general/footer"
import { NextPage } from "next/types"
import { SubCategoryCard } from "@components/subcategory-card"
import { useWishList } from "@hooks/wishlist/useWishList"
import { CurrentUserContext } from "@contexts/CurrentUserContext"
import { IProductsData } from "@lib/types/product"
import { useFetch } from "@hooks/general/useFetch"
import { useBag } from "@hooks/bag/useBag"
import { useDynamicPath } from "@hooks/general/useDynamicPath"
import { useRouter } from "next/router"
import { useContext } from "react"
import { GrowingSpinner } from "@components/general/spinners"

const Search: NextPage = () => {
    const router = useRouter()
    const { pages } = useDynamicPath();
    const { userState } = useContext(CurrentUserContext)
    const { data: wishListData, changeWish, changingWish } = useWishList(userState._id)
    const { bagItems } = useBag()
    const { q } = router.query
    const { data, isLoading } = useFetch<IProductsData[]>(`/search?q=${q}`)

    return (
        <>
            <div className="container-fluid" style={{ height: '100vh' }}>
                <div className="row">

                    {isLoading ? <GrowingSpinner />
                        : data && data.length !== 0
                            ? <>{data.map((product) => {
                                return <SubCategoryCard productsData={product}
                                    wishListData={wishListData || [{ _id: '', productID: '' }]}
                                    bagItems={bagItems} changingWish={changingWish} changeWish={changeWish}
                                    activePaths={pages} key={product._id} />
                            })}</>
                            : <h1>Product Not Yet Available</h1>
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Search
