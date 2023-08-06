import { NextPage } from "next"
import { Table, SummaryCheckout, EmptyBag } from "@components/bag"
import { SideBar } from "@components/general/sidebar"
import { useBagCheck } from "@hooks/useBagCheck"

const Bag: NextPage = () => {
    const { sumOfItems, bagEmptyStatus } = useBagCheck()
    return (
        <>
            <div className="container-fluid">
                <div className="overflow-hidden p-4">
                    <h1 className="text-center fst-italic">My Shopping Bag</h1>
                    {
                        bagEmptyStatus()
                            ? <EmptyBag />
                            : <> <Table />
                                <SummaryCheckout sumOfItems={sumOfItems} />
                            </>
                    }

                </div>
            </div>
            <SideBar />
        </>
    )
}

export default Bag