import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { items } from '../../../services/api.js';
import itemService from '../../../services/itemService.js';
import styles from './EditItem.module.css'

function EditItem() {
  const navigate = useNavigate();
  const itemId = useParams();
  const [item, setItem] = useState(itemId);

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

    itemService.edit(itemId,itemData)
    .then(()=> {
      navigate('/details/')
    })


  }
  return (
    <section className={styles.container}>
      <div>
        <h2 >Edit Item</h2>
        <form method="POST" className={styles.label} onSubmit={submitHandler} >
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" defaultValue={item.title} placeholder="Giant rose decor ..." size="22" />
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