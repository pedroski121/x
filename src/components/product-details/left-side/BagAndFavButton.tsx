import ProductDetailsCss from '../ProductDetails.module.css';


const BagAndFavoriteButton = () => {
    return (
        <>
            <div className={`d-grid p-0 ${ProductDetailsCss.button_height_increase}`}>
                <button className="btn btn-dark rounded-0" type="button">Add to Bag</button>
                <button className="btn btn-secondary rounded-0" type="button">Favorite</button>
            </div>
        </>
    )
}

export { BagAndFavoriteButton }