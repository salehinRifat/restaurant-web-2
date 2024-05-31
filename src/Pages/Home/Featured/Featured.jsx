import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import "./Featured.css"
const Featured = () => {
    return (
        <div className="wrapper py-20 text-white">
            <SectionTitle subHeading="---Check it out---" heading="FROM OUR MENU"></SectionTitle>
            <div className="flex gap-5 justify-center items-center px-24 max-w-screen-xl mx-auto py-10">
                <div>
                    <img src={featuredImg} alt="" className="w-[700px]" />
                </div>
                <div>
                    <h3>March 20, 2023</h3>
                    <h2>WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-active btn-ghost mt-7 border-b-2">Read More...</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;