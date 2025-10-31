import React, { useEffect, useState } from "react";
import { usePage, Head } from "@inertiajs/react";
import { ProductType, CategoryType, Auth } from "@/types";
import { formatCurrency, formatDate, getDiscount, getFinalPrice } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import NavbarLayanan from "@/components/navbar-layanan";
import Loading from "@/../assets/loading.gif";
import { API_URL, CLIENT_KEY } from "@/lib/config";


declare global {
    interface Window {
        snap: any;
    }
}

interface OrderProductProps {
    product: ProductType;
    category: CategoryType;
}

interface OrderFornType {
    user_id: number;
    product_id: string;
    category: string;
    pages: number;

}
const OrderProduct = ({ product, category }: OrderProductProps) => {

    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoadng] = useState(false);

    const { auth } = usePage<{ auth: Auth }>().props;


    const handlePages = (opr: string) => {

        if (opr === "+") {
            setTotalPages(totalPages + 1);
        } else {
            if (totalPages > 1) {
                setTotalPages(totalPages - 1);
            }
        }
    }

    const handleSubmit = async () => {
        setLoadng(true);

        const formData: OrderFornType = {
            user_id: auth.user.id,
            product_id: product.id,
            category: category.slug,
            pages: totalPages,
        }

        const token = document.cookie
            .split('; ')
            .find(row => row.startsWith('XSRF-TOKEN='))
            ?.split('=')[1];

        try {
            const response = await fetch(API_URL + '/order-product/', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'X-XSRF-TOKEN': decodeURIComponent(token || ''),
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setLoadng(false);
            handlePayment(data.token, data.order_id);


        } catch (error) {
            throw error;
        }

    }


    const handlePayment = (token: string, order_id: string) => {
        window.snap.pay(token, {
            onSuccess: (result: any) => {

            },
            onPending: (result: any) => {

            },
            onError: (result: any) => {

            },
            onClose: async (result: any) => {

                const token = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('XSRF-TOKEN='))
                    ?.split('=')[1];
                try {
                    await fetch(API_URL + '/order-product/' + order_id, {
                        method: 'DELETE',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-XSRF-TOKEN': decodeURIComponent(token || ''),
                        },
                    })
                } catch (error) {
                    throw error;
                }


            }
        })

    }

    useEffect(() => {

        const script = document.createElement("script");
        script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
        script.setAttribute("data-client-key", CLIENT_KEY);
        script.async = true;
        document.body.appendChild(script);


        return () => {
            document.body.removeChild(script);
        };

    }, [])


    return (
        <React.Fragment>
            <Head title={product.name} />
            <NavbarLayanan auth={auth} />

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
                            <span className="text-black text-sm">Diskon {product.discount}%</span>
                            <span className="text-black text-sm">{product.discount == 0 ? "-" : formatCurrency(getDiscount(product.price, product.discount))}</span>
                        </div>

                        <hr className="my-2" />

                        <div className="flex flex-row w-full justify-between">
                            <span className="text-black text-sm">Total</span>
                            <span className="text-black text-sm">{formatCurrency(getFinalPrice(product.price * totalPages, product.discount))}</span>
                        </div>

                    </div>

                    <div className="my-3 flex flex-col">
                        <div className="mx-auto">
                            <button
                                type="submit"
                                className="bg-green-500 text-white px-10 py-1 rounded-sm"
                                onClick={handleSubmit}
                            >

                                {loading ? <img src={Loading} alt="loading" className="w-6" /> : "Beli"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default OrderProduct;
