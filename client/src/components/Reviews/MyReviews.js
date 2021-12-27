
import { useContext, useEffect, useReducer, useState } from 'react';
import { AuthContext } from '../../context/AuthContext.js';

import { getAllReviews } from '../../services/reviewService.js';
import ReviewCard from './ReviewCard.js'
import styles from './MyReviews.module.css'

function MyReviews() {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getAllReviews()
            .then((result) => {
                let myReviews = result.filter(x => x._ownerId == user._id);
                setReviews(myReviews)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const showHeader = (
        <h3 className={styles.header} >No Reviews</h3>
    )

    return (
        <div className="wrapper bgded">
            <div id="comments">
                {reviews?.lengts <= 0
                    ? showHeader
                    : (<span className={styles.container}>
                        {
                        reviews.map(x => <ReviewCard key={x._id} info={x} />)
                        }
                    </span>
                    )
                }
            </div>
        </div>
    );
}
export default MyReviews;