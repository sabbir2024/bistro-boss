
const OrderCard = ({ item }) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={item.image} alt="Items" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.recipe}</p>
                <p>{item.category}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline btn-warning border-b-4 uppercase">add to card</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;