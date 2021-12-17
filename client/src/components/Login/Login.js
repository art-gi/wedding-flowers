import { useNavigate } from 'react-router-dom';

import styles from './Login.module.css';
import authService from '../../services/authService.js';


function Login() {
  const navigate = useNavigate()                             

  function loginHandler(e) {
    e.preventDefault();
  
    let data = new FormData(e.currentTarget);

    let email = data.get('email')
    let password = data.get('password');

    authService.login(email, password)
    .then((userData) => {
      console.log(userData)
      navigate('/');
    }).catch((error) => {
      console.log(error);
    })
  }
  
  return (
    <section >
      <div className={styles.main} style={{ backgroundImage: 'url(/images/demo/backgrounds/05.png)' }}>
        <div className={styles.container} >

          <h2 className={styles.color}>Sing in</h2>
          <form id="login-form" className={styles.color} method="POST" onSubmit={loginHandler}>

            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" placeholder="emi@aol.com" name="email" />
            </div>

            <div>
              <label for="password">Password:</label>
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