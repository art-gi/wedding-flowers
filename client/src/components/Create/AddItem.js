import styles from './AddItem.module.css'

function AddItem() {
  return (
    <section style={{ backgroundImage: 'url(/images/demo/backgrounds/05.png)' }} className={styles.main}>
       <div className={styles.container}  >
      <h2 className={styles.color}>Create New Review</h2>
      <form method="POST" className={styles.fields}>
        <div className={styles.color}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title"  placeholder="Giant rose decor ..."size="22" />
        </div>
        <div className={styles.color}>
          <label htmlFor="email">Description</label>
          <textarea name="description" placeholder="Colors: red and white, Size: ..." size="22" />
        </div>
        <div className={styles.color}>
          <label htmlFor="type">Type</label>
          <input type="text" name="type" placeholder="paper flowers" size="22" />
        </div>
        <div className={styles.color}>
          <label htmlFor="imageUrl">Image Url</label>
          <input type="text" name="image" placeholder="http://..." size="22" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="text" name="price" placeholder="25.75" size="22" />
        </div>
        <div className={styles.color}>
          <input type="submit" name="submit" value="Add" className={styles.btn} />
        </div>
      </form>
      </div>
    </section>
  );
}
export default AddItem;