
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './EditReview.module.css'
import { AuthContext } from './../../context/AuthContext.js'
import { getOneReview, editReview } from './../../services/reviewService.js';


function EditReview() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const {itemId} = useParams();
    const [review, setReview] = useState([]);
console.log(review._itemId)
    useEffect(() => {
        getOneReview(itemId)
            .then((data) => {
                setReview(data)
            })
    }, []);

    function submitHandler(e) {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const name = data.get('name');
        const review = data.get('review');
        const email = data.get('email');
        const _ownerId = review._ownerId;
        const _itemId = review._itemId;
    

       const reviewData = {
            _ownerId,
            name,
            email,
            review,
            _itemId
            
        }

        editReview(itemId, reviewData, user.accessToken)
            .then(() => {
                navigate('/my-reviews');
            })


    }
    return (
        <section className={styles.container}>
            <div>
                <h2 >Edit Review</h2>
                <form method="POST" className={styles.label} onSubmit={submitHandler} >
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" defaultValue={review.name} placeholder="Emy" size="22" />
                    </div>
                    <div >
                        <label htmlFor="email">Email</label>
                        <input name="email" defaultValue={review.email} placeholder="emy@abv.bg" size="22" />
                    </div>
                    <div >
                        <label htmlFor="content">Content</label>
                        <input type="text" name="review" defaultValue={review.review} placeholder="Amazing service!" size="22" />
                    </div>
                    <div >
                        <input type="submit" name="submit" value="Edit" className={styles.btn} />
                    </div>
                </form>
            </div>
        </section>
    );
}
export default EditReview;