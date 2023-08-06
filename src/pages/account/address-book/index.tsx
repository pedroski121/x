import { AccountBody, Address} from "@components/account"
import { Footer } from "@components/general/footer"
import { getServerSideProps } from "@utils/user-session"
import { NextPage } from "next/types"
const AddressBook:NextPage = () =>{
    return <>
        <AccountBody sectionHeading="Address Book" >
            <Address/>
        </AccountBody>
        <Footer/>
    </>

}

export {getServerSideProps}

export default AddressBook