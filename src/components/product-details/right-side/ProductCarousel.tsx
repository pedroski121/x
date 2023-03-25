import Image from "next/legacy/image"

const ProductCarousal = () => {
    return (<>

        <div id="carouseIndicators" className="carousel slide carousel-fade " data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouseIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouseIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouseIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className={`carousel-inner`}>
                <div className={`carousel-item active`}>
                    <Image src="/men/watches.jpg" alt='...' width={300} height={200} layout="responsive" objectFit="cover" />
                </div>
                <div className={`carousel-item`}>
                    <Image src="/women/african-women.jpg" alt='...' width={300} height={200} layout="responsive" objectFit="cover" />
                </div>
                <div className={`carousel-item  `}>
                    <Image src="/men/all.jpg" alt='...' width={300} height={200} layout="responsive" objectFit="cover" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouseIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouseIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>


    </>)
}

export { ProductCarousal }