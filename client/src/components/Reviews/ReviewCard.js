function Reviews() {
    return (
      <li className="one_third first">
      <article><img src={item.image} alt="" />
        <ul className="nospace meta group">
          <li><i className="fas fa-user"></i> <Link to="/About">Admin</Link></li>
          <li><i className="far fa-clock"></i>
            <time dateTime="2045-04-06T08:15+00:00">06 Apr 2045</time>
          </li>
        </ul>
        <div className="excerpt">
          <h3 className="heading">{item.title}</h3>
          <footer><Link to className="btn" href="index.html">Details</Link></footer>
        </div>
      </article>
    </li>
    );
}
export default Reviews;