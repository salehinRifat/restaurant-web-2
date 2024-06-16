import { useForm } from "react-hook-form"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const AddItems = () => {
    const image_key = import.meta.env.VITE_image_api;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_key}`;
    const axiosPublic = useAxiosPublic();
    const asioxSecure = useAxiosSecure();
    const {
        register,
        handleSubmit
    } = useForm()
    const onSubmit = async (data) => {
        const imageData = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        const menuItem = {
            name: data.name,
            image: res.data.data.display_url,
            category: data.category,
            recipe: data.recipe,
            price: parseFloat(data.price)
        }
        console.log(menuItem);
        asioxSecure.post('/menu', menuItem)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Congratulations!",
                        text: `${data.name} Added Succesfully`,
                        icon: "success"
                    });
                }
            })

    }
    return (
        <div className="">
            <SectionTitle heading="Add An Item" subHeading="whats new?"></SectionTitle>
            <form className="bg-white w-[90%] mx-auto p-10 my-10" onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Name</span>
                    </div>
                    <input type="text" placeholder="Name"{...register("name")} className="input input-bordered w-full" />
                </label>
                <div className="flex justify-between w-full gap-10">
                    <div className="my-3 w-1/2">
                        <span className="label-text block mb-2  font-bold">Category</span>
                        <select className="select select-bordered w-full" {...register("category")} defaultValue="value">
                            <option >salad</option>
                            <option>drinks</option>
                            <option>dessert</option>
                            <option>soup</option>
                            <option>pizza</option>
                        </select>
                    </div>

                    <label className="form-control w-1/2 mt-1">
                        <div className="label">
                            <span className="label-text font-bold">price</span>
                        </div>
                        <input type="text" placeholder="Price" className="input input-bordered w-full" {...register("price")} />
                    </label>
                </div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text font-bold">Recipe</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Recipe details" {...register("recipe")}></textarea>
                </label>
                <div className="flex flex-col gap-5 mt-5">
                    <label>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image")} />
                    </label>
                    <button type="submit" className="btn  btn-outline w-[150px]">Add item <FaUtensils></FaUtensils> </button>
                </div>
            </form>
        </div>
    );
};

export default AddItems;