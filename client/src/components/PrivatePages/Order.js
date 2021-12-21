function Order({ item }) {
    let quantities = 0;
    let quantity = Number(item.quantity);
    quantities += quantity;

    let total = 0;
    total += Number(item.price).toFixed(2);

    return (
        <>
            <td>
                <tr>
                    <td>{item.title}</td>
                </tr>
            </td>
            <td>
                <tr>
                    <td>{quantities}</td>
                </tr>
            </td>
            <td>
                <tr>
                    <td>{total}</td>
                </tr>
            </td>
        </>
    )

}
export default Order;