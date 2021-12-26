import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

import styles from './ItemDetails.module.css';
import { AuthContext } from '../../../context/AuthContext.js';
import itemService from '../../../services/itemService.js';
import Reviews from './../../Reviews/Reviews.js';

function ItemDetails() {
    const navigate = useNavigate();
    const { user, productsId, productsItem } = useContext(AuthContext);
    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        itemService.getOne(itemId)
            .then((data) => {
                setItem(data)
            })
    }, []);

    function productHandler() {
        console.log(productsItem(item._id));

    }

    function removeHandler(e) {
        e.preventDefault();
      
        itemService.remove(itemId, user.accessToken)
            .then(() => {
                navigate('/catalog')
            })
    }

    const ownerBtn = (
        <>
            <Link className="btn inverse" to={`/edit/${item._id}`} >Edit</Link>
            <Link className="btn inverse" to="#" onClick={removeHandler} >Delete</Link>
            <Link to={`/add-review/${item._id}`} className="btn inverse" className={styles.btnReview} > / Write a review /</Link>
        </>

    )
    const userBtn = (
        <div><Link to="#" className=" btn inverse" onClick={productHandler} > Get it now </Link></div>
    )

    return (
        <div className="bgded overlay" >
            <section className="hoc container clear">
                <article className={styles.container}>
                    <img className={styles.img} src={item.image} />
                    <p>Description: {item.description}</p>
                    <h7>Quantity: {item.quantity} </h7>
                    <ul>
                        <div >
                            {item?._ownerId === user._id
                                ? ownerBtn
                                : ''
                            }
                        </div>
                    </ul>
                </article>
            </section>
        </div>
    );
}
export default ItemDetails;



