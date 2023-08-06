import { AccountBody} from "@components/account"
import { Footer } from "@components/general/footer"
import { getServerSideProps } from "@utils/user-session"
import { NextPage } from "next/types"
import { EditForm } from "@components/account"

const EditAddress:NextPage = () =>{

    return <>
        <AccountBody sectionHeading="Edit Address" >
          <EditForm/>
        </AccountBody>
        <Footer/>
    </>
}


export {getServerSideProps}
export default EditAddress