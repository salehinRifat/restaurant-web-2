import { Link } from "react-router-dom";
import MenuItem from "../Shared/MenuItem";

const MenuCategory = ({ items }) => {
    return (
        <div className="flex flex-col items-center gap-5">
            <section className="max-w-screen-xl mx-auto grid grid-cols-2 gap-10 my-10">
                {items.map((item, idx) => <MenuItem item={item} key={idx} ></MenuItem>)}
            </section>
            <Link to={`/order/${items[0]?.category}`}><button className="btn text-center border-b-2 border-b-black mb-10">ORDER YOUR FAVOURITE FOOD</button></Link>
        </div >
    );
};

export default MenuCategory;