import ProductDetailsCss from '../ProductDetails.module.css';

const SpecAccordion = () => {
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
                        Nike sneakers are a style icon,
                        With designs that are truly iconic.
                        Their comfort and support are second to none,
                        Making them perfect for everyone.

                        From athletes to fashionistas,
                        Nike sneakers are loved by all kinds of personas.
                        They're durable and built to last,
                        And they'll keep you comfortable all day, no matter how fast.

                        With a range of colors and styles to choose from,
                        There's a Nike sneaker for everyone.
                        From classic Air Jordans to the latest Flyknits,
                        These sneakers are the epitome of fashion hits.

                        Their quality is top-notch,
                        And they're built to take a lot.
                        You'll wear them for years to come,
                        And they'll still look great when you're done.

                        So if you're looking for sneakers that are cool and comfy,
                        Just slip on a pair of Nike, and you'll see.
                        They're the best of the best, there's no denying,
                        Nike sneakers are simply worth buying!




                    </div>
                </div>
            </div>
        </>
    )
}

export { SpecAccordion }