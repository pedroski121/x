import { useState, useEffect, useContext } from "react"
import { FormEvent } from "react"
import { CurrentUserContext } from "@contexts/CurrentUserContext"
import { axiosInstance } from "@utils/axiosInstance"
import { AxiosError } from "axios"
import { TResponse } from "@lib/types/response"
export const EditForm = () =>{
    const {userState} = useContext(CurrentUserContext)

    const [phoneNumber, setPhoneNumber] = useState<number>()
    const [additionalPhoneNumber, setAdditionalPhoneNumber] = useState<number>()
    const [address, setAddress] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [state, setState] = useState<string>('')   
    
    
    const onEditFormRender = () => {
        const {phoneNumber, additionalPhoneNumber, state, city} = userState
        phoneNumber && setPhoneNumber(phoneNumber)
        additionalPhoneNumber && setAdditionalPhoneNumber(additionalPhoneNumber)
        state && setState(state)
        city && setCity(city)
    }

    const editFormSubmit = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
    
        await axiosInstance.patch(`/api/user/${userState._id}/update-details`, {
            phoneNumber, 
            additionalPhoneNumber, 
            state, 
            city 
        }, {withCredentials:true})
        .catch((err:AxiosError<TResponse[]>)=>{
            console.log(err.response?.data[0].message)
        })
    }
    useEffect(()=>{
        onEditFormRender()
    }, [])

    return <>
<form className="row justify-content-center p-4" onSubmit={editFormSubmit} method="POST">
  <div className="col-12 col-md-6 mt-2">
  <label htmlFor="phoneNumber" className="form-label m-0 fw-bold m-0">Phone Number<sup>*</sup></label>
 <div className="input-group">
  <span className="input-group-text bg-dark text-light fw-bold">+234</span>
  <input type="number" value={phoneNumber} onChange={e=>setPhoneNumber(Number(e.target.value))} min={0} className="form-control shadow-none border border-secondary" aria-label="Phone Number"/>
</div>
  </div>
  <div className="col-12 col-md-6 mt-2">
  <label htmlFor="additionalPhoneNumber" className="form-label m-0 fw-bold m-0">Additional Phone Number</label>
  <div className="input-group">
  <span className="input-group-text bg-dark text-light fw-bold">+234</span>
  <input type="number" min={0} value={additionalPhoneNumber} onChange={e=>setAdditionalPhoneNumber(Number(e.target.value))} className="form-control shadow-none border border-secondary" aria-label="Additional Phone Number"/>
</div>
  </div>

  <div className="col-12 mt-2">
    <label htmlFor="address" className="form-label m-0 fw-bold m-0  ">Address<sup>*</sup></label>
    <input type="text" value={address} onChange={e=>setAddress(e.target.value)} className="form-control shadow-none border border-secondary p-0 px-2 py-1 rounded-1" id="address" placeholder="No 23, X street"/>
  </div>

  <div className="col-md-6 mt-2">
    <label htmlFor="inputState" className="form-label m-0 fw-bold m-0">State<sup>*</sup></label>
    <select id="inputState" value={state} onChange={e=>setState(e.target.value)} className="form-select shadow-none border border-secondary rounded-1">
      <option defaultValue={'Choose'} disabled>Choose</option>
      <option>Abia</option>
      <option>Adamawa</option>

    </select>
  </div>
  <div className="col-md-6 mt-2">
    <label htmlFor="city" className="form-label m-0 fw-bold m-0">City<sup>*</sup></label>
    <select id="city" value={city} onChange={e=>setCity(e.target.value)} className="form-select shadow-none border border-secondary rounded-1">
      <option defaultValue={'Please Select'} disabled> Please Select</option>
      <option value="arochukwu">Arochukwu</option>
      <option value="umuahia">Umuahia</option>

    </select>
  </div>


  <div className="col-12 mt-3 text-end">
    <button type="submit" className="btn btn-outline-dark p-0 px-4 py-1">Save</button>
  </div>
</form>
    </>
}

