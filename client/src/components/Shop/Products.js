import ItemCard from './ItemCard.js';
import styles from './Products.module.css'

function Products({ items }) {
    
const showHeader = (
<h3 className={styles.header} >This shop is on short break.</h3>
)

    return (
        <ul className="nospace group team" >
            <li className="one_quarter first" className={styles.container} >
                {items?.length > 0
                    ? (
                        <ul>
                            {items.map(x => <ItemCard key={x._id} item={x} />)}
                        </ul>
                    )
                    : showHeader
                }
            </li>
        </ul>
    );
}
export default Products;