import { useStateReviews } from './../../hooks/useStateReviews.js';

import { getAllReviews} from './../../services/reviewService.js'

function Review() {
  const reviews = useStateReviews();
console.log(reviews);
  
}
export default Review;