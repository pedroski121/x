import { NextPage } from "next"
import { Header } from "@components/admin"
import { Footer } from "@components/general/footer"
import OrdersTable from "@components/admin/orders/OrdersTable"
import OrdersHeader from "@components/admin/orders/OrdersHeader"


const Orders: NextPage = () => {
    return (<>
        <div className="container">
            <Header pageName="Order" />
            <OrdersHeader />
            <OrdersTable />
        </div>

        <Footer />
    </>
    )
}

export default Orders