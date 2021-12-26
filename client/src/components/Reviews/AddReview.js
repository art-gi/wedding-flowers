import { useContext } from 'react';

import { createReview } from '../../services/reviewService.js';
import { AuthContext } from '../../context/AuthContext.js';
import styles from './AddReview.module.css'
import { useNavigate, useParams } from 'react-router-dom';

function AddReview() {
    const { user } = useContext(AuthContext);
    const { itemId } = useParams();
    const navigate = useNavigate();

    function addReviewHandler(e) {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const name = data.get('name');
        const email = data.get('email');
        const review = data.get('review');

        const reviewData = {
            name,
            email,
            review,
        };
        createReview(reviewData, user.accessToken)
            .then((review) => {
                navigate(`/details/${itemId}`);
            }).catch((error) => {
                console.log(error);
            })
    }
    return (
        <section className={styles.container}>
            <div className={styles.div} >
                <h2>Write a Review</h2>
                <form method="POST" onSubmit={addReviewHandler}>
                    <div className={styles.inputs}>
                        <label for="name">Name <span>*</span></label>
                        <input type="text" name="name" id="name" size="22" required />
                    </div>
                    <div >
                        <label for="email">Mail <span>*</span></label>
                        <input type="email" name="email" id="email" size="22" required />
                    </div>
                    <div className="block clear">
                        <label for="review">Your Review</label>
                        <textarea name="review" id="review" cols="25" rows="10"></textarea>
                    </div>
                    <div>
                        <input type="submit" name="submit" value="Submit Form" />
                    </div>
                </form>
            </div>
        </section>
    )
}
export default AddReview;