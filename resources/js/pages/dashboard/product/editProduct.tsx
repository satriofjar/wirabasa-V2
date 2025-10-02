import ProductForm from '@/components/dashboard/product-form';
import AppLayout from '@/layouts/app-layout';
import { CategoryType, ProductType, type BreadcrumbItem, CourseClass } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Category',
        href: '/create-category',
    },
];

const EditProduct = ({ product, categories, courseClass }: {product: ProductType, categories: CategoryType[], courseClass: CourseClass }) => {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Project" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <ProductForm productData={product} categories={categories} courseClass={courseClass}/>
            </div >
        </AppLayout >
    )
}

export default EditProduct;
