import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext.js';
import styles from './Login.module.css';
import authService from '../../../services/authService.js';

const notes = {
  password: ((password, setErrors) => password.length < 6 ? setErrors((oldState) => [...oldState, 'Password must be atlest 6 characters!']) : null),
  email: ((email, setErrors) => email.match(/[\S]+@[a-zA-z]+\.[a-zA-z]+/g) ? null : setErrors((oldState) => [...oldState, 'Please enter valid email!']))

}

function Login() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  function inputsHandler(e) {

    let name = e.target.name;
    let value = e.target.value;

    if (notes.hasOwnProperty(name)) {
      notes[name](value, setErrors);

    }

    if (errors.length > 0) {
      console.log(errors)
      alert(errors.join('\n'));
      setErrors([]);
      return;
    }
  }

  function loginHandler(e) {
    e.preventDefault();

    let data = new FormData(e.currentTarget);

    let email = data.get('email')
    let password = data.get('password');

    if (email === '' || password === '') {
      alert('All filds must be fill!')
      return;
    }

    authService.login(email, password)
      .then((userData) => {
        login(userData)
        navigate('/');
      }).catch((error) => {
        console.log(error);
      })
  }

  return (
    <section >
      <div className={styles.main} style={{ backgroundImage: 'url(https://am3pap003files.storage.live.com/y4mn-iRa468WGL4qUtqIDtcrDssfg8GMAUL1L-lKRgBDIMs4EDrF5M9pThP2hmBTwE1vVM3aE6u9rkFXKIoWp2XoKygpEFW9T7NrOnRvVLPC9s3ABk-eV_cGn7F6ycZJO63PJiSi8KuHrBUOhUaxRM_2CTrsblge_miA40pwcYZyyFZugUnTgU5INV4iEjFzi9q?width=5346&height=3564&cropmode=none)' }} >
        <div className={styles.container} >

          <form className={styles.label} method="POST" onSubmit={loginHandler} onBlur={inputsHandler}>
            <h2>Sing in</h2>
            <div>
              <label htmlFor="email">Email:<span>*</span></label>
              <input type="email" placeholder="emi@aol.com" name="email" />
            </div>

            <div>
              <label htmlFor="password">Password:<span>*</span></label>
              <input type="password" placeholder="Atleast 6 characters!" name="password" />
            </div>

            <input className={styles.btn} type="submit" name="submit" value="Log in" />
          </form>
        </div>
      </div>
    </section>
  );
}
export default Login;