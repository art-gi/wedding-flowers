import { Link } from 'react-router-dom';

import styles from './ItemCard.module.css'

function ItemCard({ item }) {
  const price = Number(item.price).toFixed(2);
  return (
    <div className={styles.div}>
      <figure><img src={item.image} alt="" />
        <figcaption>
          <h3 className="heading">{item.title}</h3>
          <p>Price: $ {price}</p>
        </figcaption>

        <div className={styles.buttons}>
          <div><Link to="" className=" btn inverse" > Get it now </Link></div>
          <Link to={`/details/${item._id}`} className="btn inverse" className={styles.btnDetails} > DETAILS </Link>
          <Link to="" className="btn inverse" className={styles.btnReview} > / Write a review /</Link>
        </div>
      </figure>
    </div>
  )
}
export default ItemCard;