import { store, update } from "@/routes/testimony";
import { TestimoniesType } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface TestimonyFormProps {
    testimonyData?: TestimoniesType
}

const TestimonyForm = ({ testimonyData }: TestimonyFormProps) => {
    const { data, setData, post, put, reset, errors, progress } = useForm({
        name: testimonyData?.name || "",
        position: testimonyData?.position || "",
        message: testimonyData?.message || "",
    })


    const { props } = usePage<{ flash: { success?: string, error?: string } }>();
    const flash = props.flash;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault;

        if (testimonyData) {
            put(update(testimonyData.id).url, {
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
                    <label className="block mb-1">Position</label>
                    <Input
                        type="text"
                        value={data.position}
                        onChange={(e) => setData("position", e.target.value)}
                        className="border p-2 w-full"
                    />
                    {errors.position && <div className="text-red-500">{errors.position}</div>}
                </div>

                <div className="mb-4">
                    <label className="block mb-1">Message</label>
                    <Input
                        type="text"
                        value={data.message}
                        onChange={(e) => setData("message", e.target.value)}
                        className="border p-2 w-full"
                    />
                    {errors.message && <div className="text-red-500">{errors.message}</div>}
                </div>
                {progress && (
                    <div className="mb-2">Uploading... {progress.percentage}%</div>
                )}

                <Button type="submit" className="w-50 bg-white text-black hover:bg-gray-200">
                    {testimonyData ? "Edit" : "Create"}
                </Button>
            </form>

        </div>
    )
}

export default TestimonyForm;
