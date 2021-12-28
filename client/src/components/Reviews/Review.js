
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext.js';
import { getAllReviews } from '../../services/reviewService.js';
import Card from './Card.js';
import styles from './Review.module.css';

function Review() {
  const {itemId} = useParams();
  const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
console.log(itemId)
    useEffect(() => {
        getAllReviews()
            .then((result) => {
              console.log(result)
                let currentItemReviews = result.filter(x => x._itemId == itemId);
                console.log(currentItemReviews)
                setReviews(currentItemReviews)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);
    
  return (
    <div className="wrapper bgded">
      <div id="comments">
        {reviews?.lengts <= 0
          ? null
          : (<span className={styles.container}>
            {
              reviews.map(x => <Card key={x._id} info={x} />)
            }
          </span>
          )
        }
      </div>
    </div>
  );
}
export default Review;