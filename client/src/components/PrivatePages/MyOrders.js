import { useEffect, useState } from 'react';

import { useContext } from 'react';
import itemService from '../../services/itemService.js';

import { AuthContext } from './../../context/AuthContext.js';
import Orders from './Orders.js';
import styles from './MyOrders.module.css'

function MyOrders() {
    const { productsId } = useContext(AuthContext);
    const [products, setProduct] = useState({});

    useEffect(() => {
        if (productsId.length > 0) {
            productsId.forEach(id => {
                itemService.getAll()
                    .then((result) => {
                        let myOrders = result.filter(x => productsId.includes(x._id));
                        console.log(productsId)
                        setProduct(myOrders);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            });
        }
    }, [])
    console.log(products)
    return (
        <>
            <div className="scrollable">
            <div className={styles.container}>
                <table>
                    {products?.length > 0
                        ? (<>
                            <thead >
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(x => <Orders key={x._id} item={x} />)}
                            </tbody>
                        </>)
                        : (<tr>
                            <th><h2>No Orders</h2></th>
                        </tr>
                        )
                    }

                </table>
                </div>
            </div >
        </>
    );
}

export default MyOrders;