
import RCard from './RCard.js';
import styles from './Review.module.css'

function Review({ values }) {
  const showHeader = (
    <h3 className={styles.header} >No Reviews</h3>
  )
  return (
    <section id="testimonials" className="hoc clear">
      {values?.lengts <= 0
        ? showHeader
        : (<>
          {values.map(x => <RCard key={x._id} info={x} />)}
        </>
        )
      }

    </section>
  );
}
export default Review;