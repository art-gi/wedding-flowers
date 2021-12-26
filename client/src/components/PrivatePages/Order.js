function Order({ item }) {
    
    return (
        <div className="bgded overlay" >
            <section className="hoc container clear">
                <div >
                    <p>{item.title}</p>
                    <img  src={item.image} />
                </div>
            </section>
        </div>
    );

}
export default Order;