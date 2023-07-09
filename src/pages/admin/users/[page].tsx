import { NavBar } from "@components/general/navbar"
import { Footer } from "@components/general/footer"
import { Header } from "@components/admin"
import { UserTable } from "@components/admin"
import { UserPagination } from "@components/admin/users/UserPagination"
import { useState } from "react"
import { NextPage } from "next"


const Users:NextPage = () => {
    const [limit, setLimit] = useState<number>(30)

    return (<>
        <NavBar />
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