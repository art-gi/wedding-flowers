import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

import authService from '../../services/authService.js';

function Register() {
  const navigate = useNavigate();

  function registerHandler(e) {
    e.preventDefault();
    let data = new FormData(e.currentTarget);

    let name = data.get('name')
    let email = data.get('email');
    let password = data.get('password');
    let repassword = data.get('repass');

    if (password !== repassword) {
      throw new Error(`Passwords don't mutch`)
    }
    authService.register(email, password)
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

          <h2 className={styles.color} >Sing in</h2>
          <form className={styles.color} method="POST" onSubmit={registerHandler}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Emily" name="name" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="emily@aol.com" name="email" />
            </div>

            <div>
              <label for="re-password">Password:</label>
              <input type="password" id="re-password" placeholder="*****" name="repass" />
            </div>

            <div>
              <label for="password">Repeat password:</label>
              <input type="password" id="password" placeholder="*****" name="password" />
            </div>

            <input className={styles.btn} type="submit" name="submit" value="Sing up" />

          </form>
        </div>
      </div>
    </section>
  );
}
export default Register;