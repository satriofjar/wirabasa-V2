import React, { useState } from "react";
import { Link, router, useForm, usePage } from "@inertiajs/react";
import IconNav from "@/../assets/LogoNav.png"
import { ProductType, CategoryType, Auth } from "@/types";
import { } from "@/routes/"
import { formatCurrency, formatDate, getDiscount, getFinalPrice } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import { store } from "@/routes/order-product";
import { show } from "@/routes/user";


interface OrderProductProps {
    product: ProductType;
    category: CategoryType;
}
const OrderProduct = ({ product, category }: OrderProductProps) => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [totalPages, setTotalPages] = useState(1);

    const { auth } = usePage<{ auth: Auth }>().props;

    const { data, setData, post, put, reset, errors, progress } = useForm({
        user_id: auth.user.id,
        product_id: product.id,
        category: category.slug,
        status: "pending",
        pages: 0,


    })
    const handleSubmit = () => {
        setData('pages', totalPages);
        post(store().url, {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: error => console.error(error),
        })
    }

    const handlePages = (opr: string) => {
        if (opr == "+") {
            setData('pages', totalPages + 1);
            setTotalPages(totalPages + 1)
        } else {
            if (totalPages > 1) {
                setData('pages', totalPages - 1);
                setTotalPages(totalPages - 1)
            }
        }

    }
    return (
        <React.Fragment>
            <nav className="sticky top-0 left-0 w-full z-50 bg-[rgba(0,123,255,0.3)] h-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img src={IconNav} alt="Logo" className="h-12 w-auto" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/" className="px-3 py-2 font-medium text-sm transition-colors duration-200 hover:text-blue-600 hover:border-b hover:border-b-2 hover:border-[#007bff] hover:border-solid text-xl text-gray-500 hover:text-blue-200">
                            Beranda
                        </Link>
                    </div>

                    {/* Tombol Login & Sign Up */}
                    {auth.user ?
                        <div className="hidden md:flex items-center gap-4">
                            <Link
                                href={show(auth.user.id)}
                                className="px-5 py-1 rounded-sm text-xl font-medium transition-colors duration-200 hover:border-[#007bff70] hover:bg-[#007bff70] hover:text-white text-white hover:text-blue-200">
                               {auth.user.name}
                            </Link>
                        </div> :
                        <div className="hidden md:flex items-center gap-4">
                            <Link
                                href="/login"
                                className="px-5 py-1 rounded-sm text-xl font-medium transition-colors duration-200 hover:border-[#007bff70] hover:bg-[#007bff70] hover:text-white text-white hover:text-blue-200">
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="px-4 py-1 rounded-sm text-xl font-medium border transition-colors duration-200 border-white text-white hover:bg-white hover:text-blue-600">
                                Sign Up
                            </Link>
                        </div>
                    }

                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex items-center">
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
                            <div className="border-t border-gray-200 pt-3 mt-3 flex flex-col gap-3">
                                <Link
                                    href="/login"
                                    className="text-blue-600 hover:text-blue-800"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-4 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-600 hover:text-white text-center"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <div className="grid grid-cols-1 gap-3 md:flex max-w-7xl mx-auto my-10 sm:px-6 lg:px-8">
                <div className="flex flex-col w-full px-5">
                    <span className="text-black text-2xl font-bold">{product.name}</span>

                    {product.discount == 0 ?
                        <span className="text-black text-xl font-bold my-4 my-[0]" >{formatCurrency(product.price)}</span> :

                        <div className="flex flex-col gap-0 py-2">
                            <span className="text-black text-xl font-bold my-[0]" >{formatCurrency(getFinalPrice(product.price, product.discount))}</span>
                            <div className="flex gap-2">
                                <span className="text-sm text-gray-500 line-through decoration-gray-500 py-0.5">{formatCurrency(product.price)}</span>
                                <span className="text-sm text-green-800 font-medium bg-green-200 rounded-xl px-3 py-0.5">Hemat {product.discount}%</span>
                            </div>
                        </div>
                    }

                    {product.course_class && (
                        <div className="mt-3">
                            <span className="text-gray-600">{formatDate(product.course_class.schedule)}</span>
                        </div>
                    )}

                    <span className="text-black text-xl font-medium">Layanan yang akan didapatkan <span className="text-yellow-500">Sobat Rasa</span></span>

                    <div className="my-5 flex flex-col gap-y-3 md:mx-8">
                        {product.features.map((feature, index) => (
                            <div key={index} className="flex">
                                <CircleCheck className="text-blue-500 w-8 mx-2 flex-shrink-0" />
                                <p className="text-gray-800 text-md">{feature.name}</p>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="w-0 md:w-0.1 border border-gray-300"></div>

                {/* Right side */}
                <div className="flex flex-col w-full px-5">
                    {category.slug == 'jasa-sunting' && (
                        <div className="mb-3">
                            <span className="text-xl text-black">Mau sunting berapa halaman?</span>
                            <div className="flex flex-row items-center border-1 border-gray-800 rounded-lg px-3 justify-between py-1 my-1">
                                <span className="text-md text-black font-medium"><span className="me-1">{totalPages}</span> Halaman</span>
                                <div className="">
                                    <button
                                        type="button"
                                        className="px-3 py-1 bg-red-500 text-white rounded mx-1 hover:bg-red-600"
                                        onClick={() => handlePages("-")}
                                    >-</button>
                                    <button
                                        type="button"
                                        className="px-3 py-1 bg-green-500 text-white rounded mx-1"
                                        onClick={() => handlePages("+")}
                                    >+</button>
                                </div>
                            </div>

                        </div>
                    )}
                    <div className="rounded-sm bg-gray-300 px-8 py-5">

                        <strong className="text-black text-lg">Order Summary</strong>
                        <div className="flex flex-row w-full justify-between">
                            <span className="text-black text-sm">Jenis layanan</span>
                            <span className="text-black text-sm">{product.name}</span>
                        </div>

                        <div className="flex flex-row w-full justify-between">
                            <span className="text-black text-sm">Harga</span>
                            <span className="text-black text-sm">{formatCurrency(product.price)}</span>
                        </div>

                        {category.slug == 'jasa-sunting' && (
                            <div className="flex flex-row w-full justify-between">
                                <span className="text-black text-sm">Jumlah Halaman</span>
                                <span className="text-black text-sm">{totalPages}</span>
                            </div>
                        )}

                        <div className="flex flex-row w-full justify-between">
                            <span className="text-black text-sm text-red-500">Diskon {product.discount}%</span>
                            <span className="text-black text-sm text-red-500">{product.discount == 0 ? "-" : formatCurrency(getDiscount(product.price, product.discount))}</span>
                        </div>

                        <hr className="my-2" />

                        <div className="flex flex-row w-full justify-between">
                            <span className="text-black text-sm text-red-500">Total</span>
                            <span className="text-black text-sm text-red-500">{formatCurrency(getFinalPrice(product.price * totalPages, product.discount))}</span>
                        </div>

                    </div>

                    <div className="my-3 flex flex-col">
                        <div className="mx-auto">
                            <button
                                type="submit"
                                className="bg-green-500 text-white px-10 py-1 rounded-sm"
                                onClick={handleSubmit}
                            >
                                Beli
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default OrderProduct;
