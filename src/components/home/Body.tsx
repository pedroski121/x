
import { EvenRow, OddRow } from './body-components'
const Body = () => {
    return <>
        <OddRow />
        <div className='row'>
            <p>product card goes here</p>
        </div>
        <EvenRow />
    </>
}

export { Body }