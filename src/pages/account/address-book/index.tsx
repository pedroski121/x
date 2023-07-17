import { NavBar } from "@components/general/navbar"
import { AccountBody, Address} from "@components/account"
import { Footer } from "@components/general/footer"

const AddressBook = () =>{
    return <>
        <NavBar/>
        <AccountBody sectionHeading="Address Book" >
            <Address/>
        </AccountBody>
        <Footer/>
    </>
}

export default AddressBook