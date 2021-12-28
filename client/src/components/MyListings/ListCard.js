import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext.js';
import styles from './ListCard.module.css'

function ItemCard({ item }) {
  const price = Number(item.price).toFixed(2);
  const { productsItem } = useContext(AuthContext);

  function productHandler() {
    productsItem(item._id);
  }

  return (
    <div className={styles.div}>
      <figure><img src={item.image} alt="" />
        <figcaption className={styles.content}>
          <p className={styles.title}>{item.title}</p>
          <p>Price: $ {price}</p>
          <Link to={`/details/${item._id}`} className="btn inverse" className={styles.btnDetails} > Details </Link>
          </figcaption>
      </figure>
    </div>
  )
}
export default ItemCard;