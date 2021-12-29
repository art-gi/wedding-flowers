import { useContext, useState } from 'react';

import { createReview } from '../../services/reviewService.js';
import { AuthContext } from '../../context/AuthContext.js';
import styles from './AddReview.module.css'
import { useNavigate, useParams } from 'react-router-dom';

const notes = {
    content: ((content, setErrors) => content.length > 300 ? setErrors((oldState) => [...oldState, 'Title must be up to 70 characters']) : null),
    email: ((email, setErrors) => email.match(/[\S]+@[a-zA-z]+\.[a-zA-z]+/g) ? null : setErrors((oldState) => [...oldState, 'Please enter valid email!']))

}

function AddReview() {
    const { user } = useContext(AuthContext);
    const { itemId } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    function inputsHandler(e) {

        let name = e.target.name;
        let value = e.target.value;

        if (notes.hasOwnProperty(name)) {
            notes[name](value, setErrors);

        }

        if (errors.length > 0) {
            alert(errors.join('\n'));
            setErrors([]);
            return;
        }
    }

    function addReviewHandler(e) {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const name = data.get('name');
        const email = data.get('email');
        const review = data.get('review');
        const _itemId = itemId;

        const reviewData = {
            name,
            email,
            review,
            _itemId
        };
        if (Object.values(reviewData).some(x => x === '')) {
            alert('All filds must be fill!')
            return;
        }
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
                <form method="POST" onSubmit={addReviewHandler} onBlur={inputsHandler}>
                    <div className={styles.inputs}>
                        <label htmlFor="name">Name <span>*</span></label>
                        <input type="text" name="name" id="name" size="22" required />
                    </div>
                    <div >
                        <label htmlFor="email">Email<span>*</span></label>
                        <input type="email" name="email" id="email" size="22" required />
                    </div>
                    <div>
                        <label htmlFor="review">Content</label>
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