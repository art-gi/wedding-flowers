import { useStateReviews } from './../../hooks/useStateReviews.js';

import ReviewCard from './ReviewCard.js'
import styles from './Reviews.module.css'

function Reviews() {
    const reviews = useStateReviews();
    console.log(reviews);
    const showHeader = (
        <h3 className={styles.header} >No Reviews</h3>
    )

    return (
        <div className="wrapper bgded">
            <section className={styles.container}>
                {reviews?.lengts <= 0
                    ? showHeader
                    : (<span className={styles.content}>
                        {reviews.map(x => <ReviewCard key={x._id} info={x} />)}
                    </span>
                    )
                }
            </section>
        </div>
    );
}
export default Reviews;