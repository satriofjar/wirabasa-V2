import { Head } from "@inertiajs/react"
import React from "react"
import { Link } from "@inertiajs/react"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { OrderType } from "@/types";
import { formatCurrency, getFinalPrice } from "@/lib/utils";
import { create } from "@/routes/payment";

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

    return (
        <React.Fragment>
            <Head title={user.name} />
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="my">
                    <span className="text-xl text-gray-800 font-semibold">Riwayat pembelian</span>
                    <div className="max-w-200 mx-auto">
                        {user.orders?.map((order, index) => (
                            <div key={index} className="my-1 px-3 py-2 border border-gray-800 flex flex-col rounded-sm">
                                <div className="flex justify-between ">
                                    <span className="text-black">Layanan</span>
                                    <span className="text-black">{order.product.name}</span>
                                </div>

                                <div className="flex justify-between ">
                                    <span className="text-black">Status</span>
                                    <span className="rounded-md bg-red-500 text-white text-sm px-2">{order.payment.status}</span>
                                </div>

                                <div className="flex justify-between ">
                                    <span className="text-black">Total Pembayaran</span>
                                    <span className="text-gray-800 text-sm px-2">{formatCurrency(getFinalPrice(order.product.price, order.product.discount, order.order_editing?.pages))}</span>
                                </div>
                                <div className="my-1">
                                    <Link
                                        href={create.url({
                                           query: {orderId: order.id}
                                        })}
                                        className="bg-green-500 px-3 py-1 rounded-sm text-sm hover:bg-green-600">
                                        Bayar
                                    </Link>
                                </div>
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
