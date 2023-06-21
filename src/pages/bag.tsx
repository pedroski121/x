import { NextPage } from "next"
import { useContext } from "react"
import { NavBar } from "@general-components/navbar"
import { Table, SummaryCheckout, EmptyBag } from "@components/bag"
import { BagContext } from "@contexts/BagContext"
import { SideBar } from "@components/general/sidebar"
const Bag: NextPage = () => {
    const { bagState } = useContext(BagContext);


    return (
        <>


            <NavBar />
            <div className="container-fluid">
                <div className="overflow-hidden p-4">
                    <h1 className="text-center fst-italic">My Shopping Bag</h1>
                    {
                        bagState.length <= 1 && bagState[0]?.name == ''
                            ? <EmptyBag />
                            : <> <Table />
                                <SummaryCheckout />
                            </>
                    }

                </div>
            </div>
            <SideBar />
        </>
    )
}

export default Bag