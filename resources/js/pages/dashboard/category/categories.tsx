import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { create as createCategory, edit, destroy as destroyCategory } from "@/routes/categories";
import { CategoryType } from '@/types/category';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Categories',
        href: '/categories',
    },
];

const Categories = ({ categories }: { categories: CategoryType[] }) => {
    console.log(categories)

    const { delete: destroy } = useForm({})
    const handleDelete = (id: string) => {
        if (confirm("Are you sure want to delete this skill?")) {
            const route = destroyCategory(id);
            destroy(route.url)
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="mx-5">

                <Head title="Categories" />
                <Link href={createCategory()} type="button" className="text-white text-center w-30 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Create
                </Link>

                <div className="bg-[#171717] p-2 my-5">
                    <table className="table-auto w-full border-collapse border border-gray-500">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-10">No</th>
                                <th className="border border-gray-300 px-10">Name</th>
                                <th className="border border-gray-300 px-10">Slug</th>
                                <th className="border border-gray-300 px-10">Description</th>
                                <th className="border border-gray-300 px-10">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories?.map((category, index) =>
                                <tr className="text-center" key={index}>
                                    <td className="border border-gray-300 px-10">{index + 1}</td>
                                    <td className="border border-gray-300 px-10">{category.name}</td>
                                    <td className="border border-gray-300 px-10">{category.slug}</td>
                                    <td className="border border-gray-300 px-10">{category.description}</td>
                                    <td className="border border-gray-300 px-10">
                                        <Link href={edit(category.id)} className="focus:outline-none w-22 text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:focus:ring-yellow-900">
                                            Edit
                                        </Link>

                                        <button onClick={() => handleDelete(category.id)} type="button" className="focus:outline-none w-22 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
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

export default Categories
