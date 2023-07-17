import { NavBar } from "@components/general/navbar"
import { AccountBody} from "@components/account"
import { Footer } from "@components/general/footer"

const WishList = () =>{
    return <>
        <NavBar/>
        <AccountBody sectionHeading="Address Book" >
            <div className="d-flex justify-content-center">
        <div className="card rounded-0 border-0 shadow-lg mt-5" style={{height:"220px", width:"70%"}}>

        <div className="card-body">
    <h5 className="card-title">John Doe</h5>
  </div>
  <ul className="list-group ">
    <li className="list-group-item list-group-item-dark">No.6 John Downey Street</li>
    <li className="list-group-item">London, England</li>
    <li className="list-group-item list-group-item-dark">johndoe@x.com</li>
    <li className="list-group-item">+234 816 000 0000</li>

  </ul>
<div className="card-footer text-end">
<button className="btn btn-outline-dark rounded-5 p-0 border border-0 px-1"><i className="bi bi-pencil"></i></button>
</div>
            </div>
            </div>
        </AccountBody>
        <Footer/>
    </>
}

export default WishList