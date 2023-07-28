import { NavBar } from "@components/general/navbar"
import { AccountBody, Address} from "@components/account"
import { Footer } from "@components/general/footer"
import { getServerSideProps } from "@utils/user-session"
import { TAccountPageProps } from "@lib/types/account"
import { NextPage } from "next/types"
const AddressBook:NextPage<TAccountPageProps> = (session) =>{
    return <>
        <NavBar/>
        <AccountBody sectionHeading="Address Book" >
            <Address/>
        </AccountBody>
        <Footer/>
    </>

}

export {getServerSideProps}

export default AddressBook