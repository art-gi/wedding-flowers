
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext.js";
import itemService from "../../services/itemService.js";
import styles from './MyListings.module.css';
import ListCard from './ListCard.js';

function MyListings() {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);

    useEffect(() => {
        itemService.getAll()
            .then((result) => {
                let myListings = result.filter(x => x._ownerId === user._id);
                setItems(myListings)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div className="wrapper row2">
            <div className={styles.main} className="hoc container clear">
                <span><h4 className={styles.h4} >My Listings</h4></span>
                {items?.length <= 0
                    ? <p className={styles.p}>No listings yet...</p>
                    : items.map(x => <ListCard key={x._id} item={x} />)
                }
            </div>
        </div>
    );
}
export default MyListings;  