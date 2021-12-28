import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import styles from './AddItem.module.css'
import itemService from '../../../services/itemService.js';
import { AuthContext } from '../../../context/AuthContext.js';

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

function AddItem() {

  const navigate = useNavigate()
  const { user } = useContext(AuthContext);
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
  function createHandler(e) {
    e.preventDefault();

    let data = new FormData(e.currentTarget);
    let title = data.get('title');
    let description = data.get('description');
    let quantity = data.get('quantity');
    let image = data.get('image');
    let price = data.get('price');


    let itemData = { title, description, quantity, image, price }

    if (Object.values(itemData).some(x => x === '')) {
      alert('All filds must be fill!')
      return;
    }
    itemService.create(itemData, user.accessToken)
      .then((data) => {
        navigate('/catalog ');
      }).catch((error) => {
        console.log(error);
      });

  }

  return (
    <section className={styles.container}>
      <div>
        <h2 >Add New Listing</h2>

        <form className={styles.label} method="POST" onSubmit={createHandler} onBlur={inputsHandler}>
          <div>
            <label htmlFor="title">Title must be up to 70 characters<span>*</span></label>
            <input type="text" name="title" placeholder="Giant rose decor ..." />
          </div>

          <div >
            <label htmlFor="Description">Description <span>*</span></label>
            <textarea name="description" placeholder="Colors: red and white, Size: ..." />
          </div>

          <div >
            <label htmlFor="quantity">Quantity must be number from 1 to 10<span>*</span></label>
            <input type="text" name="quantity" placeholder="1" />
          </div>

          <div >
            <label htmlFor="imageUrl">Enter url<span>*</span></label>
            <input type="text" name="image" placeholder="http://..." />
          </div>

          <div>
            <label htmlFor="price">Price must be number<span>*</span></label>
            <input type="text" name="price" placeholder="25.99" />
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