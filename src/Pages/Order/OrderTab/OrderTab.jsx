import OrderCard from "../OrderCard/OrderCard";

const OrderTab = ({ items }) => {
    return (
        <div className="grid grid-cols-3 gap-5 max-w-screen-lg mx-auto my-10">
            {items.map((item, idx) => <OrderCard properties={item} key={idx}></OrderCard>)}
        </div>
    );
};

export default OrderTab;