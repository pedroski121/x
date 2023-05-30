import { NextPage } from "next"

import { NavBar } from "@general-components/navbar"
import { Table, SummaryCheckout } from "@components/bag"


const Bag: NextPage = () => {

    return (
        <>


            <NavBar />
            <div className="container-fluid">
                <div className="overflow-hidden p-4">
                    <h1 className="text-center">My Shopping Bag</h1>
                    <Table />
                    <SummaryCheckout />
                </div>
            </div>
        </>
    )
}

export default Bag