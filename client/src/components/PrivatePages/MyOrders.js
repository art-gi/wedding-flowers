import { useEffect, useState } from 'react';

import { useContext } from 'react';
import itemService from '../../services/itemService.js';

import { AuthContext } from './../../context/AuthContext.js';
import Orders from './Orders.js';

function MyOrders() {
    const { productsId } = useContext(AuthContext);
    const [products, setProduct] = useState({});

    useEffect(() => {
        if (productsId.length > 0) {
            productsId.forEach(id => {
                itemService.getAll()
                    .then((result) => {
                        let myOrders = result.filter(x => productsId.includes(x._id));
                        setProduct(myOrders);
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            });
        }
    }, [])

    return (
        <>
            <div className="scrollable">
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
        </>
    );
}

export default MyOrders;