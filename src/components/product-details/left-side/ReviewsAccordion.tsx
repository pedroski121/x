import ProductDetailsCss from '../ProductDetails.module.css';

const ReviewsAccordion = () => {
    return (
        <>
            <div className="accordion-item mt-2">
                <h2 className="accordion-header" id="headingThree">
                    <button className={`accordion-button ${ProductDetailsCss.accordion_modifier} text-dark border border-dark collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        REVIEWS
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className={`accordion-body ${ProductDetailsCss.accordion_container} overflow-auto`}>

                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In saepe doloremque reprehenderit ipsa quo totam quia quisquam quos aliquid obcaecati fugit eum, officia, eius distinctio expedita minus repellat mollitia assumenda.
                    </div>
                </div>
            </div>
        </>
    )
}
export { ReviewsAccordion }