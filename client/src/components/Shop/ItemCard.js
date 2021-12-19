import { Link } from 'react-router-dom';

import styles from './ItemCard.module.css'

function ItemCard({ item }) {
  const price = Number(item.price).toFixed(2);
  return (
    <div className={styles.div}>
      <figure><img src={item.image} alt="" />
        <figcaption><strong><h3 className="heading">{item.title}</h3> </strong></figcaption>
      <span>Price: $ {price}</span>
      <div className={styles.buttons}>
        <Link to="/details"> <input className={styles.btnDetails} type="button" value="Details" /></Link>
        <Link to="/my-products"> <input className={styles.btnGet} type="button" value="Get It" /></Link>
        <Link to="/create-review"> <input className={styles.btnReview} type="button" value="Create Review" /></Link>
      </div>
      </figure>
    </div>
  )
}
export default ItemCard;