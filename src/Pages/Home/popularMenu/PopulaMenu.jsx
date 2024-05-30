import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";

const PopulaMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter((item) => item.category === 'popular');
                setMenu(popularItems);
            })
    }, [])
    return (
        <div>
            <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"}></SectionTitle>
            <section className="max-w-screen-xl mx-auto grid grid-cols-2 gap-10 my-10">
                {menu.map((item, idx) => <MenuItem item={item} key={idx} ></MenuItem>)}
            </section>
        </div>
    );
};

export default PopulaMenu;