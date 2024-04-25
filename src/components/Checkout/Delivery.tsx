import { useFetch } from "@hooks/general/useFetch";
import { useState } from "react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { BorderSpinner } from "@components/general/spinners";
import { ILogisticsCompanyLocation } from '@lib/types/checkout'


const Delivery = () => {
    const [id, setID] = useState<string>('')
    const [state, setState] = useState<string>('Abia')
    const [nextButtonLoading, setNextButtonLoading] = useState<boolean>(false)
    const [noStationSelectedError, setnoStationSelectedError] = useState<boolean>(false)
    const { data, error, isLoading } = useFetch<ILogisticsCompanyLocation[]>(`/api/logistics-company-locations/${state}`)
    const router = useRouter()

    const beforeNavigateToReview = useCallback(() => {
        setNextButtonLoading(true)
        sessionStorage.setItem('pick_up_station_id', id)
        if (!sessionStorage.getItem('pick_up_station_id') || sessionStorage.getItem('pick_up_station_id')?.length === 0) {
            setnoStationSelectedError(true)
            setNextButtonLoading(false)

        } else {
            router.push('/checkout/review')
        }
    }, [id])
    return <>
        <section className="container">
            <div>
                <div className="d-flex flex-column">
                    <h2 className="fs-5 mt-4">Select a Pick-up station</h2>
                    <div className="alert alert-danger alert-dismissible fade show mt-1 " role="alert">
                        <strong>Coming Soon!</strong> Other delivery options
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    {
                        noStationSelectedError
                            ? <div className="alert alert-danger alert-dismissible fade show mt-1 " role="alert">
                                <strong>No pick-up station</strong> selected
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            : <></>
                    }

                </div>
            </div>
            <form>
                <select onChange={e => setState(e.target.value)} className="form-select shadow-none border border-dark" aria-label="Default select example">
                    <option value="Abia" >Abia</option>
                    <option value="Adamawa">Adamawa</option>
                    <option value="Akwa Ibom">Akwa Ibom</option>
                    <option value="Anambra">Anambra</option>
                    <option value="Bauchi">Bauchi</option>
                    <option value="Bayelsa">Bayelsa</option>
                    <option value="Benue">Benue</option>
                    <option value="Borno">Borno</option>
                    <option value="Cross River">Cross River</option>
                    <option value="Delta">Delta</option>
                    <option value="Ebonyi">Ebonyi</option>
                    <option value="Edo">Edo</option>
                    <option value="Ekiti">Ekiti</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Gombe">Gombe</option>
                    <option value="Imo">Imo</option>
                    <option value="Jigawa">Jigawa</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Kano">Kano</option>
                    <option value="Katsina">Katsina</option>
                    <option value="Kebbi">Kebbi</option>
                    <option value="Kogi">Kogi</option>
                    <option value="Kwara">Kwara</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Nasarawa">Nasarawa</option>
                    <option value="Niger">Niger</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Ondo">Ondo</option>
                    <option value="Osun">Osun</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Plateau">Plateau</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Sokoto">Sokoto</option>
                    <option value="Taraba">Taraba</option>
                    <option value="Yobe">Yobe</option>
                    <option value="Zamfara">Zamfara</option>

                </select>


            </form>
            <div className="mt-4">
                <h3 className="fs-5">Stations</h3>
                {isLoading ? <BorderSpinner size={false} /> : error ? <p className="text-center fw-bold">Error Fetching Available Stations</p> : <div className="list-group" style={{ height: "400px", overflowY: "scroll" }}>
                    {
                        data?.length === 0 ?
                            <p className="fs-6 text-center">No available station in this state. Please pick another state </p>
                            : data?.map((station) => {
                                return <a href="#" key={station._id} className={`list-group-item list-group-item-dark list-group-item-action border border-secondary ${id === station._id ? 'active' : ''}`} onClick={() => setID(station._id)} aria-current="true">
                                    <div className="d-flex w-100 flex-column">
                                        <h5 className="mb-1">{station.logisticsCompany}</h5>
                                        <p>{station.address}</p>
                                        <span>{station.city}, {station.state} state</span>
                                    </div>
                                </a>
                            })
                    }
                </div>
                }
            </div>
            <section className="mt-4">

            </section>
            <div className="text-end">
                <button className={`btn btn-dark mt-4 ${data?.length === 0 ? 'disabled' : ''}`} onClick={beforeNavigateToReview}>
                    Next {nextButtonLoading ? <span className="spinner-border spinner-border-sm "></span> : <></>}  </button>
            </div>
        </section>
    </>
}

export default Delivery