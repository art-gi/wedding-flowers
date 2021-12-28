
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext.js';
import styles from './ItemCard.module.css'

function ItemCard({ item }) {
  const navigate = useNavigate();
  const price = Number(item.price).toFixed(2);
  const { user, addId, isAuthentificated } = useContext(AuthContext);
  console.log(item)
  console.log(user)

  function productHandler(e) {
    e.preventDefault();
    addId(item._id);
    alert('Your product has been added.');

  }

  return (
    <div className={styles.div}>
      <figure><img src={item.image} alt="" />
        <figcaption>
          <h3 className="heading">{item.title}</h3>
          <p>Price: $ {price}</p>
        </figcaption>
        <div className={styles.buttons}>
          {isAuthentificated(user) && user?._id !== item._ownerId 
            ? <div><Link to="#" className=" btn inverse" onClick={productHandler} > Get it now </Link></div>
            : ''

          }
          <Link to={`/details/${item._id}`} className="btn inverse" className={styles.btnDetails} > DETAILS </Link>
        </div>
      </figure>
    </div>
  )
}
export default ItemCard;