import { useState, useEffect } from 'react';
import itemService from '../../services/itemService.js';
import styles from './Catalog.module.css'

import Products from './Products.js';

function Catalog() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    itemService.getAll()
      .then((data) => {
        setItems(data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className="wrapper row2">
      <div className={styles.main} className="hoc container clear">
        <span><h4 className={styles.h4} >If you want to choose your wedding decorations and your wedding flowers and bouquets, you are welcome!</h4></span>
        <Products items={items} />
      </div>
    </div>
  );
}
export default Catalog;
