import { Link } from "react-router-dom";

function RCard({ info }) {
    console.log(info)
    return (
        <div className="one_half overlay">
            <ul className="nospace">
                <li>
                    <p>{info.name}</p>
                    <p className="heading">{info.review}</p>
                </li>
                <li>
                    <div>
                        <Link className="btn inverse" to={`/edit-review/${info._id}`}>Edit</Link>
                        <Link className="btn inverse" to="/deleteReview">Delete</Link>
                    </div>
                </li>
            </ul>
        </div>

    );
}
export default RCard;