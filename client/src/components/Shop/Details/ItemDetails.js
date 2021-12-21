import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

import styles from './ItemDetails.module.css';
import { AuthContext } from '../../../context/AuthContext.js';
import itemService from '../../../services/itemService.js';
import { items } from '../../../services/api.js';

function ItemDetails() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        itemService.getOne(itemId)
            .then((data) => {
                console.log(data)
                setItem(data)
            })
    }, [itemId]);

    function removeHandler(id) {
        itemService.remove(id, user.accessToken)
        .then(() => {
            navigate('/catalog')
        })
    }

    const ownerButton = (
        <>
            <Link className="btn inverse" to="/edit/itemId" >Edit</Link>
            <a className="btn inverse" href="#" onClick={removeHandler} >Delete</a>
        </>
    )
    return (
        <div className="bgded overlay" >
            <section className="hoc container clear">
                <article className={styles.container}>
                    <h5>Category: {item.category} </h5>
                    <img className={styles.img} src={item.image} />
                    <p>Description: {item.description}</p>
                    <ul>
                        <div >
                            {user._id === item._ownerId
                                ? ownerButton
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
/* <li>
                        <figure className="clear"> <img src={item.image} alt="" />
                            <figcaption>
                                <h3 className="heading">Category: {item.category}</h3>
                            </figcaption>
                        </figure>
                    </li>
                    <li><p>Description: {item.description}</p></li>
                    <li>
                        <div >
                            {user
                                ? ownerButton
                                : ''
                            }
                        </div>
                    </li>
                </ul>
            </div> */


