import { useEffect, useState} from 'react';

import { getAllReviews } from '../services/reviewService.js';

export function useStateReviews() {
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

    return reviews;
}