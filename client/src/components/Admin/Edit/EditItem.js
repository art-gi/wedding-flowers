import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import itemService from '../../../services/itemService.js';
import styles from './EditItem.module.css'
import {AuthContext} from './../../../context/AuthContext.js'

const notes = {
  title: ((title, setErrors) => title.length > 70 ? setErrors((oldState) => [...oldState, 'Title must be up to 70 characters']) : null),
  quantity: (quantity, setErrors) => {
    if ((Number(quantity) < 1) || (Number(quantity) > 10)) {
      setErrors((oldState) => [...oldState, 'Quantity must be number from 1 to 10!']);
    }
  },
  image: ((image, setErrors) => image.match(/^https*:\/\/.+/g) ? null : setErrors((oldState) => [...oldState, 'Enter valid url!'])),
  price: ((price, setErrors) => !(Number(price)) ? null : setErrors((oldState) => [...oldState, 'Price must be number!']))

}

function EditItem() {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const itemId = useParams();
  const [item, setItem] = useState([]);
  const [errors, setErrors] = useState([]);

  function inputsHandler(e) {
    let name = e.target.name;
    let value = e.target.value;
  
    if (notes.hasOwnProperty(name)) {
      notes[name](value, setErrors);
  
    }
  
    if (errors.length > 0) {
      console.log(errors)
      alert(errors.join('\n'));
      setErrors([]);
      return;
    }
  }  

  useEffect(() => {
    itemService.getOne(Object.values(itemId)[0])
      .then((data) => {
        setItem(data)
      })
  }, []);

  function submitHandler(e) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    let title = data.get('title');
    let image = data.get('image');
    let description = data.get('description');
    let quantity = data.get('quantity');
    let price = data.get('price');

    price = Number(price);

    const itemData = {
      title,
      description,
      quantity,
      image,
      price
    }
    if (Object.values(itemData).some(x => x === '')) {
      alert('All filds must be fill!')
      return;
    }
    itemService.edit(item._id, itemData, user.accessToken)
      .then(() => {
        navigate('/catalog')
      }).catch((error) => {
        console.log(error);
      });


  }
  return (
    <section className={styles.container}>
      <div>
        <h2 >Edit Item</h2>
        <form method="POST" className={styles.label} onSubmit={submitHandler} onBlur={inputsHandler} >
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" defaultValue={item.title} size="22" />
          </div>
          <div >
            <label htmlFor="email">Description</label>
            <input name="description" defaultValue={item.description} placeholder="Colors: red and white, Size: ..." size="22" />
          </div>
          <div >
            <label htmlFor="quantity">Type</label>
            <input type="text" name="quantity" defaultValue={item.quantity} placeholder="1" size="22" />
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