import { Link, Head } from "@inertiajs/react"
import React from "react"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { OrderType, CourseClassType } from "@/types";
import { formatCurrency, formatDate } from "@/lib/utils";
import { Download, Upload } from "lucide-react";
import { IMG_URL } from "@/lib/config";

interface UserProfileType {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    orders: OrderType[];
    created_at: string;
    updated_at: string;
}

const Profile = ({ user }: { user: UserProfileType }) => {
    const courseClass = user.orders.filter((order) => order.product.course_class != null);

    return (
        <React.Fragment>
            <Head title={user.name} />
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="my">
                    <span className="text-xl text-gray-800 font-semibold">Kelas yang Diikuti</span>
                    <div className="grid grid-cols-2 gap-2 my-5">
                        {courseClass?.map((order, index) => (
                            <div key={index} className="my-1 pe-3 border border-gray-800 flex rounded-sm">
                                <div className="w-50">
                                    <img src={IMG_URL + order.product.course_class?.poster} alt="" className="rounded-l-sm" />
                                </div>
                                <div className="flex flex-col ms-5 my-2">
                                    <span className="text-black text-xl ">{order.product.course_class.topic}</span>
                                    <span className="text-gray-600 text-sm">{formatDate(order.product.course_class.schedule)}</span>
                                    <div className="my-auto">
                                        {order.product.course_class.yt_link ?
                                            <a href={order.product.course_class.yt_link} className="text-white bg-yellow-500 ps-3 pe-4 py-1 rounded-sm hover:bg-yellow-600" target="_blank">Tonton Kelas</a> :
                                            <a href={order.product.course_class.zoom_link} className="text-white bg-red-500 ps-3 pe-4 py-1 rounded-sm hover:bg-red-600" >Join Live</a>
                                        }
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>


                <div className="my">
                    <span className="text-xl text-gray-800 font-semibold">Riwayat pembelian</span>
                    <div className="max-w-200 mx-auto my-5">
                        {user.orders?.map((order, index) => (
                            <div key={index} className="my-1 px-3 py-2 my-2 border border-gray-800 flex flex-col rounded-sm">
                                <div className="flex justify-between mb-2">
                                    <span className="text-black text-lg font-semibold">Layanan</span>
                                    <span className="text-black text-md font-semibold">{order.product.name}</span>
                                </div>

                                <div className="flex justify-between my-1">
                                    <span className="text-black">Status Order</span>
                                    <span className={`rounded-md ${order.status == "pending" && "bg-yellow-500"} ${order.status == "success" && "bg-green-500"} ${order.status == "refund" && "bg-sky-500"} bg-red-500 text-white text-sm px-2`}>{order.status}</span>
                                </div>

                                <div className="flex justify-between ">
                                    <span className="text-black">Total Pembayaran</span>
                                    <span className="text-gray-800 text-md px-2">{formatCurrency(order.payment.amount)}</span>
                                </div>

                                {order.order_editing && (

                                    <div className="mt-4 pt-2 border-t-1">
                                        <div className="flex justify-between my-1">
                                            <span className="text-black">Total Pages</span>
                                            <span className="text-black mx-5">{order.order_editing.pages}</span>
                                        </div>
                                        <div className="flex justify-between mb-1.5">
                                            <span className="text-black">File Sunting</span>
                                            {order.order_editing.file_input ? <span className="text-sm text-white bg-green-500 rounded-md py-0.5 px-2">Uploaded</span> :
                                                <Link href={"/"}>
                                                    <Upload className="text-black mx-3" />
                                                </Link>}

                                        </div>

                                        <div className="flex justify-between">
                                            <span className="text-black">File Hasil Sunting</span>
                                            {order.order_editing.file_result ? <Download className="text-gray-700 mx-3" /> :
                                                (order.order_editing.file_input ?
                                                <span className="text-sm text-white bg-blue-400 rounded-md py-0.5 px-2">On Progress</span>:
                                                <span className="text-black mx-5">-</span>)}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <Footer />
        </React.Fragment>
    )
}

export default Profile
