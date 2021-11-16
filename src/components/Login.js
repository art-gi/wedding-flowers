function Login() {
  return (
    <section>
      <h2>Log in</h2>
      <form action="#" method="post">
        <div className="one_third first">
          <label htmlFor="name">enter your username</label>
          <input type="text" name="name" size="22" required />
        </div>
        <div className="one_third">
          <label htmlFor="email">enter your email</label>
          <input type="email" name="email" size="22" required />
        </div>
        <div>
          <input type="submit" name="submit" value="Submit Form" />
        </div>
      </form>
    </section>
  );
}
export default Login;