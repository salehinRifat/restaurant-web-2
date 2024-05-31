import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopulaMenu from "../popularMenu/PopulaMenu";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopulaMenu></PopulaMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;