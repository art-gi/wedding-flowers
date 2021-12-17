function CreateItem() {
  return (
    <section>
      <h2>Create New Review</h2>
      <form method="POST">
        <div className="one_third first">
          <label htmlFor="firstName">First name</label>
          <input type="text" name="name" size="22" />
        </div>
        <div className="one_third">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" size="22" required />
        </div>
        <div className="one_third">
          <label htmlFor="email">enter your email</label>
          <input type="email" name="email" size="22" required />
        </div>
        <div className="one_third first">
          <label htmlFor="firstName">First name</label>
          <input type="text" name="password" size="22" />
        </div>
        <div className="one_third first">
          <label htmlFor="firstName">First name</label>
          <input type="text" name="repassword" size="22" />
        </div>
        <div>
          <input type="submit" name="submit" value="Submit Form" />
        </div>
      </form>
    </section>
  );
}
export default CreateItem;