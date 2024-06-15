import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUser } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users'/*, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            }*/);
            return res.data;
        }
    })
    const handleUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })

            }
        });
    }
    const handleRole = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Make this user Admin",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,make admin"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "User role updated",

                                icon: "success"
                            });
                            refetch();
                        }
                    })

            }
        });
    }
    return (
        <div className="px-5 py-5">
            <SectionTitle heading="Manage All users" subHeading="---How Many---"></SectionTitle>
            <section className="my-10 mx-16 bg-white ">
                <div className="flex justify-around mb-10">
                    <h1 className="text-3xl mt-5">Total Users : {users.length}</h1>

                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((item, idx) => <tr key={item._id}>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.email}
                                    </td>
                                    <td>{item.role == 'admin' ? <div className="badge badge-primary">admin</div> : <button className="btn btn-ghost btn-md text-orange-500" onClick={() => handleRole(item._id)}><FaUser /></button>}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-sm text-red-500" onClick={() => handleUser(item._id)}><FaTrash /></button>
                                    </th>
                                </tr>)}


                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllUsers;