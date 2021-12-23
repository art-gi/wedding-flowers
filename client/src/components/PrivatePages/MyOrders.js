import { useEffect, useState } from 'react';

import { useContext } from 'react';
import itemService from '../../services/itemService.js';

import { AuthContext } from './../../context/AuthContext.js';
import Order from './Order.js';

function MyOrders() {
    const { user, productsId } = useContext(AuthContext);
    const [product, setProduct] = useState({});
    const [userOrders, setUserOrders] = useState([])

    useEffect(() => {
        if (productsId.length > 0) {
            productsId.forEach(id => {
                itemService.getOne(id)
                    .then((data) => {
                        setProduct(data);
                        setUserOrders(product);
                        return product;
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
                    {userOrders?.length > 0
                        ? (<>
                            <tbody>
                                {userOrders.map(x => <Order key={x._id} item={x} />)}
                            </tbody></>)
                        : (<tr>
                            <th><h2>No Orders</h2></th>
                        </tr>
                        )
                    }

                </table>
            </div >
        </>
    );
}

export default MyOrders;