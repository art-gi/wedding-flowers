function Order({ item }) {
    
    console.log(item)

    return (
        <>
            <td>
                <tr>
                    <td>{item.title}</td>
                </tr>
            </td>
            <td>
                <tr>
                    <td>{item.quantity}</td>
                </tr>
            </td>
            <td>
                <tr>
                    <td>{item.price}</td>
                </tr>
            </td>
        </>
    )

}
export default Order;