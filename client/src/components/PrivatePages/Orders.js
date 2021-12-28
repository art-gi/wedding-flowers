
import styles from './Orders.module.css';

function Orders({ item }) {
    let price = Number(item.price).toFixed(2);

    return (
        <tr>
            <td><img className={styles.image} src={item.image} /> {item.title}</td>
            <td><p>$ {price}</p></td>
        </tr>
    );

}
export default Orders;