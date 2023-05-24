export const starArray = (rating: number) => {

    const filledStars = Math.floor(rating); // Number of filled stars
    const hasHalfStar = rating % 1 !== 0; // Check if there is a half star


    const stars = [];

    // Render filled stars
    for (let i = 0; i < filledStars; i++) {
        stars.push(<i key={i} className="bi bi-star-fill" />);
    }

    // Render half star if applicable
    if (hasHalfStar) {
        stars.push(<i key="half" className="bi bi-star-half" />);
    }

    // Render empty stars
    const remainingStars = 5 - filledStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
        stars.push(<i key={`#${i}`} className="bi bi-star" />);
    }

    return stars;

}