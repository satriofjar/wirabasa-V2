import ProductForm from '@/components/dashboard/product-form';
import AppLayout from '@/layouts/app-layout';
import { CategoryType, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Category',
        href: '/create-category',
    },
];

const CreateProduct = ({ categories }: { categories: CategoryType[] }) => {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Project" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <ProductForm categories={categories} />
            </div >
        </AppLayout >
    )
}

export default CreateProduct;
