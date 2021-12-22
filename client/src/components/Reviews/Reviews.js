import { useState, useEffect } from 'react';
import Review from './Review.js'

import reviewService from '../../services/reviewService.js';

function Reviews() {
const [review, setReview] = useState({});

    useEffect(() => {
        reviewService.getAll()
          .then((data) => {
              console.log(data)
            setReview(data)
          })
          .catch((error) => {
            console.log(error);
          })
      }, []);
      
    return (
        <div className="wrapper bgded">
            <section id="testimonials" className="hoc clear">
                <Review info={review}/>
            </section>
        </div>
    );
}
export default Reviews;