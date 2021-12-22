
import {ReviewCard} from './ReviewCard.js';
import styles from './Review.module.css'

function Review({ values }) {
  const showHeader = (
    <h3 className={styles.header} >No Reviews</h3>
    )
  return (
    <section id="testimonials" className="hoc clear">
      {values?.lengts > 0
        ? (
          <ul>
            {values.map(x => <ReviewCard key={x._id} item={x} />)}
          </ul>
        )
        : showHeader
      }

    </section>
  );
}
export default Review;