function Review({ info }) {
  console.log(info)
  return (
        <div className="one_half overlay">
          <ul className="nospace">
            <li>
              <p></p>
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
export default Review;