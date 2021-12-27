
import { useState, useEffect, useContext } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import styles from './EditReview.module.css'
import { AuthContext } from './../../context/AuthContext.js'
import { getOneReview, editReview } from './../../services/reviewService.js';

function EditReview() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const {itemId} = useParams();
    const [review, setReview] = useState([]);
console.log(itemId)
    useEffect(() => {
        getOneReview(itemId)
            .then((data) => {
                setReview(data)
            })
    }, []);

    function submitHandler(e) {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        let name = data.get('name');
        let review = data.get('review');
        let email = data.get('email');

       const reviewData = {
            name,
            email,
            review,
            itemId
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