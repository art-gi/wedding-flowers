import {Link} from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="bgded overlay row4">
      </div>
      <div className="wrapper row5">
        <div id="copyright" className="hoc clear">

          <p className="fl_left">Copyright &copy; 2021 - All Rights Reserved - <Link to="/home">Domain Name</Link></p>
          <p className="fl_right">Template by <Link to={'https://www.os-templates.com/'} title="Free Website Templates">OS Templates</Link></p>

        </div>
      </div>
    </>
  );
}
export default Footer;