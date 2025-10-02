import React, { useState } from "react"
import { Head } from "@inertiajs/react";
import Navbar from "@/components/navbar";
import { CircleCheck } from "lucide-react";
import { formatCurrency, formatDate, getFinalPrice } from "@/lib/utils";
import Footer from "@/components/footer";
import ProductModal from "@/components/product-modal";
import { ProductType } from "@/types";

interface CategoresProductsType {
    id: string;
    name: string;
    slug: string;
    description: string;
    products: ProductType[];
    created_at: Date;
    updated_at: Date;

}
const Products = ({ categories }: { categories: CategoresProductsType[] }) => {
    const [selectProduct, setSelectProduct] = useState<ProductType | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = ({ product }: { product: ProductType }) => {
        setIsModalOpen(true);
        setSelectProduct(product)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);

    }


    return (
        <React.Fragment>
            <Head title="Layanan" />
            <Navbar />

            <ProductModal
                product={selectProduct}
                isOpen={isModalOpen}
                onClose={() => { setIsModalOpen(false) }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-black text-center text-3xl font-bold mt-5">Layanan WiraBaya Buat Kamu</h1>
                <p className="text-gray-800 text-center self-center text-lg my-8">Terampil berbahasa merupakan salah satu aset unggulan manusia yang mampu menjadi jembatan untuk mentransfer beragam pengetahuan. Semua orang memiliki kecerdasan, tapi tidak semua orang mampu menuraikan kecerdasan melalui gagasan dengan bahasa yang elegan. Asah kompeteni berbasahamu bersama WiraBasa.
                </p>

                {categories.map((category, index) => (
                    category.products.length !== 0 &&
                    <div key={index} className="my-5">
                        <h2 className="text-black text-2xl font-bold">{category.name}</h2>
                        <p className="text-gray-800 text-lg">{category.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                            {category.products.map((product, idx) => (

                                <div key={idx} className="w-76 h-100 my-4 mx-auto rounded-lg">
                                    <div className="w-full h-5 bg-yellow-400 rounded-t-lg border border-yellow-400" />
                                    <div className="w-full h-95 px-5 border-2 rounded-b-lg border-gray-400 border-t-yellow-400">
                                        <h3 className="text-gray-600 font-medium text-2xl my-3">{product.name.length > 20 ? `${product.name.slice(0, 20)}...` : product.name}</h3>
                                        <div className="w-full border border-gray-300" />
                                        {product.discount == 0 ?
                                            <div className="my-4">
                                                <span className="text-black text-xl font-bold my-[0]" >{formatCurrency(product.price)}</span>
                                            </div> :

                                            <div className="flex flex-col gap-0 py-0 my-3">
                                                <span className="text-black text-xl font-bold my-4 my-[0]" >{formatCurrency(getFinalPrice(product.price, product.discount))}</span>
                                                <div className="flex gap-2">
                                                    <span className="text-sm text-gray-500 line-through decoration-gray-500 py-0.5">{formatCurrency(product.price)}</span>
                                                    <span className="text-sm text-green-800 font-medium bg-green-200 rounded-xl px-3 py-0.5">Hemat {product.discount}%</span>
                                                </div>
                                            </div>
                                        }

                                        {product.course_class && (
                                        <div className="my-1">
                                                    <span className="text-gray-800">{formatDate(product.course_class.schedule)}</span>
                                                </div>
                                        )}

                                        <div className="flex justify-center py-2">
                                            <button
                                                type="button"
                                                onClick={() => { handleOpenModal({ product }) }}
                                                className="bg-yellow-400 text-white px-8 py-2 rounded-md hover:bg-yellow-500"
                                            >
                                                Lihat Detail

                                            </button>
                                        </div>

                                        <div className="my-3">
                                            {product.features.map((feature, i) => (

                                                <div key={i} className="flex">
                                                    <CircleCheck className="text-blue-500 w-8 mx-2" />
                                                    <p className="text-gray-800">{feature.name.slice(0, 50)}...</p>
                                                </div>
                                            ))}

                                        </div>
                                    </div>

                                </div>
                            ))}


                        </div>


                    </div>
                ))}

            </div>

            <Footer />
        </React.Fragment>

    )
}

export default Products
