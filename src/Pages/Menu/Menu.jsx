
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import MenuCategory from "./MenuCategory";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

import banner3 from '../../assets/menu/banner3.jpg'
import dessertBg from '../../assets/menu/dessert-bg.jpeg'
import saladBg from '../../assets/menu/salad-bg.jpg'
import soupBg from '../../assets/menu/soup-bg.jpg'
import pizzaBg from '../../assets/menu/pizza-bg.jpg'
const Menu = () => {
    const [offered] = useMenu('offered')
    const [salad] = useMenu('salad')
    const [dessert] = useMenu('dessert')
    const [soup] = useMenu('soup')
    const [pizza] = useMenu('pizza')
    return (
        <div>
            <Helmet>
                <title>Restaurant | Menu</title>
            </Helmet>
            <Cover title={"Our Menu"} description={"Would you like to try a dish?"} img={banner3}></Cover>
            <SectionTitle subHeading={"---Don't miss---"} heading={"Todays Offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <Cover title={"Desserts"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={dessertBg}></Cover>
            <MenuCategory items={dessert}></MenuCategory>

            <Cover title={"PIZZA"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={pizzaBg}></Cover>
            <MenuCategory items={pizza}></MenuCategory>

            <Cover title={"SALADS"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={saladBg}></Cover>
            <MenuCategory items={salad}></MenuCategory>

            <Cover title={"Soups"} description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} img={soupBg}></Cover>
            <MenuCategory items={soup}></MenuCategory>


        </div>
    );
};

export default Menu;