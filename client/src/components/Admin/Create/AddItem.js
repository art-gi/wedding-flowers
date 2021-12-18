import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import styles from './AddItem.module.css'
import itemService from '../../../services/itemService.js';
import { AuthContext } from '../../../context/AuthContext.js';

function AddItem() {
  const navigate = (useNavigate())
  const {user} = useContext(AuthContext);
  console.log(user)
  function createHandler(e) {
    e.preventDefault();

    let data = new FormData(e.currentTarget);
    let title = data.get('title');
    let description = data.get('description');
    let type = data.get('type');
    let image = data.get('image');
    let price = data.get('price');
    
    price = Number(price);

    let itemData = {title, description, type, image, price}
    
    itemService.create(itemData)
    .then((data) => {
      console.log(data)
      navigate('/');
    }).catch((error) => {
      console.log(error);
    })
}
  return (
    <section className={styles.container}>
       <div>
      <h2 >Add New Item</h2>
      <form className={styles.label} method="POST" onSubmit={createHandler}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title"  placeholder="Giant rose decor ..."size="22" />
        </div>
        <div >
          <label htmlFor="email">Description</label>
          <input name="description" placeholder="Colors: red and white, Size: ..." size="22" />
        </div>
        <div >
          <label htmlFor="type">Type</label>
          <input type="text" name="type" placeholder="paper flowers" size="22" />
        </div>
        <div >
          <label htmlFor="imageUrl">Image Url</label>
          <input type="text" name="image" placeholder="http://..." size="22" />
        </div>
        <div>
          <label htmlFor="price">Price in $</label>
          <input type="text" name="price" placeholder="25.99" size="22" />
        </div>
        <div >
          <input type="submit" name="submit" value="Add" className={styles.btn} />
        </div>
      </form>
      </div>
    </section>
  );
}
export default AddItem;