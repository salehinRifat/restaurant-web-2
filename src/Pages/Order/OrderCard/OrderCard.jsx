import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const OrderCard = ({ properties }) => {
    const { user } = useContext(AuthContext);
    const { image, name, recipe, price, } = properties;
    const axiosSecure = useAxiosSecure();
    const location = useLocation();
    const navigate = useNavigate();
    const [, refetch] = useCart();
    const handleAddCart = (item) => {
        if (user && user.email) {
            const cartItem = {
                email: user?.email,
                itemId: item?._id,
                name,
                price,
                image,
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Added to cart",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Do  you want to log in?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log in"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }
    return (
        <div>
            <div className=" shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body py-0">
                    <h2 className="card-title block mt-2 text-center">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleAddCart(properties)} className="btn text-center border-b-2 border-b-black mb-5 mt-2">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;