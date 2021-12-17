function Footer() {
  return (
    <>
      <div className="bgded overlay row4" style={{backgroundImage: 'url(/images/demo/backgrounds/05.png)'}}>
        <footer id="footer" className="hoc clear">
          <div className="group btmspace-50">
            <div className="one_quarter first">
              <p className="nospace btmspace-15">Join our email list to learn about our new items and discounts!</p>
              <form method="post" action="#">
                <fieldset>
                  <legend>Newsletter: </legend>
                  <input className="btmspace-15" type="text" namee="name" placeholder="Name" />
                  <input className="btmspace-15" type="text" name="email" placeholder="Email" />
                  <button type="submit" value="submit">Submit</button>
                </fieldset>
              </form>
            </div>
            <div className="one_quarter">
              <h6 className="heading">Auctor tellus diam</h6>
              <ul className="nospace linklist">
                <li>
                  <article>
                    <p className="nospace btmspace-10"><a href="/">Mauris nam odio dui vestibulum a molestie ac pulvinar a tellus donec nisi dui.</a></p>
                    <time className="block font-xs" dateTime="2045-04-06">Friday, 6<sup>th</sup> April 2045</time>
                  </article>
                </li>
              </ul>
            </div>
            <div className="one_quarter">
              <h6 className="heading">Laoreet non sodales</h6>
              <ul className="nospace linklist">
                <li><a href="/">Amet blandit non quam quisque</a></li>
                <li><a href="/">Cursus faucibus nulla in mauris</a></li>
                <li><a href="/">Libero interdum quis molestie</a></li>
              </ul>
            </div>
            <div className="one_quarter">
              <h6 className="heading">Aliquam mollis tortor</h6>
              <ul className="nospace clear latestimg">
                <li><a className="imgover" href="/"><img src={'/images/demo/100x100.png'} alt="" /></a></li>
                <li><a className="imgover" href="/"><img src={'/images/demo/100x100.png'} alt="" /></a></li>
                <li><a className="imgover" href="/"><img src={'/images/demo/100x100.png'} alt="" /></a></li>
                <li><a className="imgover" href="/"><img src={'/images/demo/100x100.png'} alt="" /></a></li>
                <li><a className="imgover" href="/"><img src={'/images/demo/100x100.png'} alt="" /></a></li>
                <li><a className="imgover" href="/"><img src={'/images/demo/100x100.png'} alt="" /></a></li>
                </ul>
            </div>

          </div>
          <div className="center btmspace-50">
            <h6 className="heading">follow us</h6>
            <ul className="faico clear">
              <li><a className="faicon-facebook" href="/"><i className="fab fa-facebook"></i></a></li>
              <li><a className="faicon-google-plus" href="/"><i className="fab fa-google-plus-g"></i></a></li>
              <li><a className="faicon-twitter" href="/"><i className="fab fa-twitter"></i></a></li>
            </ul>
          </div>

          <div id="ctdetails" className="clear">
            <ul className="nospace clear">
              <li className="one_quarter first">
                <div className="block clear"><a href="/"><i className="fas fa-phone"></i></a> <span><strong>Give us a call:</strong> +00 (123) 456 7890</span></div>
              </li>
              <li className="one_quarter">
                <div className="block clear"><a href="/"><i className="fas fa-envelope"></i></a> <span><strong>Send us a mail:</strong> support@domain.com</span></div>
              </li>
              <li className="one_quarter">
                <div className="block clear"><a href="/"><i className="fas fa-clock"></i></a> <span><strong> Monday - Saturday:</strong> 08.00am - 18.00pm</span></div>
              </li>
              <li className="one_quarter">
                <div className="block clear"><a href="/"><i className="fas fa-map-marker-alt"></i></a> <span><strong>Come visit us:</strong> Directions to <a href="/">our location</a></span></div>
              </li>
            </ul>
          </div>

        </footer>
      </div>
      <div className="wrapper row5">
        <div id="copyright" className="hoc clear">

          <p className="fl_left">Copyright &copy; 2018 - All Rights Reserved - <a href="/home">Domain Name</a></p>
          <p className="fl_right">Template by <a href={'https://www.os-templates.com/'} title="Free Website Templates">OS Templates</a></p>

        </div>
      </div>
      <a id="backtotop" href="#top"><i className="fas fa-chevron-up"></i></a>
    </>
  );
}
export default Footer;