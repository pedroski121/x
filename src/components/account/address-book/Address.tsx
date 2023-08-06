import Link from "next/link"
import { useContext } from "react"
import { CurrentUserContext } from "@contexts/CurrentUserContext"

export const Address = () => {
  const {userState} = useContext(CurrentUserContext)
    return (<>
              <div className="d-flex justify-content-center">
        <div className="card rounded-0 border-0 shadow-lg mt-3" style={{height:"220px", width:"90%"}}>

        <div className="card-body">
    <h5 className="card-title">{userState.firstName && userState.lastName ? <>{userState.firstName} {userState.lastName}</> : <></>}</h5>
  </div>
  <ul className="list-group">
    {
      userState.address1
      ? <li className="list-group-item list-group-item-dark">{userState.address1}</li> 
      : <></>
    }
    
    {
      userState.state && userState.city 
      ? <li className="list-group-item">{userState.city}, {userState.state}</li>
      :<></>
    }
    <li className="list-group-item list-group-item-dark">{
      userState.email
    }</li>
    {userState.phoneNumber 
    ?<li className="list-group-item">0{userState.phoneNumber}</li>
    : <></> 
    }

  </ul>
<div className="card-footer text-end">
<Link href={'/account/address-book/edit'}>
<button className="btn btn-outline-dark rounded-5 p-0 border border-0 px-2 py-1"><i className="bi bi-pencil"></i></button>
</Link>
</div>
            </div>
            </div>
    </>)
}