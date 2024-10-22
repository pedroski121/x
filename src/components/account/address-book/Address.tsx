import Link from "next/link"
import { useFetchSWR } from "@hooks/general/useFetchSWR"
import { useUser } from "@clerk/nextjs"
export const Address = () => {
  const { data: userState } = useFetchSWR('/api/user')
  const { user } = useUser()
  return (<>
    <div className="d-flex justify-content-center">
      <div className="card rounded-0 border-0 shadow-lg mt-3" style={{ height: "220px", width: "90%" }}>

        <div className="card-body">
          <h5 className="card-title">{user?.fullName ? <>{user?.fullName}</> : <></>}</h5>
        </div>
        <ul className="list-group">
          {
            userState && userState.address1
              ? <li className="list-group-item list-group-item-dark">{userState.address1}</li>
              : <li className="list-group-item list-group-item-dark">Address empty</li>

          }

          {
            userState && userState.state && userState.city
              ? <li className="list-group-item">{userState.city}, {userState.state}</li>
              : <li className="list-group-item">State or city empty</li>
          }
          {user && user.primaryEmailAddress ?
            <li className="list-group-item list-group-item-dark">{
              `${user?.primaryEmailAddress}`
            }</li>
            : <li className="list-group-item list-group-item-dark">Email Address empty</li>}


          {userState && userState.phoneNumber
            ? <li className="list-group-item">0{userState.phoneNumber}</li>
            : <li className="list-group-item"> Phone Number empty</li>
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