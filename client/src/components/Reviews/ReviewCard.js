
import { useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.js';
import { remove } from '../../services/reviewService.js';

import styles from './ReviewCard.module.css'

function ReviewCard({ info }) {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    return (
        <ul className="nospace"  >
        <li className={styles.content}>
            <article>
                <header>
                    <p>By  <strong className={styles.name}>{info.name}</strong></p>
                    <div class="comcont">
                        <p>Content: {info.review}</p>
                    </div>
                </header>
                <span>
                    <Link className="btn inverse" to={`/edit-review/${info._id}`} >Edit</Link>
                    <Link className="btn inverse" to={`/delete-review/${info._id}`}>Delete</Link>
                </span>
            </article>
        </li>
    </ul>
    );
}
export default ReviewCard;

