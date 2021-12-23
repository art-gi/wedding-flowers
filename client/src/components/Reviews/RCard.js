
function RCard({ info}) {

    return (
        <div className="one_half overlay">
            <ul className="nospace">
                <li>
                    <p>{info.name}</p>
                    <p className="heading">{info.review}</p>
                </li>
            </ul>
        </div>

    );
}
export default RCard;