import Image from "next/legacy/image";


const ProductCarousal = (props: { imgURLs: string[] }) => {
    return (<>
        <div id="carouseIndicators" className="carousel slide carousel-fade " data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouseIndicators" data-bs-slide-to={0} className="active" aria-label="Slide 1"></button>
                {
                    props.imgURLs.map((url, index) => {
                        if (index != 0) {
                            return (
                                <button key={index} data-bs-target="#carouseIndicators" data-bs-slide-to={index} aria-label={`Slide ${index}`}></button>
                            )
                        }
                    })
                }
            </div>
            <div className={`carousel-inner`}>
                {props.imgURLs?.map((url, index) => {
                    return (

                        <div key={index} className={`carousel-item ${index == 0 ? 'active' : ''}`}>
                            <Image src={url} alt='...' width={300} height={200} layout="responsive" objectFit="cover" />
                        </div>

                    )
                })
                }


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