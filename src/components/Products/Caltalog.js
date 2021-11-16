function Catalog() {
    return (
        <div className="wrapper row3">
      <section className="hoc container clear"> 
        <div className="sectiontitle">
          <p className="nospace font-xs">Luctus ligula lacus non odio nunc</p>
          <p className="heading underline font-x2">Faucibus libero risus</p>
        </div>
        <ul id="latest" className="nospace group">
          <li className="one_third first">
            <article><a className="imgover" href="index.html"><img src={'/images/demo/348x261.png'} alt="" /></a>
              <ul className="nospace meta group">
                <li><i className="fas fa-user"></i> <a href="index.html">Admin</a></li>
                <li><i className="far fa-clock"></i>
                  <time dateTime="2045-04-06T08:15+00:00">06 Apr 2045</time>
                </li>
              </ul>
              <div className="excerpt">
                <h6 className="heading">Maecenas eu posuere velit eget ultricies enim</h6>
                <p>Sed nibh enim consequat ac tellus tempus interdum euismod ligula quisque quam nisl aliquet et facilisis eget.</p>
                <footer><a className="btn" href="index.html">Read More</a></footer>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </div>
    );
}
export default Catalog;
