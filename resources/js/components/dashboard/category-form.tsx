import React from "react"
import { CategoryType } from "@/types"
import { useForm, usePage } from "@inertiajs/react"
import { store, update } from "@/routes/categories"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface CategoryFormProps {
    categoryData?: CategoryType
}

const CategoryForm = ({ categoryData }: CategoryFormProps) => {

    const { data, setData, post, put, reset, errors, progress } = useForm({
        name: categoryData?.name || "",
        slug: categoryData?.slug || "",
        description: categoryData?.description || "",
    })

    const { props } = usePage<{ flash: { success?: string, error?: string } }>();
    const flash = props.flash;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault;

        if (categoryData) {
            put(update(categoryData.id).url, {
                preserveScroll: true,
                onSuccess: () => reset(),
                onError: error => console.error(error),
            })
        } else {
            post(store().url, {
                preserveScroll: true,
                onSuccess: () => reset(),
                onError: error => console.error(error),
            })
        }
    }

    return (
        <div className="bg-[#171717] p-2">
            {/* Flash Message */}
            {flash?.success && (
                <div className="p-4 bg-green-100 text-green-800 rounded-lg">
                    {flash.success}
                </div>
            )}

            {flash?.error && (
                <div className="p-4 bg-red-100 text-green-800 rounded-lg">
                    {flash.error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-1">Name</label>
                    <Input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="border p-2 w-full"
                    />
                    {errors.name && <div className="text-red-500">{errors.name}</div>}
                </div>

                <div className="mb-4">
                    <label className="block mb-1">Slug</label>
                    <Input
                        type="text"
                        value={data.slug}
                        onChange={(e) => setData("slug", e.target.value)}
                        className="border p-2 w-full"
                    />
                    {errors.slug && <div className="text-red-500">{errors.slug}</div>}
                </div>

                <div className="mb-4">
                    <label className="block mb-1">Description</label>
                    <Input
                        type="text"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        className="border p-2 w-full"
                    />
                    {errors.description && <div className="text-red-500">{errors.description}</div>}
                </div>

                {progress && (
                    <div className="mb-2">Uploading... {progress.percentage}%</div>
                )}

                <Button type="submit" className="w-50 bg-white text-black hover:bg-gray-200">
                    {categoryData ? "Edit" : "Create"}
                </Button>
            </form>

        </div>
    )
}

export default CategoryForm
