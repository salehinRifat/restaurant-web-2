import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

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
    console.log(menu);
    return (
        <div>
            <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"}></SectionTitle>

        </div>
    );
};

export default PopulaMenu;