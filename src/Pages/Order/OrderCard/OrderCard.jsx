

const OrderCard = ({ properties }) => {
    const { image, name, recipe, price } = properties;
    return (
        <div>
            <div className=" shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body py-0">
                    <h2 className="card-title block mt-2 text-center">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn text-center border-b-2 border-b-black mb-5 mt-2">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;