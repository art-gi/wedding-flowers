import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext.js';
import styles from './ItemCard.module.css'

function ItemCard({ item }) {
  const price = Number(item.price).toFixed(2);
  const { user, productsItem } = useContext(AuthContext);

  function productHandler() {
    productsItem(item._id);
  }

  return (
    <div className={styles.div}>
      <figure><img src={item.image} alt="" />
        <figcaption>
          <h3 className="heading">{item.title}</h3>
          <p>Price: $ {price}</p>
        </figcaption>

        <div className={styles.buttons}>
          <div><Link to="#" className=" btn inverse" onClick={productHandler} > Get it now </Link></div>
          <Link to={`/details/${item._id}`} className="btn inverse" className={styles.btnDetails} > DETAILS </Link>
        </div>
      </figure>
    </div>
  )
}
export default ItemCard;