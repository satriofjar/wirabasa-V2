import TestimonyForm from '@/components/dashboard/testomony-form';
import AppLayout from '@/layouts/app-layout';
import { TestimoniesType, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Category',
        href: '/create-category',
    },
];

const EditTestimony = ({testimony}: {testimony: TestimoniesType}) => {
  return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Project" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <TestimonyForm testimonyData={testimony} />
            </div >
        </AppLayout >
  )
}

export default EditTestimony
