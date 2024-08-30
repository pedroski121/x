import Spinners from './Spinners.module.css'
import { FC } from 'react'
type TBorderSpinner = {
    size?: boolean;
    white?: boolean
}
const BorderSpinner: FC<TBorderSpinner> = ({ size, white }) => {
    return (<div className={`d-flex justify-content-center align-items-center ${size || size === undefined ? Spinners.border_spinner_sizing : ''}`}>
        <div className={`spinner-border ${white ? 'text-light' : 'text-dark'}`} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>)
}

export { BorderSpinner }