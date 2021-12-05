function PostCard() {
    return (
        <li className="one_third">
            <figure><img className="story_image" src={'/images/demo/couple2.jpg'} alt="" />
                <figcaption>
                    <h6 className="heading">Michelle & Jhon</h6>
                    <p>We met........</p>
                </figcaption>
            </figure>
        </li>
    );
}
module.exports = PostCard;