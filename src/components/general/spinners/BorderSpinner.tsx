import Spinners from './Spinners.module.css'
const BorderSpinner = () => {
    return (<div className={`d-flex justify-content-center align-items-center ${Spinners.border_spinner_sizing}`}>
        <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>)
}

export { BorderSpinner }