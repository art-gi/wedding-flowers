import styles from './EditItem.module.css'

function EditItem() {
  return (
    <section className={styles.container}>
       <div>
      <h2 >Edit Item</h2>
      <form method="POST" className={styles.label}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title"  placeholder="Giant rose decor ..."size="22" />
        </div>
        <div >
          <label htmlFor="email">Description</label>
          <input name="description" placeholder="Colors: red and white, Size: ..." size="22" />
        </div>
        <div >
          <label htmlFor="type">Type</label>
          <input type="text" name="type" placeholder="paper flowers" size="22" />
        </div>
        <div >
          <label htmlFor="imageUrl">Image Url</label>
          <input type="text" name="image" placeholder="http://..." size="22" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="text" name="price" placeholder="25.75" size="22" />
        </div>
        <div >
          <input type="submit" name="submit" value="Edit" className={styles.btn} />
        </div>
      </form>
      </div>
    </section>
  );
}
export default EditItem;