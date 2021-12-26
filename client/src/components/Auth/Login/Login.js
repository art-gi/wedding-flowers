import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext.js';
import styles from './Login.module.css';
import authService from '../../../services/authService.js';

function Login() {
  const {login} = useContext(AuthContext);
  const navigate = useNavigate()

  function loginHandler(e) {
    e.preventDefault();

    let data = new FormData(e.currentTarget);

    let email = data.get('email')
    let password = data.get('password');

    authService.login(email, password)
      .then((userData) => {
        login(userData);
        navigate('/');
      }).catch((error))
  }

  return (
    <section >
      <div className={styles.main} style={{ backgroundImage: 'url(https://am3pap003files.storage.live.com/y4mn-iRa468WGL4qUtqIDtcrDssfg8GMAUL1L-lKRgBDIMs4EDrF5M9pThP2hmBTwE1vVM3aE6u9rkFXKIoWp2XoKygpEFW9T7NrOnRvVLPC9s3ABk-eV_cGn7F6ycZJO63PJiSi8KuHrBUOhUaxRM_2CTrsblge_miA40pwcYZyyFZugUnTgU5INV4iEjFzi9q?width=5346&height=3564&cropmode=none)' }} >
        <div className={styles.container} >

          <form className={styles.label} method="POST" onSubmit={loginHandler}>
            <h2>Sing in</h2>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" placeholder="emi@aol.com" name="email" />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" placeholder="*****" name="password" />
            </div>

            <input className={styles.btn} type="submit" name="submit" value="Log in" />
          </form>
        </div>
      </div>
    </section>
  );
}
export default Login;