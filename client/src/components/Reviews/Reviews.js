import { useState, useEffect } from 'react';
import Review from './Review.js'

import { getAllReviews } from './../../services/reviewService.js'

function Reviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getAllReviews()
            .then((data) => {
                setReviews(data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    
    return (
        <div className="wrapper bgded">
            {<Review values={Object.values(reviews)} />};
        </div>
    );
}
export default Reviews;