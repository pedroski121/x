import ProductDetailsCss from '../ProductDetails.module.css';

const Headline = () => {
    return (
        <>
            <h1 className={`fw-bolder ${ProductDetailsCss.increase_heading_fontsize}`}>NIKE AIR MAX AP</h1>
            <div className='d-flex justify-content-between'>
                <p className='display-6'>₦16,500</p>
                <span><i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                    <i className="bi bi-star" />
                </span>
            </div>
        </>
    )
}

export { Headline }