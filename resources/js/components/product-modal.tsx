import { Link } from "@inertiajs/react";
import { formatCurrency, formatDate, getFinalPrice } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import { ProductModalProps } from "@/types";
import { create as createOrder } from "@/routes/order-product"

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {

    if (!isOpen || !product) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center p-5 border-b sticky top-0 bg-white">
                    <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">X</button>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="flex flex-col gap-0 py-0">
                        <span className="text-black text-xl font-bold my-4 my-[0]" >{formatCurrency(getFinalPrice(product.price, product.discount))}</span>
                        {product.discount != 0 && (
                            <div className="flex gap-2">
                                <span className="text-sm text-gray-500 line-through decoration-gray-500 py-0.5">{formatCurrency(product.price)}</span>
                                <span className="text-sm text-green-800 font-medium bg-green-200 rounded-xl px-3 py-0.5">Hemat {product.discount}%</span>
                            </div>
                        )}
                    </div>

                    {product.course_class && (
                    <div className="my-1">
                        <span className="text-gray-800">{formatDate(product.course_class.schedule)}</span>
                    </div>
                    )}

                    <div className="my-5 flex flex-col gap-y-3 md:mx-8">
                        {product.features.map((feature, index) => (
                            <div key={index} className="flex">
                                <CircleCheck className="text-blue-500 w-8 mx-2 flex-shrink-0" />
                                <p className="text-gray-800 text-md">{feature.name}</p>
                            </div>
                        ))}

                    </div>

                    <div className="flex justify-center mb-8">
                        <Link href={createOrder.url({ query: { productId: product.id } })} className="text-yellow-400 text-lg border-2 border-yellow-400 rounded-sm px-3 py-1 hover:text-white hover:bg-yellow-400">
                            Beli Sekarang
                        </Link>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ProductModal;
