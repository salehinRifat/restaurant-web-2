

const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <>
            <section className="flex flex-row gap-5">
                <div>
                    <img src={image} alt="" className="w-28" style={{ borderRadius: '0 250px 250px 250px' }} />
                </div>
                <div>
                    <h1>{name} -------------------</h1>
                    <p>{recipe}</p>
                </div>
                <div>
                    <p className="text-orange-500">${price}</p>
                </div>
            </section>

        </>
    );
};

export default MenuItem;