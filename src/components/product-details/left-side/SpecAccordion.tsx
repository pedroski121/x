import ProductDetailsCss from '../ProductDetails.module.css';

const SpecAccordion = (props: { specification: string }) => {
    return (
        <>
            <div className={`accordion-item`}>
                <h2 className={`accordion-header `} id="headingOne">
                    <button className={`accordion-button ${ProductDetailsCss.accordion_modifier} text-dark border border-dark collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        SPECIFICATION
                    </button>
                </h2>

                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionFlushExample" >
                    <div className={`accordion-body ${ProductDetailsCss.accordion_container} overflow-auto`} >
                        {props.specification}
                    </div>
                </div>
            </div>
        </>
    )
}

export { SpecAccordion }