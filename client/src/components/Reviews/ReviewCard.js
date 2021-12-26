import { Link } from 'react-router-dom';

import styles from './ReviewCard.module.css'

function RCard({ info }) {
    console.log(info)

    return (
        <ul className="nospace"  >
            <li className={styles.card}>
                <p>{info.name}</p>
                <p className="heading">{info.review}</p>
                <span>
                    <Link className="btn inverse" to={`/edit/`} >Edit</Link>
                    <Link className="btn inverse" to="#"  >Delete</Link>
                </span>
            </li>
        </ul>
    );
}
export default RCard;