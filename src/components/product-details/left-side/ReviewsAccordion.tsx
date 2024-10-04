import ProductDetailsCss from '../ProductDetails.module.css';

type IReviewAccordion = {
    reviews?: { userID?: string; review?: string; date?: string }[]
}

const ReviewsAccordion = (props: IReviewAccordion) => {

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
                        No reviews yet
                        {

                            props.reviews?.map((review) => {

                                return <p key={review.review}>review 1</p>
                            })

                        }

                    </div>
                </div>
            </div>
        </>
    )
}
export { ReviewsAccordion }