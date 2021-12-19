import ItemCard from './ItemCard.js';
import styles from './Products.module.css'

function Products({ items }) {

    return (
        <ul class="nospace group team" >
            <li class="one_quarter first" className={styles.container} >
                {
                    Object.values(items).length > 0
                        ? (
                            <ul>
                                {Object.values(items).map(x => <ItemCard key={x._id} item={x} />)}
                            </ul>
                        )
                        : `This shop is on short break.`
                }
            </li>
        </ul>
    );
}
export default Products;