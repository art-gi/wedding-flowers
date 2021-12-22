import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import itemService from '../../../services/itemService.js';
import styles from './EditItem.module.css'
import {AuthContext} from './../../../context/AuthContext.js'

function EditItem() {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const itemId = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    itemService.getOne(Object.values(itemId)[0])
      .then((data) => {
        console.log(data)
        setItem(data)
      })
  }, []);

  function submitHandler(e) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    let title = data.get('title');
    let image = data.get('image');
    let description = data.get('description');
    let category = data.get('category');
    let price = data.get('price');

    price = Number(price);

    const itemData = {
      title,
      description,
      category,
      image,
      price
    }
  
    itemService.edit(item._id, itemData, user.accessToken)
      .then(() => {
        navigate('/catalog')
      })


  }
  return (
    <section className={styles.container}>
      <div>
        <h2 >Edit Item</h2>
        <form method="POST" className={styles.label} onSubmit={submitHandler} >
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" defaultValue={item.title} size="22" />
          </div>
          <div >
            <label htmlFor="email">Description</label>
            <input name="description" defaultValue={item.description} placeholder="Colors: red and white, Size: ..." size="22" />
          </div>
          <div >
            <label htmlFor="category">Type</label>
            <input type="text" name="category" defaultValue={item.category} placeholder="paper flowers" size="22" />
          </div>
          <div >
            <label htmlFor="imageUrl">Image Url</label>
            <input type="text" name="image" defaultValue={item.image} placeholder="http://..." size="22" />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input type="text" name="price" defaultValue={item.price} placeholder="25.75" size="22" />
          </div>
          <div >
            <input type="submit" name="submit" value="Edit" className={styles.btn} />
          </div>
        </form>
      </div>
    </section>
  );
}
export default EditItem;