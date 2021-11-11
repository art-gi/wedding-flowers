import { Fragment } from 'react';
import './App.css';

function App() {
  return (
    <Fragment>
    {/* Top Background Image Wrapper */}
    <div className="bgded overlay" style={{backgroundImage: 'url(/images/demo/backgrounds/01.png)'}}> 
      <div className="wrapper row0">
        <div id="topbar" className="hoc clear">
          <div className="fl_left"> 
            <ul className="nospace">
              <li><i className="fas fa-phone rgtspace-5"></i> +3598935899</li>
              <li><i className="far fa-envelope rgtspace-5"></i> artgi@mail.bg</li>
            </ul>
          </div>
          <div className="fl_right"> 
            <ul className="nospace">
              <li><a href="index.html"><i className="fas fa-home"></i></a></li>
              <li><a href="login.html" title="Login">Login</a></li>
              <li><a href="register.html" title="Sign Up">Register</a></li>
              <li id="searchform">
                <div>
                  <form action="index.html" method="post">
                    <fieldset>
                      <legend>Quick Search:</legend>
                      <input type="text" placeholder="Enter search term&hellip;"/>
                      <button type="submit"><i className="fas fa-search"></i></button>
                    </fieldset>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrapper row1">
        <header id="header" className="hoc clear">
          <div id="logo" className="fl_left"> 
            <h1><a href="index.html">Wedding Flowers Of Paper</a></h1>
          </div>
          <nav id="mainav" className="fl_right"> 
            <ul className="clear">
              <li className="active"><a href="index.html">Home</a></li>
              <li><a className="drop" href="index.html">Pages</a>
                <ul>
                  <li><a href="pages/gallery.html">Gallery</a></li>
                  <li><a href="pages/full-width.html">Full Width</a></li>
                  <li><a href="pages/sidebar-left.html">Sidebar Left</a></li>
                  <li><a href="pages/sidebar-right.html">Sidebar Right</a></li>
                  <li><a href="pages/basic-grid.html">Basic Grid</a></li>
                  <li><a href="pages/font-icons.html">Font Icons</a></li>
                </ul>
              </li>
              <li><a className="drop" href="index.html">Dropdown</a>
                <ul>
                  <li><a href="index.html">Level 2</a></li>
                  <li><a className="drop" href="index.html">Level 2 + Drop</a>
                    <ul>
                      <li><a href="index.html">Level 3</a></li>
                      <li><a href="index.html">Level 3</a></li>
                      <li><a href="index.html">Level 3</a></li>
                    </ul>
                  </li>
                  <li><a href="index.html">Level 2</a></li>
                </ul>
              </li>
              <li><a href="index.html">Link Text</a></li>
              <li><a href="index.html">Link Text</a></li>
              <li><a href="index.html">Link Text</a></li>
            </ul>
          </nav>
        </header>
      </div>
      <div id="pageintro" className="hoc clear"> 
        <article>
          <h3 className="heading">Finibus dictum lobortis</h3>
          <p>Libero sed ullamcorper nibh dignissim et curabitur cursus scelerisque metus sit amet sodales justo auctor sit amet proin quis lacus non nisi.</p>
          <footer>
            <ul className="nospace inline pushright">
              <li><a className="btn" href="index.html">Pharetra etiam</a></li>
              <li><a className="btn inverse" href="index.html">Sagittis massa</a></li>
            </ul>
          </footer>
        </article>
      </div>
    </div>
    {/* End Top Background Image Wrapper */}
    <div className="wrapper row3">
      <main className="hoc container clear"> 
        {/* main body */}
        <section id="introblocks">
          <ul className="nospace group btmspace-80">
            <li className="one_third first">
              <figure><a className="imgover" href="index.html"><img src={'/images/demo/348x261.png'} alt="" /></a>
                <figcaption>
                  <h6 className="heading">Viverra congue</h6>
                  <p>Aenean metus purus consectetur ac sagittis in malesuada quis nunc ut sed risus nulla etiam gravida velit.</p>
                </figcaption>
              </figure>
            </li>
            <li className="one_third">
              <figure><a className="imgover" href="index.html"><img src={'/images/demo/348x261.png'} alt="" /></a>
                <figcaption>
                  <h6 className="heading">Libero sodales</h6>
                  <p>Nec tincidunt maximus ex orci sollicitudin metus ut lacinia ligula nisi vel neque sed non quam eleifend.</p>
                </figcaption>
              </figure>
            </li>
            <li className="one_third">
              <figure><a className="imgover" href="index.html"><img src={'/images/demo/348x261.png'} alt="" /></a>
                <figcaption>
                  <h6 className="heading">Laoreet tortor</h6>
                  <p>Pharetra etiam ut nisi non mi scelerisque consectetur maecenas vel elementum lectus cras maximus finibus.</p>
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>
        <hr className="btmspace-80" />
        <section id="overview">
          <div className="sectiontitle">
            <p className="nospace font-xs">Integer facilisis enim sollicitudin</p>
            <p className="heading underline font-x2">Dolor ut pellentesque</p>
          </div>
          <ul className="nospace group btmspace-80">
            <li className="one_third">
              <article>
                <div className="clear"><a href="index.html"><i className="fas fa-tape"></i></a>
                  <h6 className="heading">Efficitur auctor</h6>
                </div>
                <p>Cras dui ac pretium egestas nunc maecenas scelerisque leo eget enim interdum at vulputate lorem pretium in.</p>
              </article>
            </li>
            <li className="one_third">
              <article>
                <div className="clear"><a href="index.html"><i className="fas fa-table-tennis"></i></a>
                  <h6 className="heading">Tempor aliquam</h6>
                </div>
                <p>Sagittis arcu a magna eget cursus lacus consectetur proin imperdiet bibendum elit id molestie ipsum ut tellus.</p>
              </article>
            </li>
            <li className="one_third">
              <article>
                <div className="clear"><a href="index.html"><i className="fas fa-people-carry"></i></a>
                  <h6 className="heading">Metus convallis</h6>
                </div>
                <p>Orci blandit ac mauris ac gravida maximus nulla curabitur convallis massa sed urna placerat sed tempor velit.</p>
              </article>
            </li>
          </ul>
          <footer className="center"><a className="btn" href="index.html">Mattis vestibulum</a></footer>
        </section>
        {/* / main body */}
        <div className="clear"></div>
      </main>
    </div>
    <div className="bgded overlay" style={{backgroundImage: 'url(/images/demo/backgrounds/02.png)'}}>
      <section id="splitfifty" className="hoc container clear">
        <div className="sectiontitle">
          <p className="nospace font-xs">Magna ultrices eleifend suspendisse</p>
          <p className="heading underline font-x2">Posuere vivamus semper</p>
        </div>
        <div className="bgded clear" style={{backgroundImage: 'url(/images/demo/backgrounds/03.png)'}}> 
          <article>
            <h6 className="heading font-x2">Tellus nec mollis sem</h6>
            <p>lacus dui pretium non elit ac interdum ullamcorper purus ut ultricies ullamcorper convallis morbi bibendum sapien in odio finibus sit amet lacinia dolor dapibus in nisl erat consectetur eu blandit.</p>
            <footer><a className="btn" href="index.html">Fermentum felis</a></footer>
          </article>
        </div>
      </section>
    </div>
    <div className="wrapper row2">
      <div className="hoc container clear"> 
        <div className="sectiontitle">
          <p className="nospace font-xs">Id elementum lobortis justo donec</p>
          <p className="heading underline font-x2">Rutrum sed ligula viverra</p>
        </div>
        <ul className="nospace group team">
          <li className="one_quarter first">
            <figure><a className="imgover" href="index.html"><img src={'/images/demo/300x300.png'} alt="" /></a>
              <figcaption><strong>A. Doe</strong> <em>Job Title Here</em></figcaption>
            </figure>
          </li>
          <li className="one_quarter">
            <figure><a className="imgover" href="index.html"><img src={'/images/demo/300x300.png'} alt="" /></a>
              <figcaption><strong>B. Doe</strong> <em>Job Title Here</em></figcaption>
            </figure>
          </li>
          <li className="one_quarter">
            <figure><a className="imgover" href="index.html"><img src={'/images/demo/300x300.png'} alt="" /></a>
              <figcaption><strong>C. Doe</strong> <em>Job Title Here</em></figcaption>
            </figure>
          </li>
          <li className="one_quarter">
            <figure><a className="imgover" href="index.html"><img src={'/images/demo/300x300.png'} alt="" /></a>
              <figcaption><strong>D. Doe</strong> <em>Job Title Here</em></figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </div>
    <div className="wrapper row3">
      <section className="hoc container clear"> 
        <div className="sectiontitle">
          <p className="nospace font-xs">Nisl vitae mauris ipsum  eget</p>
          <p className="heading underline font-x2">Tincidunt elit velit auctor</p>
        </div>
        <ul id="stats" className="nospace group">
          <li><i className="fab fa-sticker-mule"></i>
            <p><a href="index.html">123</a></p>
            <p>Phasellus tincidunt</p>
          </li>
          <li><i className="fab fa-pied-piper-alt"></i>
            <p><a href="index.html">1234</a></p>
            <p>Egestas maximus</p>
          </li>
          <li><i className="fas fa-globe"></i>
            <p><a href="index.html">12345</a></p>
            <p>Aliquam neque</p>
          </li>
          <li><i className="fas fa-ribbon"></i>
            <p><a href="index.html">6789</a></p>
            <p>Curabitur sodales</p>
          </li>
        </ul>
      </section>
    </div>
    <div className="wrapper bgded" style={{backgroundImage: 'url(//images/demo/backgrounds/04.png)'}}>
      <section id="testimonials" className="hoc clear"> 
        <div className="one_half overlay">
          <ul className="nospace">
            <li>
              <blockquote>suscipit tellus non ligula mattis quis iaculis nunc lobortis vestibulum vehicula bibendum malesuada curabitur quis interdum mi vestibulum consectetur leo ut viverra sagittis sapien orci rhoncus nisi.</blockquote>
              <figure className="clear"><img className="circle" src="{'/images/demo/60x60.png'}" alt="" />
                <figcaption>
                  <h6 className="heading">A. Doe</h6>
                  <em>CEO / Odio tristique quis</em></figcaption>
              </figure>
            </li>
            <li>
            <footer><a className="btn inverse" href="index.html">View More</a></footer>
            </li>
          </ul>
        </div>
      </section>
    </div>
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
          <li className="one_third">
            <article><a className="imgover" href="index.html"><img src={'/images/demo/348x261.png'} alt="" /></a>
              <ul className="nospace meta group">
                <li><i className="fas fa-user"></i> <a href="index.html">Admin</a></li>
                <li><i className="far fa-clock"></i>
                  <time dateTime="2045-04-05T08:15+00:00">05 Apr 2045</time>
                </li>
              </ul>
              <div className="excerpt">
                <h6 className="heading">Condimentum quis arcu nullam id purus tortor</h6>
                <p>Molestie vulputate a luctus nulla nulla eleifend justo in libero feugiat congue donec sit amet pharetra velit.</p>
                <footer><a className="btn" href="index.html">Read More</a></footer>
              </div>
            </article>
          </li>
          <li className="one_third">
            <article><a className="imgover" href="index.html"><img src={'/images/demo/348x261.png'} alt="" /></a>
              <ul className="nospace meta group">
                <li><i className="fas fa-user"></i> <a href="index.html">Admin</a></li>
                <li><i className="far fa-clock"></i>
                  <time dateTime="2045-04-04T08:15+00:00">04 Apr 2045</time>
                </li>
              </ul>
              <div className="excerpt">
                <h6 className="heading">Nulla tempor faucibus tortor nulla pretium</h6>
                <p>Cras auctor commodo metus sed pede in vitae sapien phasellus in magna sed dictum libero et nisi proin porta.</p>
                <footer><a className="btn" href="index.html">Read More</a></footer>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </div>
    <div className="bgded overlay row4" style={{backgroundImage: 'url(//images/demo/backgrounds/05.png)'}} />
      
    </Fragment>
  );
}

export default App;
