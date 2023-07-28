import { NavBar } from "@components/general/navbar"
import { AccountBody} from "@components/account"
import { Footer } from "@components/general/footer"
import { getServerSideProps } from "@utils/user-session"
import { NextPage } from "next/types"
import { TAccountPageProps } from "@lib/types/account"


const EditAddress:NextPage<TAccountPageProps> = (session) =>{
    return <>
        <NavBar/>
        <AccountBody sectionHeading="Edit Address" >
        <form className="row justify-content-center p-4">
  <div className="col-12 col-md-6">
    <label htmlFor="firstName" className="form-label m-0 fw-bold m-0 fw-bold">First Name</label>
    <input  type="text" className="form-control shadow-none border border-secondary p-0 px-2 py-1 rounded-1 shadow-none border border-secondary p-0 px-2 py-1 rounded-1" id="firstName"/>
  </div>
  <div className="col-12 col-md-6 mt-2 mt-md-0">
    <label htmlFor="lastName" className="form-label m-0 fw-bold m-0">Last Name</label>
    <input type="text"  className="form-control shadow-none border border-secondary p-0 px-2 py-1 rounded-1" id="lastName"/>
  </div>
  <div className="col-12 col-md-6 mt-2">
  <label htmlFor="phoneNumber" className="form-label m-0 fw-bold m-0">Phone Number</label>
 <div className="input-group">
  <span className="input-group-text bg-dark text-light fw-bold">+234</span>
  <input type="number"  min={0} className="form-control shadow-none border border-secondary" aria-label="Phone Number"/>
</div>
  </div>
  <div className="col-12 col-md-6 mt-2">
  <label htmlFor="additionalPhoneNumber" className="form-label m-0 fw-bold m-0">Additional Phone Number</label>
  <div className="input-group">
  <span className="input-group-text bg-dark text-light fw-bold">+234</span>
  <input type="number" min={0} className="form-control shadow-none border border-secondary" aria-label="Additional Phone Number"/>
</div>
  </div>

  <div className="col-12 mt-2">
    <label htmlFor="address" className="form-label m-0 fw-bold m-0  ">Address 1</label>
    <input type="text" className="form-control shadow-none border border-secondary p-0 px-2 py-1 rounded-1" id="address" placeholder="No 23, X street"/>
  </div>
  <div className="col-12 mt-2">
    <label htmlFor="address2" className="form-label m-0 fw-bold m-0">Address 2</label>
    <input type="text" className="form-control shadow-none border border-secondary p-0 px-2 py-1 rounded-1" id="address2" placeholder="No.6 John Downey Street"/>
  </div>
  <div className="col-md-6 mt-2">
    <label htmlFor="inputState" className="form-label m-0 fw-bold m-0">State</label>
    <select id="inputState" className="form-select shadow-none border border-secondary rounded-1">
      <option defaultValue={'Choose'} disabled>Choose</option>
      <option>Abia</option>
      <option>Adamawa</option>

    </select>
  </div>
  <div className="col-md-6 mt-2">
    <label htmlFor="city" className="form-label m-0 fw-bold m-0">City</label>
    <select id="city" className="form-select shadow-none border border-secondary rounded-1">
      <option defaultValue={'Please Select'} disabled> Please Select</option>
      <option value="arochukwu">Arochukwu</option>
      <option value="umuahia">Umuahia</option>

    </select>
  </div>


  <div className="col-12 mt-3 text-end">
    <button type="submit" className="btn btn-outline-dark p-0 px-4 py-1">Save</button>
  </div>
</form>
        </AccountBody>
        <Footer/>
    </>
}


export {getServerSideProps}
export default EditAddress