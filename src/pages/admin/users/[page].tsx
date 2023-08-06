import { Footer } from "@components/general/footer"
import { Header } from "@components/admin"
import { UserTable } from "@components/admin"
import { UserPagination } from "@components/admin/users/UserPagination"
import { useState } from "react"
import { NextPage } from "next"


const Users:NextPage = () => {
    const [limit, setLimit] = useState<number>(30)

    return (<>
        <section className="container">
            <Header pageName="Users" />
            <UserTable limit={limit}/>
            <UserPagination limit={limit} />
        </section>
        <Footer />
    </>
    )
}

export default Users