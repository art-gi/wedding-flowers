
import { useStateReviews } from './../../hooks/useStateReviews.js';
import Card from './Card.js';
import styles from './Review.module.css';

function Review() {
  const reviews = useStateReviews();
  console.log(reviews)

  return (
    <div className="wrapper bgded">
      <div id="comments">
        {reviews?.lengts <= 0
          ? null
          : (<span className={styles.container}>
            {
              reviews.map(x => <Card key={x._id} info={x} />)
            }
          </span>
          )
        }
      </div>
    </div>
  );
}
export default Review;