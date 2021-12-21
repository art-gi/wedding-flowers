import { useEffect, useState } from 'react';

import { useContext } from 'react';
import itemService from '../../services/itemService.js';

import { AuthContext } from './../../context/AuthContext.js';
import Order from './Order.js';

function MyOrders() {
    const { user, productsId } = useContext(AuthContext);
    const [products, setProducts] = useState({});
    console.log(user.orders);
    useEffect(() => {
        if (productsId.length > 0) {
            productsId.forEach(id => {
                itemService.getOne(id)
                    .then((data) => {
                        return setProducts(data);
                    })
            });
        }
        console.log(products)
    }, [])


    return (
        <>
            <div className="scrollable">
                <table>
                    <thead>

                    </thead>
                    <tbody>
                        {Object.values(products).length > 0
                            ? Object.values(products).map(x => <Order key={x._id} item={x} />)
                            : (<tr>
                                <th><h2>No Orders</h2></th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default MyOrders;