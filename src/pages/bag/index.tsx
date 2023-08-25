import { NextPage } from "next"
import { Table, EmptyBag } from "@components/bag"
import { SideBar } from "@components/general/sidebar"
import { Footer } from "@components/general/footer"
import { useBag } from "@hooks/bag/useBag"


const Bag: NextPage = () => {

    const { bagItems, productsInBag, mutate, fetchingBagItems, fetchingProducts } = useBag()

    return (
        <>
            <div className="container-fluid">
                <div className="overflow-hidden p-4">
                    <h1 className="text-center fst-italic">My Shopping Bag</h1>
                    {(fetchingBagItems || fetchingProducts)
                        ? <p>loading...</p>
                        : (bagItems && productsInBag && productsInBag.length !== 0) ?
                            <>
                                <Table bagItems={bagItems} products={productsInBag} mutate={mutate}
                                    fetchingBagItems={fetchingBagItems} fetchingProducts={fetchingProducts} />
                            </> :
                            <EmptyBag />
                    }

                </div>
            </div>
            <SideBar />
            <Footer />
        </>
    )
}

export default Bag