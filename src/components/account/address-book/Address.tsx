import Link from "next/link"

export const Address = () =>{
    return (<>
              <div className="d-flex justify-content-center">
        <div className="card rounded-0 border-0 shadow-lg mt-3" style={{height:"220px", width:"90%"}}>

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
<Link href={'/account/address-book/edit'}>
<button className="btn btn-outline-dark rounded-5 p-0 border border-0 px-2 py-1"><i className="bi bi-pencil"></i></button>
</Link>
</div>
            </div>
            </div>
    </>)
}