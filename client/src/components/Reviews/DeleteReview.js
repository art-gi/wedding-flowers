import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";
import { remove } from "../../services/reviewService.js";
import styles from './DeleteReview.module.css';

export function DeleteReview() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { itemId } = useParams();
    function removeHandler(e) {
        e.preventDefault();
        remove(itemId, user.accessToken)
            .then(() => {
                navigate('/my-reviews')
            })
    }
    return (
        <div className="bgded overlay" >
            <section className={styles.container} className="hoc container clear">
                <article className={styles.content}>
                    Once your data is removed, it can no longer be recovered!
                    If you really want to remove your review, please click the button "Confirm"
                    <div>
                        <Link className="btn inverse" to={`/my-review`} onClick={removeHandler} >Confirm</Link>
                    </div>
                </article>
            </section>
        </div>
    )

}