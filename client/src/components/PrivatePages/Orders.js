
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import styles from './Orders.module.css';

function Orders({ item }) {
    const { user } = useContext(AuthContext);
    /* const newData = {}

    itemService.partialEdit(item._id, user.accessToken, newData)
        .then()
        .catch((error) => {
            console.log(error);
        })
 */
    let price = Number(item.price).toFixed(2);

    return (
        <tr>
            <td><img className={styles.image} src={item.image} /> {item.title}</td>
            <td><p>$ {price}</p></td>
        </tr>
    );

}
export default Orders;