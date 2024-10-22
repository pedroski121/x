
import { useEditForm } from "@hooks/account/edit/useEditForm"
import { statesAndCities } from "@lib/statesAndCities"
import { v4 as uuidv4 } from 'uuid'

export const EditForm = () => {
  const { editFormSubmit, phoneNumber, setPhoneNumber, phoneNumberErrorMsg, additionalPhoneNumberErrorMsg, address1ErrorMsg, setAdditionalPhoneNumber,
    additionalPhoneNumber, address1, setAddress1, setState, state, stateErrorMsg, city, cityErrorMsg, saving, setCity, notSaved } = useEditForm()


  return <>
    <form className="row justify-content-center p-4" onSubmit={editFormSubmit} method="POST">
      <div className="col-12 col-md-6 mt-2">
        <label htmlFor="phoneNumber" className="form-label m-0 fw-bold m-0">Phone Number<sup>*</sup></label>
        <div className="input-group">
          <span className="input-group-text bg-dark text-light fw-bold">+234</span>
          <input type="number" value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value ? parseInt(e.target.value) : 0)} min={0}
            className={`form-control shadow-none ${phoneNumberErrorMsg ? 'is-invalid border border-danger' : 'border border-secondary'}`} aria-label="Phone Number" />
          <div className="invalid-feedback">
            {phoneNumberErrorMsg}
          </div>
        </div>``
      </div>
      <div className="col-12 col-md-6 mt-2">
        <label htmlFor="additionalPhoneNumber" className="form-label m-0 fw-bold m-0">Additional Phone Number</label>
        <div className="input-group">
          <span className="input-group-text bg-dark text-light fw-bold">+234</span>
          <input type="number" min={0} value={additionalPhoneNumber}
            onChange={e => setAdditionalPhoneNumber(e.target.value ? parseInt(e.target.value) : 0)}
            className={`form-control shadow-none ${additionalPhoneNumberErrorMsg ? 'is-invalid border border-danger' : 'border border-secondary'}`} aria-label="Additional Phone Number" />
          <div className="invalid-feedback">
            {additionalPhoneNumberErrorMsg}
          </div>
        </div>
      </div>

      <div className="col-12 mt-2">
        <label htmlFor="address" className="form-label m-0 fw-bold m-0  ">Address<sup>*</sup></label>
        <input type="text" value={address1} onChange={e => setAddress1(e.target.value)}
          className={`form-control shadow-none ${address1ErrorMsg ? 'is-invalid border border-danger' : 'border border-secondary'} p-0 px-2 py-1 rounded-1`} id="address" placeholder="No 23, X street" />
        <div className="invalid-feedback">
          {address1ErrorMsg}
        </div>
      </div>

      <div className="col-md-6 mt-2">
        <label htmlFor="inputState" className="form-label m-0 fw-bold m-0">State<sup>*</sup></label>
        <select id="inputState" value={state} onChange={e => setState(e.target.value)}
          className={`form-select shadow-none ${stateErrorMsg ? 'is-invalid border border-danger' : 'border border-secondary'} rounded-1`}>
          <option value='' disabled>Choose</option>
          {
            statesAndCities.map((stateCities) => {
              return <option key={uuidv4()}>{stateCities.state}</option>
            })
          }



        </select>
        <div className="invalid-feedback">
          {stateErrorMsg}
        </div>
      </div>
      <div className="col-md-6 mt-2">
        <label htmlFor="city" className="form-label m-0 fw-bold m-0">City<sup>*</sup></label>
        <select id="city" value={city} onChange={e => setCity(e.target.value)}
          className={`form-select shadow-none ${cityErrorMsg ? 'is-invalid border border-danger' : 'border border-secondary'} rounded-1`}>
          <option value='' disabled> Please Select </option>
          {
            state ? statesAndCities.find(statesCities => statesCities.state === state)?.cities.map((city) => {
              return <option key={uuidv4()}>{city}</option>
            }) : <></>

          }


        </select>
        <div className="invalid-feedback">
          {cityErrorMsg}
        </div>
      </div>


      <div className="col-12 mt-3 text-end">
        <button type="submit" className="btn btn-outline-dark p-0 rounded-0 px-4 py-1 mx-1">Save</button>
        <span className={saving ? 'spinner-border spinner-border-sm' : notSaved ? 'bi bi-x-circle-fill' : 'bi bi-check-circle-fill'}></span>

      </div>
    </form>
  </>
}

