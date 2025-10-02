import React from "react"
import { store, update } from "@/routes/products"
import { CourseClass, ProductType, CategoryType } from "@/types/index"
import { useForm, usePage } from "@inertiajs/react"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatDateTimeLocal } from "@/lib/utils";


interface ProductFormProps {
    productData?: ProductType;
    categories: CategoryType[];
    courseClass?: CourseClass;
}

const ProductForm = ({ productData, categories, courseClass }: ProductFormProps) => {
    console.log(courseClass)

    const { data, setData, post, put, reset, errors, progress } = useForm({
        category_id: productData?.category_id || "",
        name: productData?.name || "",
        price: productData?.price || 0,
        discount: productData?.discount || 0,
        is_active: productData?.is_active ?? true,
        features: productData?.features || [{ name: "" }],
        topic: courseClass?.topic || "",
        zoom_link: courseClass?.zoom_link || "",
        yt_link: courseClass?.yt_link || "",
        schedule: courseClass?.schedule || "",
        poster: null as File | null,
        active_class: courseClass?.is_active ?? true,
    })

    const { props } = usePage<{ flash: { success?: string, error?: string } }>();
    const flash = props.flash;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (productData) {
            put(update(productData.id).url, {
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

    const addFeature = () => {
        setData('features', [...data.features, { name: '' }]);
    };

    const removeFeature = (index: number) => {
        const features = [...data.features];
        features.splice(index, 1);
        setData('features', features);
    };

    const handleFeatureChange = (index: number, value: string) => {
        const features = [...data.features];
        features[index].name = value;
        setData('features', features);
    };

    return (
        <div className="bg-[#171717] p-2">
            {/* Flash Message */}
            {flash?.success && (
                <div className="p-4 bg-green-100 text-green-800 rounded-lg">
                    {flash.success}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                {/* Category Select */}
                <div className="mb-4">
                    <label htmlFor="category_id" className="block mb-1">
                        Category
                    </label>
                    <select
                        id="category_id"
                        value={data.category_id}
                        onChange={e => setData('category_id', e.target.value)}
                        className="border p-2 w-full rounded-sm"
                    >
                        <option value="" className="bg-[#171717]">Select Category</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id} className="bg-[#171717]">
                                {category.name}
                            </option>
                        ))}
                    </select>
                    {errors.category_id && <div className="text-red-500">{errors.category_id}</div>}
                </div>

                {/* Name */}
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

                {/* Price */}
                <div className="mb-4">
                    <label className="block mb-1">Price</label>
                    <Input
                        type="number"
                        value={data.price}
                        onChange={(e) => setData("price", parseInt(e.target.value))}
                        className="border p-2 w-full"
                    />
                    {errors.price && <div className="text-red-500">{errors.price}</div>}
                </div>

                {/* Discount */}
                <div className="mb-4">
                    <label className="block mb-1">Discount</label>
                    <Input
                        type="number"
                        value={data.discount}
                        onChange={(e) => setData("discount", parseInt(e.target.value))}
                        className="border p-2 w-full"
                    />
                    {errors.discount && <div className="text-red-500">{errors.discount}</div>}
                </div>

                {/* Is_active */}
                <div className="mb-4">
                    <label className="block mb-1">Active</label>
                    <input
                        type="checkbox"
                        checked={data.is_active}
                        onChange={e => setData('is_active', e.target.checked)}
                        className="border p-2"
                    />
                    {errors.is_active && <div className="text-red-500">{errors.is_active}</div>}
                </div>

                {/* Features */}
                <div className="mb-4">
                    <label className="block mb-1">Features</label>
                    {data.features.map((feature, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                            <Input
                                type="text"
                                value={feature.name}
                                onChange={e => handleFeatureChange(index, e.target.value)}
                                className="flex-1 p-2 border rounded"
                                placeholder="e.g. React"
                            />
                            <button
                                type="button"
                                className="px-3 py-1 bg-red-500 text-white rounded"
                                onClick={() => removeFeature(index)}
                                disabled={data.features.length === 1} // biar minimal ada 1 field
                            >
                                -
                            </button>
                            <button
                                type="button"
                                className="px-3 py-1 bg-green-500 text-white rounded"
                                onClick={addFeature}
                            >
                                +
                            </button>
                        </div>
                    ))}
                    {errors.features && <div className="text-red-500">{errors.features}</div>}
                </div>
                {progress && (
                    <div className="mb-2">Uploading... {progress.percentage}%</div>
                )}

                {(data.category_id == categories.find(category => category.slug == 'kelas-sunting')?.id || data.category_id == categories.find(category => category.slug == 'kelas-kepewaraan')?.id) && (
                    <React.Fragment>
                        {/* Topic */}
                        <div className="mb-4">
                            <label className="block mb-1">Topic</label>
                            <Input
                                required
                                type="text"
                                value={data.topic}
                                onChange={(e) => setData("topic", e.target.value)}
                                className="border p-2 w-full"
                            />
                            {errors.topic && <div className="text-red-500">{errors.topic}</div>}
                        </div>

                        {/* Zoom_link */}
                        <div className="mb-4">
                            <label className="block mb-1">Zoom Link</label>
                            <Input
                                type="text"
                                value={data.zoom_link}
                                onChange={(e) => setData("zoom_link", e.target.value)}
                                className="border p-2 w-full"
                            />
                            {errors.zoom_link && <div className="text-red-500">{errors.zoom_link}</div>}
                        </div>
                        {/* Yt_link */}
                        <div className="mb-4">
                            <label className="block mb-1">Youtube Link</label>
                            <Input
                                type="text"
                                value={data.yt_link}
                                onChange={(e) => setData("yt_link", e.target.value)}
                                className="border p-2 w-full"
                            />
                            {errors.yt_link && <div className="text-red-500">{errors.yt_link}</div>}
                        </div>

                        {/* Schedule */}
                        <div className="mb-4">
                            <label className="block mb-1">Schedule</label>
                            <input
                                type="datetime-local"
                                value={formatDateTimeLocal(data.schedule)}
                                onChange={(e) => setData("schedule", e.target.value)}
                                className="border p-2"
                            />
                            {errors.schedule && <div className="text-red-500">{errors.schedule}</div>}
                        </div>

                        {/* Poster */}
                        <div className="mb-4">
                            <label className="block mb-1">Poster</label>
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setData("poster", e.target.files ? e.target.files[0] : null)}
                                className="border p-2 w-full"
                            />
                            {errors.poster && <div className="text-red-500">{errors.poster}</div>}
                        </div>

                        <div className='m-3'>

                            {data.poster instanceof File ?
                                <img
                                    src={URL.createObjectURL(data.poster)}
                                    alt="Preview"
                                    className="mt-2 w-20 h-20 object-cover rounded"
                                /> : courseClass?.poster && (
                                    <img
                                        src={`/storage/${courseClass.poster}`}
                                        alt="Old"
                                        className="mt-2 w-20 h-20 object-cover rounded"
                                    />
                                )}

                        </div>

                        {/* Active Class */}
                        <div className="mb-4">
                            <label className="block mb-1">Active Class</label>
                            <input
                                type="checkbox"
                                checked={data.active_class}
                                onChange={e => setData('active_class', e.target.checked)}
                                className="border p-2"
                            />
                            {errors.active_class && <div className="text-red-500">{errors.active_class}</div>}
                        </div>

                    </React.Fragment>
                )}

                {progress && (
                    <div className="mb-2">Uploading... {progress.percentage}%</div>
                )}

                <Button type="submit" className="w-50 bg-white text-black hover:bg-gray-200">
                    {productData ? "Edit" : "Create"}
                </Button>
            </form>

        </div>
    )
}

export default ProductForm
