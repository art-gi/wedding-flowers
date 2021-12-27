import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';

import styles from './Card.module.css'
function ReviewCard({ info }) {
    const { user } = useContext(AuthContext);
    return (
        <ul className="nospace"  >
            <li className={styles.content}>
                <article>
                    <header className={styles.content}>
                        <p>By  <strong className={styles.name}>{info.name}</strong></p>
                        <div class="comcont">
                            <p>Content: {info.review}</p>
                        </div>
                    </header>
                </article>
            </li>
        </ul>
    );
}
export default ReviewCard;
