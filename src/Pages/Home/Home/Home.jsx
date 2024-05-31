import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import PopulaMenu from "../popularMenu/PopulaMenu";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Restaurant | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulaMenu></PopulaMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;