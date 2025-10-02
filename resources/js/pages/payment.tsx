import React, { useState } from "react"
import { OrderType, OrderEditingType, CategoryType } from "@/types"
import { Link, useForm, usePage } from "@inertiajs/react";
import IconNav from "@/../assets/LogoNav.png"
import { formatCurrency, getDiscount, getFinalPrice } from "@/lib/utils";
import { store } from "@/routes/payment";


interface ProductType {
    id: string;
    category: CategoryType;
    name: string;
    price: number;
    discount: number;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;


}

interface OrderPaymentProps {
    id: string;
    order_editing: OrderEditingType | null;
    product: ProductType
    status: string
    created_at: Date;
    updated_at: Date;
}
const Payment = ({ order }: { order: OrderPaymentProps }) => {

    const [menuOpen, setMenuOpen] = useState(false);

    let totalPrice = getFinalPrice(order.product.price, order.product.discount);
    if (order.order_editing) {
        totalPrice *= order.order_editing.pages;
    }

    const { data, setData, post, put, reset, errors, progress } = useForm({
        order_id: order?.id || "",
        amount: totalPrice,
        proof: null as File | null,
        method: "manual_transfer",

    })

    const { props }: any = usePage();
    const flash = props.flash;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(store().url, {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: error => console.error(error),
        })
    }


    return (
        <React.Fragment>
            <nav className="sticky top-0 left-0 w-full z-50 bg-[rgba(0,123,255,0.3)] h-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 items-center h-full">
                    {/* Logo */}
                    <div className="">
                        <Link href="/" className="flex items-center">
                            <img src={IconNav} alt="Logo" className="h-12 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/" className="px-3 py-2 font-medium text-sm transition-colors duration-200 hover:text-blue-600 hover:border-b hover:border-b-2 hover:border-[#007bff] hover:border-solid text-xl text-gray-500 hover:text-blue-200">
                            Beranda
                        </Link>
                    </div>


                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex justify-end items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="focus:outline-none"
                        >
                            <svg
                                className={`w-6 h-6 text-white"
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {menuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden bg-white shadow-md">
                        <div className="px-4 py-3 flex flex-col gap-3">
                            <Link
                                href="/"
                                className="text-gray-800 hover:text-blue-600"
                                onClick={() => setMenuOpen(false)}
                            >
                                Beranda
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            <div className="max-w-7xl mx-auto my-10 px-4 sm:px-7 lg:px-8">
                {/* Flash Message */}
                {flash.success && (
                    <div className="p-4 bg-green-100 text-green-800 rounded-lg">
                        {flash.success}
                    </div>
                )}
                <span className="text-3xl text-black font-medium">Payment</span>
                <div className="grid grid-cols-2 max-w-180 mt-5">
                    <div className="">
                        <span className="text-black text-md">Jenis layanan</span>
                    </div>
                    <div className="">
                        <span className="text-black text-md">{order.product.name}</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 max-w-180">
                    <div className="">
                        <span className="text-black text-md">Harga</span>
                    </div>
                    <div className="">
                        <span className="text-black text-md">{formatCurrency(order.product.price)}</span>
                    </div>
                </div>

                {order.product.category.slug == 'jasa-sunting' && (
                    <div className="grid grid-cols-2 max-w-180">
                        <div className="">
                            <span className="text-black text-md">Jumlah halaman</span>
                        </div>
                        <div className="">
                            <span className="text-black text-md">{order.order_editing?.pages}</span>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-2 max-w-180">
                    <div className="">
                        <span className="text-black text-md">Diskon {order.product.discount > 0 && `${order.product.discount}%`}</span>
                    </div>
                    <div className="">
                        <span className="text-black text-md">
                            {order.product.discount > 0 ? formatCurrency(getDiscount(order.product.price, order.product.discount)) : "-"}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 max-w-180">
                    <div className="">
                        <span className="text-black text-md">Total Pembayaran</span>
                    </div>
                    <div className="">
                        <span className="text-black text-md">{formatCurrency(getFinalPrice(order.product.price, order.product.discount) * (order.order_editing?.pages ? order.order_editing?.pages : 1))}</span>
                    </div>
                </div>

                <div className="my-5">
                    <span className="text-2xl text-black font-medium">Pembayaran hanya dapat menggunakan transfer ShoppePay</span>
                </div>

                <div className="grid grid-cols-2 max-w-180">
                    <div className="">
                        <span className="text-black text-md">Nomor ShopeePay</span>
                    </div>
                    <div className="">
                        <span className="text-black text-md">081234567812</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 max-w-180">
                    <div className="">
                        <span className="text-black text-md">Atas Nama</span>
                    </div>
                    <div className="">
                        <span className="text-black text-md">Wirabasa</span>
                    </div>
                </div>


                <div className="my-5">
                    <span className="text-2xl text-black font-medium">Lakukan konfirmasi setelah melakukan pembayaran</span>
                </div>

                <div className="my">
                    <form onSubmit={handleSubmit}>
                        <div className="w-100">
                            <input type="file" className="border border-gray-500 rounded-lg w-full text-black file:bg-gray-300 file:p-2" required onChange={(e) => setData('proof', e.target.files ? e.target.files[0] : null)} />
                            {errors.proof && <div className="text-red-500">{errors.proof}</div>}
                        </div>
                        {progress && (
                            <div className="mb-2 text-black">Uploading... {progress.percentage}%</div>
                        )}

                        <button className="text-white bg-blue-600 rounded-sm px-5 py-1 my-5">Upload bukti bayar</button>
                    </form>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Payment
