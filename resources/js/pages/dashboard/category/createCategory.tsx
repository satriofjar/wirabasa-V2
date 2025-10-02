import CategoryForm from '@/components/dashboard/category-form';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Category',
        href: '/create-category',
    },
];

const CreateCategory = () => {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Project" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <CategoryForm />
            </div >
        </AppLayout >
    )
}

export default CreateCategory;
