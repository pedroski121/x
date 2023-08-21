import { NextPage } from "next/types"

import { Footer } from "@components/general/footer"
import { AccountBody } from "@components/account"
import { OrderList } from "@components/account"
import { getServerSideProps } from "@utils/user-session"
import { TAccountPageProps } from "@lib/types/account"


const Orders: NextPage<TAccountPageProps> = () => {
    return (
        <>
            <AccountBody sectionHeading="Orders">
                <OrderList />
            </AccountBody>
            <Footer />
        </>
    )
}

export { getServerSideProps }

export default Orders