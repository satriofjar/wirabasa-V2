import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm  } from '@inertiajs/react';
import { create as createProduct, edit, destroy as destroyProduct } from "@/routes/products";
import { ProductType } from '@/types';
import { formatCurrency } from '@/lib/utils';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

const Products = ({ products }: { products: ProductType[] }) => {

    const { delete: destroy } = useForm({})
    const handleDelete = (id: string) => {
        if (confirm("Are you sure want to delete this skill?")) {
            const route = destroyProduct(id);
            destroy(route.url)
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="mx-5">

                <Head title="Categories" />
                <Link href={createProduct()} type="button" className="text-white text-center w-30 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Create
                </Link>

                <div className="bg-[#171717] p-2 my-5">
                    <table className="table-auto w-full border-collapse border border-gray-500">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-10">No</th>
                                <th className="border border-gray-300 px-10">Name</th>
                                <th className="border border-gray-300 px-10">Price</th>
                                <th className="border border-gray-300 px-10">Discount</th>
                                <th className="border border-gray-300 px-10">Active</th>
                                <th className="border border-gray-300 px-10">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((product, index) =>
                                <tr className="text-center" key={index}>
                                    <td className="border border-gray-300 px-10">{index + 1}</td>
                                    <td className="border border-gray-300 px-10">{product.name}</td>
                                    <td className="border border-gray-300 px-10">{formatCurrency(product.price)}</td>
                                    <td className="border border-gray-300 px-10">{`${product.discount}%`}</td>
                                    <td className="border border-gray-300 px-10">{product.is_active ? "Aktif" : "Non Aktif"}</td>
                                    <td className="border border-gray-300 px-10">
                                        <Link href={edit(product.id)} className="focus:outline-none w-22 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:focus:ring-yellow-900">
                                            Edit
                                        </Link>

                                        <button onClick={() => handleDelete(product.id)} type="button" className="focus:outline-none w-22 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>

            </div>
        </AppLayout>
    )
}

export default Products
