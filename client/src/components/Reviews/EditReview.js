import {useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";

import { editReview, getOneReview } from './../../services/reviewService.js'
import styles from './EditReview.module.css'


function EditReview() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const itemId = useParams();
    const [review, setReview] = useState([]);
console.log(Object.values(itemId)[0])
    useEffect(() => {
        getOneReview(Object.values(itemId)[0])
            .then((data) => {
                console.log(data)
                setReview(data)
            })
    }, []);

    function updateReviewHandler(e) {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        let name = data.get('name');
        let review = data.get('review');
        let email = data.get('email');


        const reviewData = {
            name,
            review,
            email
        }

        editReview(Object.values(itemId)[0], reviewData)
            .then(() => {
                navigate('/reviews')
            })
    }
    return (
        <section className={styles.container}>
            <div className={styles.div} >
                <h2>Update a Review</h2>
                <form method="POST" onSubmit={updateReviewHandler}>
                    <div className={styles.inputs}>
                        <label htmlFor="name">Name <span>*</span></label>
                        <input type="text" name="name" id="name" defaultValue={review.name} size="22" required />
                    </div>
                    <div >
                        <label htmlFor="email">Mail <span>*</span></label>
                        <input type="email" name="email" id="email" defaultValue={review.email} size="22" required />
                    </div>
                    <div className="block clear">
                        <label htmlFor="review">Your Review</label>
                        <textarea name="review" id="review" cols="25" rows="10" defaultValue={review.review}></textarea>
                    </div>
                    <div>
                        <input type="submit" name="submit" value="Submit Form" />
                    </div>
                </form>
            </div>
        </section>
    )
}
export default EditReview;