export function ReviewCard({ item }) {
    console.log(item)
    return (
          <div className="one_half overlay">
            <ul className="nospace">
              <li>
                <p>{item.name}</p>
                <h6 className="heading"></h6>
              </li>
              <li>
                <div>
                  <a className="btn inverse" href="/editReview">Edit</a>
                  <a className="btn inverse" href="/deleteReview">Delete</a>
                </div>
              </li>
            </ul>
          </div>
        
    );
  }
  export default ReviewCard;