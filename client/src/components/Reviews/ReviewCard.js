import { Link } from 'react-router-dom';

import styles from './ReviewCard.module.css'

function ReviewCard({ info }) {
    console.log(info)

    return (
        <ul className="nospace"  >
            <li className={styles.content}>
                <article>
                    <header>
                        <address>
                            <p>By <h6 className={styles.name}>{info.name}</h6></p>
                        </address>
                        <div class="comcont">
                            <p>{info.review}</p>
                        </div>
                    </header>
                    <span>
                        <Link className="btn inverse" to={`/edit-review/${info._id}`} >Edit</Link>
                        <Link className="btn inverse" to="#"  >Delete</Link>
                    </span>
                </article>
            </li>
        </ul>
    );
}
export default ReviewCard;
