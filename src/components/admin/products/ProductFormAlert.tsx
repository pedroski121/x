import { SetStateAction, Dispatch } from "react"

export const ProductFormAlert = ({ addState, setShowAlert }: { addState: boolean, setShowAlert:Dispatch<SetStateAction<boolean>>; }) => {

    return (
      <div className={`alert ${addState ? 'alert-success' : 'alert-danger'} alert-dismissible fade show mt-2`} id={"scrollTo"}>
        <button type="button" className="btn-close" data-bs-dismiss="alert" onClick={()=>setShowAlert(false)}></button>
      {addState 
       ? <p><span className="fw-bold"> Success! </span> Added </p>
       : <p><span className="fw-bold"> Failure! </span> Not Added </p>} 
      </div>
    )
  }