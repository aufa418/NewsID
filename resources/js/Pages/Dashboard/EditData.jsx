import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function EditData(props) {
    console.log('Edit data ', props)
    const { data, setData, post, processing, errors, reset } = useForm({
        id:props.data_edit[0].id,
        title: props.data_edit[0].title,
        body: props.data_edit[0].body,
        category: props.data_edit[0].category,
        author_id: props.auth.user.id,
        author_name: props.auth.user.name
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        await post(route('editNews'))
    }

    return (
        <AuthenticatedLayout
            user={props.auth}
        >
            <Head title="Dashboard" />

            <div className="container mt-3">
                <div className="border p-4 w-full lg:w-6/12">
                    <h1 className='text-slate-800 font-black text-3xl text-center mb-4'>Update News</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <InputLabel htmlFor="title" value="Title" />

                            <TextInput
                                id="title"
                                type="text"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full "
                                isFocused={true}
                                onChange={(e) => setData('title', e.target.value)}
                            />
                        </div>
                        <div className='mt-4'>
                            <InputLabel htmlFor="body" value="Body" />

                            <TextInput
                                id="body"
                                type="text"
                                name="body"
                                // value={props.data.body}
                                value={data.body}
                                className="mt-1 block w-full "
                                isFocused={true}
                                onChange={(e) => setData('body', e.target.value)}
                            />
                        </div>
                        <div className='mt-4'>
                            <InputLabel htmlFor="category" value="Category" />

                            <TextInput
                                id="category"
                                type="text"
                                name="category"
                                value={data.category}
                                className="mt-1 block w-full "
                                isFocused={true}
                                onChange={(e) => setData('category', e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className='btn bg-primary text-white mt-10 font-black px-5'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
